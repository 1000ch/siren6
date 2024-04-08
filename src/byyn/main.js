import { createApp } from 'vue';
import { PlusMinusInputNumbur } from '../components/plus_minus_input_numbur'
import { NONE, BYYN, TUTI, ITEM, PREV_ITEM } from '../logic/byyn/cell';
import { byynCheck } from '../logic/byyn/byyn_check';
import { TL, TR, BL, BR } from '../logic/byyn/position';

let isFisrt = true;
let isMouseDown = false;

let roomTimerId1 = 0;
let roomTimerId2 = 0;
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
            BYYN: BYYN, TUTI: TUTI,
            roomSize: 18,
            roomSizeMin: 10,
            roomSizeMax: 30,
            fillType: NONE,
            mainFillType: BYYN,
            useUdewa: false,
            isTubo: false,
            room: [],
            dummyRoom: [],
            isClickSearch: false,
            pathList: [],
            pathIndex: 0,
            start: null,
        }
    },
    created() {
        window.addEventListener('resize', () => {
            this.cellToSquare();
        });
    },
    mounted() {
        this.createRoom();
        this.cellToSquare();
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
            if (this.roomSize < this.roomSizeMin) {
                this.roomSize = this.roomSizeMin;
            }
            else if (this.roomSize > this.roomSizeMax) {
                this.roomSize = this.roomSizeMax;
            }

            this.createRoom();
            this.cellToSquare();
        },

        onMouseDownCell(event) {
            if (this.existsResult) {
                return;
            }

            const {row, col} = this.elementToRowCol(event.target);
            
            if (this.room[row][col] === this.mainFillType) {
                this.fillType = NONE;
            }
            else {
                this.fillType = this.mainFillType;
            }
            this.room[row][col] = this.fillType;
            
            isFisrt = false;
        },
        onMouseEnterCell(event) {
            if (this.existsResult) {
                return;
            }

            const {row, col} = this.elementToRowCol(event.target);

            if (isFisrt) {
                if (this.room[row][col] === this.mainFillType) {
                    this.fillType = NONE;
                }
                else {
                    this.fillType = this.mainFillType;
                }
                isFisrt = false;
            }

            if (isMouseDown) {
                this.room[row][col] = this.fillType;
            }
        },

        onTouchMoveCell(event) {
            event.preventDefault();

            if (this.existsResult) {
                return;
            }

            const touch = event.touches[0];
            const target = document.elementFromPoint(touch.clientX, touch.clientY);

            if (target.tagName !== 'TD') {
                return;
            }

            const {row, col} = this.elementToRowCol(target);

            if (isFisrt) {
                if (this.room[row][col] === this.mainFillType) {
                    this.fillType = NONE;
                }
                else {
                    this.fillType = this.mainFillType;
                }
                isFisrt = false;
            }
            this.room[row][col] = this.fillType;
        },

        onClickSearch() {
            this.isClickSearch = true;
            this.pathList = byynCheck(this.room, this.useUdewa, this.isTubo);

            if (this.pathList.length === 0) {
                return;
            }

            this.start = this.pathList[this.pathIndex][0];
            this.paintPath();
        },

        onClickReset() {
            this.isClickSearch = false;
            for (let row = 0; row < this.room.length; row++) {
                for (let col = 0; col < this.room.length; col++) {
                    this.room[row][col] = NONE;
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
                    this.room[prevPos.row][prevPos.col] = PREV_ITEM;
                }

                const pos = path[index].pos;

                if (pos === null) {
                    this.room[prevPos.row][prevPos.col] = PREV_ITEM;
                }
                else {
                    this.room[pos.row][pos.col] = ITEM;
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
            this.$refs.room.style.visibility = 'hidden';
            this.$refs.dummyRoom.style.visibility = 'visible';

            this.dummyRoom = [...this.dummyRoom];

            const newRoom = [];
            const prevRoomSize = this.room.length;
            for (let row = 0; row < this.roomSize; row++) {
                newRoom.push([]);
                for (let col = 0; col < this.roomSize; col++) {
                    if (row < prevRoomSize && col < prevRoomSize) {
                        newRoom[row].push(this.room[row][col]);
                    }
                    else {
                        newRoom[row].push(NONE);
                    }
                }
            }
            this.room = newRoom;
        },
        resetRoom() {
            for (let row = 0; row < this.roomSize; row++) {
                for (let col = 0; col < this.roomSize; col++) {
                    this.room[row][col] = NONE;
                }
            }
        },
        elementToRowCol(element) {
            const row = Number(element.dataset.row);
            const col = Number(element.dataset.col);
            return {row, col};
        },
        cellToSquare() {
            roomTimerId1 = setTimeout(() => {
                clearTimeout(roomTimerId1);
                clearTimeout(roomTimerId2);
                const tdList = document.querySelectorAll('#room td');
                const tdOffsetWidth = tdList[0].offsetWidth;
                for (const td of tdList) {
                    td.style.height = tdOffsetWidth + 'px';
                }

                this.$refs.room.style.visibility = 'visible';
                this.$refs.dummyRoom.style.visibility = 'hidden';

                this.dummyRoom = this.room;

                roomTimerId2 = setTimeout(() => {
                    const dummyTdList = document.querySelectorAll('#dummy-room td');
                    for (const td of dummyTdList) {
                        td.style.height = tdOffsetWidth + 'px';
                    }
                }, 50);
            }, 50);
        },
        paintPath() {
            const path = this.pathList[this.pathIndex];
            for (let i = 0; i < path.length; i++) {
                const pos = path[i].pos;
                if (pos === null) {
                    // 何もしない
                }
                else if (i === path.length - 1) {
                    this.room[pos.row][pos.col] = ITEM;
                }
                else {
                    this.room[pos.row][pos.col] = PREV_ITEM;
                }
            }
        },
        removeItem() {
            for (let row = 0; row < this.room.length; row++) {
                for (let col = 0; col < this.room.length; col++) {
                    const type = this.room[row][col];
                    if (type === ITEM || type === PREV_ITEM) {
                        this.room[row][col] = NONE;
                    }
                }
            }
        },
    }
};

createApp(vm).mount('#app');
