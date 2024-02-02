import { createApp } from 'vue'
import { findItemList } from './item'
import { kusaList } from './kusa';
import { tueList } from './tue';
import { makimonoList } from './makimono';
import { tuboList } from './tubo';
import { okouList } from './okou';
import { udewaList } from './udewa';
import { bukiList } from './buki';
import { tateList } from './tate';

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
            resultItemList: [],
        }
    },
    created() {
        this.findItemList();
    },
    methods: {
        onClickItemType(type) {
            this.itemType = type;
            this.findItemList();
        },
        onClickNedanType(type) {
            this.nedanType = type;
            this.findItemList();
        },
        onBlurInputNedan() {
            this.nedan = Number(this.nedan);
            this.findItemList();
        },
        onClickClearBtn() {
            this.nedan = 0;
            this.findItemList();
        },
        findItemList() {
            if (this.itemType === 'buki') {
                this.resultItemList = bukiList;
                return;
            }
            else if (this.itemType === 'tate') {
                this.resultItemList = tateList;
                return;
            }

            let targetList = [];
            switch (this.itemType) {
                case 'kusa': targetList = kusaList; break;
                case 'tue': targetList = tueList; break;
                case 'makimono': targetList = makimonoList; break;
                case 'tubo': targetList = tuboList; break;
                case 'okou': targetList = okouList; break;
                case 'udewa': targetList = udewaList; break;
            }
            this.resultItemList = findItemList(targetList, this.nedan, this.nedanType);
        },
    }
};

createApp(vm).mount('#app');
