import { createApp } from 'vue'
import { findItemList } from './item/item'
import { kusaList } from './item/kusa';
import { tueList, tueNameList } from './item/tue';
import { makimonoList } from './item/makimono';
import { tuboList } from './item/tubo';
import { udewaList } from './item/udewa';
import { bukiList } from './item/buki';
import { tateList } from './item/tate';

const vm = {
    data() {
        return {
            isFirstTime: true,
            itemTypeList: ['kusa', 'tue', 'tuePlus', 'makimono', 'tubo', 'udewa', 'buki', 'tate'],
            itemTypeName: {
                kusa: '草', tue: '杖', tuePlus: '杖+',
                makimono: '巻物', tubo: '壺',
                udewa: '腕輪', buki: '武器', tate: '盾',
            },
            tueNameList: [],
            nedanTypeList: ['kaine', 'urine'],
            nedanTypeName: {'kaine': '買値', 'urine': '売値'},
            itemType: 'kusa',
            nedanType: 'kaine',
            nedan: 0,
            resultItemList: [],
        }
    },
    created() {
        this.tueNameList = tueNameList;
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
        onFocusInputNedan(event) {
            event.target.select();
        },
        onBlurInputNedan(event) {
            this.nedan = Number(this.nedan);
            event.target.value = this.nedan;
            this.findItemList();
            if (this.isFirstTime && this.nedan !== 0) {
                this.isFirstTime = false;
            }
        },
        onKeyDownEnterInputNedan(event) {
            event.target.blur();
        },
        onClickClearBtn() {
            const clearBtnClassList = this.$refs.clearBtn.classList;
            if (!clearBtnClassList.contains('jump')) {
                clearBtnClassList.add('jump');
                setTimeout(() => {
                    clearBtnClassList.remove('jump');
                }, 2000);
            }
            this.nedan = 0;
            this.findItemList();
            this.isFirstTime = true;
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
                case 'udewa': targetList = udewaList; break;
            }
            this.resultItemList = findItemList(targetList, this.nedan, this.nedanType);
        },
    }
};

createApp(vm).mount('#app');
