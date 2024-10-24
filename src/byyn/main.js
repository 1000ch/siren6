import { createApp } from 'vue';
import { PlusMinusInputNumbur } from '../components/plus_minus_input_numbur'
import { cell, NONE, BYYN, TUTI, MIZU, ITEM, PREV_ITEM } from '../logic/byyn/cell';
import { byynCheck } from '../logic/byyn/byyn_check';
import { TL, TR, BL, BR } from '../logic/byyn/position';

let isFisrt = true;
let isMouseDown = false;

let simTimer = 0;

window.addEventListener('mousedown', () => {
    isMouseDown = true;
});
window.addEventListener('mouseup', () => {
    isMouseDown = false;
    isFisrt = true;
});
window.addEventListener('touchend', () => {
    isFisrt = true;
});

const vm = {
    components: {
        PlusMinusInputNumbur
    },
    data() {
        return {
            BYYN: BYYN, TUTI: TUTI, MIZU: MIZU,
            roomSizeX: 12,
            roomSizeY: 12,
            roomSizeMin: 6,
            roomSizeMax: 30,
            fillType: NONE,
            mainFillType: BYYN,
            useUdewa: false,
            isTubo: false,
            room: [],
            isClickSearch: false,
            pathList: [],
            pathIndex: 0,
            start: null,
        }
    },
    created() {
        // noop
    },
    mounted() {
        this.createRoom();
    },
    computed: {
        existsResult() {
            return this.pathList.length > 0;
        },
        arrowClassName() {
            if (this.start === null) {
                return '';
            }
            const dir = this.start.dir;
            if (dir.equal(TL)) {
                return 'top-left';
            }
            else if (dir.equal(TR)) {
                return 'top-right';
            }
            else if (dir.equal(BL)) {
                return 'bottom-left';
            }
            else if (dir.equal(BR)) {
                return 'bottom-right';
            }
            throw new Error(`ここに来ることはあり得ない`);
        }
    },
    methods: {
        onChangeRoomSize() {
            this.isClickSearch = false;

            if (this.roomSizeX < this.roomSizeMin) {
                this.roomSizeX = this.roomSizeMin;
            }
            else if (this.roomSizeX > this.roomSizeMax) {
                this.roomSizeX = this.roomSizeMax;
            }

            if (this.roomSizeY < this.roomSizeMin) {
                this.roomSizeY = this.roomSizeMin;
            }
            else if (this.roomSizeY > this.roomSizeMax) {
                this.roomSizeY = this.roomSizeMax;
            }

            this.createRoom();
        },

        onMouseDownCell(event) {
            if (this.existsResult) {
                return;
            }
            this.isClickSearch = false;

            const {row, col} = this.elementToRowCol(event.target);
            
            if (this.room[row][col].fill === this.mainFillType) {
                this.fillType = NONE;
            }
            else {
                this.fillType = this.mainFillType;
            }
            this.room[row][col].fill = this.fillType;
            
            isFisrt = false;
        },
        onMouseEnterCell(event) {
            if (this.existsResult) {
                return;
            }

            const {row, col} = this.elementToRowCol(event.target);

            if (isFisrt) {
                if (this.room[row][col].fill === this.mainFillType) {
                    this.fillType = NONE;
                }
                else {
                    this.fillType = this.mainFillType;
                }
                isFisrt = false;
            }

            if (isMouseDown) {
                this.isClickSearch = false;
                this.room[row][col].fill = this.fillType;
            }
        },

        onTouchMoveCell(event) {
            if (this.existsResult) {
                return;
            }
            this.isClickSearch = false;

            event.preventDefault();

            const touch = event.touches[0];
            const target = document.elementFromPoint(touch.clientX, touch.clientY);

            if (target.tagName !== 'TD') {
                return;
            }

            const {row, col} = this.elementToRowCol(target);

            if (isFisrt) {
                if (this.room[row][col].fill === this.mainFillType) {
                    this.fillType = NONE;
                }
                else {
                    this.fillType = this.mainFillType;
                }
                isFisrt = false;
            }
            this.room[row][col].fill = this.fillType;
        },

        onClickSearch() {
            this.isClickSearch = true;
            this.pathList = byynCheck(this.room.map(row => row.map(c => c.fill)), this.useUdewa, this.isTubo);

            if (this.pathList.length === 0) {
                return;
            }

            this.start = this.pathList[this.pathIndex][0];
            this.paintPath();
        },

        onClickReset() {
            const res = confirm('本当にリセットしますか？');
            if (!res) {
                return;
            }

            this.isClickSearch = false;
            for (let row = 0; row < this.room.length; row++) {
                for (let col = 0; col < this.room[row].length; col++) {
                    this.room[row][col].fill = NONE;
                }
            }
        },

        onClickPathList(index) {
            clearInterval(simTimer);
            this.removeItem();
            
            this.pathIndex = index;
            this.start = this.pathList[this.pathIndex][0];
            this.paintPath();
        },

        onClickSimulate() {
            clearInterval(simTimer);
            this.removeItem();

            const path = this.pathList[this.pathIndex];
            const lastIndex = path.length - 1;
            let index = 0;
            let prevPos = null;

            simTimer = setInterval(() => {
                if (prevPos !== null) {
                    this.room[prevPos.row][prevPos.col].item = PREV_ITEM;
                }

                const pos = path[index].pos;

                if (pos === null) {
                    this.room[prevPos.row][prevPos.col].item = PREV_ITEM;
                }
                else {
                    this.room[pos.row][pos.col].item = ITEM;
                }

                prevPos = pos;
                index += 1;

                if (index > lastIndex) {
                    clearInterval(simTimer);
                }
            }, 100);
        },

        onClickCorrect() {
            clearInterval(simTimer);
            this.isClickSearch = false;
            this.pathList = [];
            this.pathIndex = 0;
            this.start = null;

            this.removeItem();
        },

        createRoom() {
            const newRoom = [];
            for (let row = 0; row < this.roomSizeY; row++) {
                newRoom.push([]);
                for (let col = 0; col < this.roomSizeX; col++) {
                    newRoom[row].push(cell());
                }
            }

            for (let row = 0; row < newRoom.length; row++) {
                for (let col = 0; col < newRoom[row].length; col++) {
                    if (row === 0 || row === newRoom.length - 1) {
                        newRoom[row][col].fill = this.mainFillType;
                    }
                    else if (col === 0 || col === newRoom[0].length -1) {
                        newRoom[row][col].fill = this.mainFillType;
                    }
                }
            }

            this.room = newRoom;
        },
        resetRoom() {
            for (let row = 0; row < this.roomSizeY; row++) {
                for (let col = 0; col < this.roomSizeX; col++) {
                    this.room[row][col].fill = NONE;
                }
            }
        },
        elementToRowCol(element) {
            const row = Number(element.dataset.row);
            const col = Number(element.dataset.col);
            return {row, col};
        },
        paintPath() {
            const path = this.pathList[this.pathIndex];
            for (let i = 0; i < path.length; i++) {
                const pos = path[i].pos;
                if (pos === null) {
                    // 何もしない
                }
                else if (i === path.length - 1) {
                    this.room[pos.row][pos.col].item = ITEM;
                }
                else {
                    this.room[pos.row][pos.col].item = PREV_ITEM;
                }
            }
        },
        removeItem() {
            for (let row = 0; row < this.room.length; row++) {
                for (let col = 0; col < this.room.length; col++) {
                    const type = this.room[row][col].item;
                    if (type === ITEM || type === PREV_ITEM) {
                        this.room[row][col].item = NONE;
                    }
                }
            }
        },
    }
};

createApp(vm).mount('#app');
