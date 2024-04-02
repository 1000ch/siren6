import { createApp } from 'vue';

let isMouseDown = false;

window.addEventListener('mousedown', () => {
    isMouseDown = true;
});
window.addEventListener('mouseup', () => {
    isMouseDown = false;
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
            event.target.classList.toggle('byyn');
            this.updateRoom(event.target);
        },
        onMouseEnterCell(event) {
            if (isMouseDown) {
                event.target.classList.toggle('byyn');
                this.updateRoom(event.target);
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
        }
    }
};

createApp(vm).mount('#app');
