import { createApp } from 'vue'

const vm = {
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
};

createApp(vm).mount('#app');
