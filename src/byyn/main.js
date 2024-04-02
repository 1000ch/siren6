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
        }
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
        },
        onKeyDownEnterInputSize(event) {
            event.target.blur();
        },
        onMouseDownCell(event) {
            console.log('down');
            event.target.classList.toggle('byyn');
        },
        onMouseEnterCell(event) {
            if (isMouseDown) {
                console.log('enter');
                event.target.classList.toggle('byyn');
            }
        },
    }
};

createApp(vm).mount('#app');
