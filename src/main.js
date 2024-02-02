import { createApp } from 'vue'
import { findItemList } from './findItemList'
import { kusaList } from './kusa';
import * as tue from './tue';

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
            let targetList = [];
            switch (this.itemType) {
                case 'kusa': targetList = kusaList; break;
                case 'tue': return tue.findItemList(this.nedan, this.nedanType);
                case 'makimono': targetList = [/*TODO*/]; break;
                case 'tubo': targetList = [/*TODO*/]; break;
                case 'okou': targetList = [/*TODO*/]; break;
                case 'udewa': targetList = [/*TODO*/]; break;
                case 'buki': targetList = [/*TODO*/]; break;
                case 'tate': targetList = [/*TODO*/]; break;
                default: throw new Error(`不正なitemType: ${this.itemType}`);
            }
            return findItemList(targetList, this.nedan, this.nedanType);
        },
    }
};

createApp(vm).mount('#app');
