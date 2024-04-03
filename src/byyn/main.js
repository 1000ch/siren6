import { createApp } from 'vue';

const NONE = 'none';
const BYYN = 'byyn';

// const isMobile = (() => {
//     const mobileRegex = /iphone;|(android|nokia|blackberry|bb10;).+mobile|android.+fennec|opera.+mobi|windows phone|symbianos/i;
//     const isMobileByUa = mobileRegex.test(navigator.userAgent);;
//     const isMobileByClientHint = navigator.userAgentData && navigator.userAgentData.mobile;
//     return isMobileByUa || isMobileByClientHint;
// })();
const isMobile = true; // todo

let isFisrt = true;
let isMouseDown = false;
let mode = NONE; // 何で塗りつぶすかの判定に使う

let timerId = 0;

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

// window.addEventListener('touchmove', event => {
//     event.preventDefault();
// });

const vm = {
    data() {
        return {
            roomSize: 10,
            roomSizeMin: 10,
            roomSizeMax: 18,
            useUdewa: false,
            room: [],
        }
    },
    created() {
        window.addEventListener('resize', () => {
            if (isMobile) {
                const elApp = document.querySelector('#app');
                elApp.style.width = window.clientWidth + 'px';
            }
            this.cellToSquare();
        });
    },
    mounted() {
        if (isMobile) {
            const elApp = document.querySelector('#app');
            elApp.style.position = 'fixed';
            elApp.style.width = window.clientWidth + 'px';
        }

        this.createRoom();
        this.cellToSquare();
    },
    methods: {
        onFocusInputSize(event) {
            event.target.select();
        },
        onBlurInputSize(event) {
            this.roomSize = Number(event.target.value);
            if (this.roomSize < this.roomSizeMin) {
                this.roomSize = this.roomSizeMin;
            }
            else if (this.roomSize > this.roomSizeMax) {
                this.roomSize = this.roomSizeMax;
            }
            event.target.value = this.roomSize;

            this.createRoom();
            this.cellToSquare();
        },
        onKeyDownEnterInputSize(event) {
            event.target.blur();
        },

        onMouseDownCell(event) {
            const {row, col} = this.elementToRowCol(event.target);
            
            if (this.room[row][col] === BYYN) {
                mode = NONE;
            }
            else {
                mode = BYYN;
            }
            this.room[row][col] = mode;
            
            isFisrt = false;
        },
        onMouseEnterCell(event) {
            const {row, col} = this.elementToRowCol(event.target);

            if (isFisrt) {
                if (this.room[row][col] === BYYN) {
                    mode = NONE;
                }
                else {
                    mode = BYYN;
                }
                isFisrt = false;
            }

            if (isMouseDown) {
                this.room[row][col] = mode;
            }
        },

        onTouchMoveCell(event) {
            const touch = event.touches[0];
            const target = document.elementFromPoint(touch.clientX, touch.clientY);

            if (target.tagName !== 'TD') {
                return;
            }

            const {row, col} = this.elementToRowCol(target);

            if (isFisrt) {
                if (this.room[row][col] === BYYN) {
                    mode = NONE;
                }
                else {
                    mode = BYYN;
                }
                isFisrt = false;
            }
            this.room[row][col] = mode;
        },

        createRoom() {
            this.$refs.table.style.visibility = 'hidden';

            const newRoom = [];
            for (let row = 0; row < this.roomSize; row++) {
                newRoom.push([]);
                for (let col = 0; col < this.roomSize; col++) {
                    // JSの配列は範囲外を参照されるとundefinedを返すためエラーは発生しない
                    if (this.room[row] && this.room[row][col] === BYYN) {
                        newRoom[row].push(BYYN);
                    }
                    else {
                        newRoom[row].push(NONE);
                    }
                }
            }
            this.room = newRoom;
        },
        elementToRowCol(element) {
            const row = Number(element.dataset.row);
            const col = Number(element.dataset.col);
            return {row, col};
        },
        cellToSquare() {
            timerId = setTimeout(() => {
                clearTimeout(timerId);
                const tdList = document.querySelectorAll('td');
                for (const td of tdList) {
                    td.style.height = td.offsetWidth + 'px';
                }
                this.$refs.table.style.visibility = 'visible';
            }, 50);
        }
    }
};

createApp(vm).mount('#app');
