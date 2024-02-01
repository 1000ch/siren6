import { createApp } from 'vue'
import { kusaList } from './kusa';

const vm = {
    data() {
        return {
            itemTypeKey: ['kusa', 'tue', 'makimono', 'tubo', 'okou', 'udewa', 'buki', 'tate'],
            itemTypeName: {
                kusa: '草', tue: '杖',
                makimono: '巻物', tubo: '壺',
                okou: 'お香', udewa: '腕輪',
                buki: '武器', tate: '盾',
            },
            nedanTypeKey: ['kaine', 'urine'],
            nedanTypeName: {'kaine': '買値', 'urine': '売値'},
            itemKey: 'kusa',
            nedanKey: 'kaine',
        }
    },
    created() {
        console.log(kusaList);
    },
    methods: {
        onClickItemType(key) {
            this.itemKey = key;
        },
        onClickNedanType(key) {
            this.nedanKey = key;
        }
    }
};

createApp(vm).mount('#app');
