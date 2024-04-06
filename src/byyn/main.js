import { createApp } from 'vue';
import { PlusMinusInputNumbur } from '../components/plus_minus_input_numbur'
import { NONE, BYYN, TUTI } from '../logic/byyn/cell';
import { byynCheck } from '../logic/byyn/byyn_check';

let isFisrt = true;
let isMouseDown = false;

let timerId1 = 0;
let timerId2 = 0;

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
            roomSize: 10,
            roomSizeMin: 10,
            roomSizeMax: 18,
            fillType: NONE,
            mainFillType: BYYN,
            useUdewa: false,
            isTubo: false,
            room: [],
            dummyRoom: [],
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
            const pathList = byynCheck(this.room, this.useUdewa, this.isTubo);
            console.log(pathList);

            // todo
        },

        onClickReset() {
            for (let row = 0; row < this.room.length; row++) {
                for (let col = 0; col < this.room.length; col++) {
                    this.room[row][col] = NONE;
                }
            }
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
            timerId1 = setTimeout(() => {
                clearTimeout(timerId1);
                clearTimeout(timerId2);
                const tdList = document.querySelectorAll('#room td');
                const tdOffsetWidth = tdList[0].offsetWidth;
                for (const td of tdList) {
                    td.style.height = tdOffsetWidth + 'px';
                }

                this.$refs.room.style.visibility = 'visible';
                this.$refs.dummyRoom.style.visibility = 'hidden';

                this.dummyRoom = this.room;

                timerId2 = setTimeout(() => {
                    const dummyTdList = document.querySelectorAll('#dummy-room td');
                    for (const td of dummyTdList) {
                        td.style.height = tdOffsetWidth + 'px';
                    }
                }, 50);
            }, 50);
        }
    }
};

createApp(vm).mount('#app');
