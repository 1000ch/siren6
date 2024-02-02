import { createApp } from 'vue'
import { findKusaList } from './kusa';
import { findTueList } from './tue';

const vm = {
    data() {
        return {
            itemTypeList: ['kusa', 'tue', 'makimono', 'tubo', 'okou', 'udewa', 'buki', 'tate'],
            itemTypeName: {
                kusa: '草', tue: '杖',
                makimono: '巻物', tubo: '壺',
                okou: 'お香', udewa: '腕輪',
                buki: '武器', tate: '盾',
            },
            nedanTypeList: ['kaine', 'urine'],
            nedanTypeName: {'kaine': '買値', 'urine': '売値'},
            itemType: 'kusa',
            nedanType: 'kaine',
            nedan: 0,
            itemList: [],
        }
    },
    created() {
        this.itemList = this.findItemList();
    },
    methods: {
        onClickItemType(type) {
            this.itemType = type;
            this.itemList = this.findItemList();
        },
        onClickNedanType(type) {
            this.nedanType = type;
            this.itemList = this.findItemList();
        },
        onBlurInputNedan() {
            this.nedan = Number(this.nedan);
            this.itemList = this.findItemList();
        },
        findItemList() {
            switch (this.itemType) {
                case 'kusa': return findKusaList(this.nedan, this.nedanType);
                case 'tue': return findTueList(this.nedan, this.nedanType);
                case 'makimono': return [];
                case 'tubo': return [];
                case 'okou': return [];
                case 'udewa': return [];
                case 'buki': return [];
                case 'tate': return [];
                default: throw new Error(`不正なitemType: ${this.itemType}`);
            }
        },
    }
};

createApp(vm).mount('#app');
