import { createApp } from 'vue';

let isFisrt = true;
let isMouseDown = false;
let mode = 'none'; // 何で塗りつぶすかの判定に使う

let timerId = 0;

window.addEventListener('mousedown', () => {
    isMouseDown = true;
});
window.addEventListener('touchstart', () => {
    isMouseDown = true;
});
window.addEventListener('mouseup', () => {
    isMouseDown = false;
    isFisrt = true;
});
window.addEventListener('touchend', () => {
    isMouseDown = false;
    isFisrt = true;
});

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
            this.cellToSquare();
        });
    },
    mounted() {
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
            const t = event.target;
            if (t.classList.contains('byyn')) {
                mode = 'none';
                t.classList.remove('byyn');
            }
            else {
                mode = 'byyn';
                t.classList.add('byyn');
            }
            this.updateRoom(t);

            isFisrt = false;
        },
        onMouseEnterCell(event) {
            const t = event.target;

            if (isFisrt) {
                if (t.classList.contains('byyn')) {
                    mode = 'none';
                }
                else {
                    mode = 'byyn';
                }
            }

            if (isMouseDown) {
                if (mode === 'none') {
                    t.classList.remove('byyn');
                }
                else if (mode === 'byyn') {
                    t.classList.add('byyn');
                }
                this.updateRoom(t);
            }
        },

        // onTouchStartCell(event) {
        //     const t = event.target;
        //     if (t.classList.contains('byyn')) {
        //         mode = 'none';
        //         t.classList.remove('byyn');
        //     }
        //     else {
        //         mode = 'byyn';
        //         t.classList.add('byyn');
        //     }
        //     this.updateRoom(t);

        //     isFisrt = false;
        // },
        onTouchMoveCell(event) {
            // const t = event.target;

            // window.hoge = event;

            const touch = event.touches[0];
            const t = document.elementFromPoint(touch.clientX, touch.clientY);

            // if (isFisrt) {
            //     if (t.classList.contains('byyn')) {
            //         mode = 'none';
            //     }
            //     else {
            //         mode = 'byyn';
            //     }
            // }

            if (isMouseDown) {
                if (mode === 'none') {
                    t.classList.remove('byyn');
                }
                else if (mode === 'byyn') {
                    t.classList.add('byyn');
                }
                this.updateRoom(t);
            }
        },

        createRoom() {
            this.$refs.table.style.visibility = 'hidden';

            this.room = [];
            const row = [];
            for (let i = 0; i < this.roomSize; i++) {
                row.push('none');
            }
            for (let i = 0; i < this.roomSize; i++) {
                this.room.push(row);
            }
        },
        updateRoom(element) {
            const row = Number(element.dataset.row);
            const col = Number(element.dataset.col);
            if (this.room[row][col] === 'none') {
                this.room[row][col] = 'byyn';
            }
            else {
                this.room[row][col] = 'none';
            }
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
