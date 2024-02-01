import { createApp } from 'vue'

const vm = {
    data() {
        return {
            itemTypeKey: ['kusa', 'tue', 'makimono', 'tubo', 'okou', 'udewa', 'buki', 'tate'],
            itemTypeName: {
                kusa: '草', tue: '杖',
                makimono: '巻物', tubo: '壺',
                okou: 'お香', udewa: '腕輪',
                buki: '武器', tate: '盾',
            }
        }
    },
    created() {
        // 仮
    },
    methods: {
        onClickItemType(key) {
            console.log(key);
        },
        onClickNedanType() {

        }
    }
};

createApp(vm).mount('#app');
