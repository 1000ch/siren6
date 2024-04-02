import { createApp } from 'vue';

let isFisrt = true;
let isMouseDown = false;
let mode = 'none'; // 何で塗りつぶすかの判定に使う

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
        this.createRoom();
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
        createRoom() {
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
        cellToSeihokei() {
            
        }
    }
};

createApp(vm).mount('#app');
