import { createApp } from 'vue'
import { findItemList } from './item/item'
import { kusaList } from './item/kusa';
import { tueList, tueNameList, findTueCount } from './item/tue';
import { makimonoList } from './item/makimono';
import { tuboList } from './item/tubo';
import { udewaList } from './item/udewa';
import { bukiList } from './item/buki';
import { tateList } from './item/tate';

const vm = {
    data() {
        return {
            isFirstTime: true,
            isTuePlusFirstTime: true,
            itemTypeList: ['kusa', 'tue', 'makimono', 'tubo', 'udewa', 'buki', 'tate', 'tuePlus'],
            itemTypeName: {
                kusa: '草', tue: '杖', tuePlus: '杖+',
                makimono: '巻物', tubo: '壺',
                udewa: '腕輪', buki: '武器', tate: '盾',
            },
            tueNameList: [],
            searchItemName: 'ただの杖',
            nedanTypeList: ['kaine', 'urine'],
            nedanTypeName: {'kaine': '買値', 'urine': '売値'},
            itemType: 'kusa',
            nedanType: 'kaine',
            nedan: 0,
            currentNedan: 0,
            currentTuePlusNedan: 0,
            resultItemList: [],
            resultTueCountList: [],
        }
    },
    created() {
        this.tueNameList = tueNameList;
    },
    watch: {
        itemType(newVal, oldVal) {
            if (oldVal === 'tuePlus') {
                this.currentTuePlusNedan = this.nedan;
                this.nedan = this.currentNedan;
            }
            else if (newVal === 'tuePlus') {
                this.currentNedan = this.nedan;
                this.nedan = this.currentTuePlusNedan;
            }
        }
    },
    methods: {
        onChangeSearchItemName() {
            this.findItemList();
        },
        onClickItemType(type) {
            this.itemType = type;
            if (this.itemType === 'tuePlus') {
                this.searchItemName = 'ただの杖';
                this.nedanType = 'urine';
            }
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
            if (this.nedan !== 0) {
                if (this.itemType === 'tuePlus') {
                    if (this.isTuePlusFirstTime) {
                        this.isTuePlusFirstTime = false;
                    }
                }
                else {
                    if (this.isFirstTime) {
                        this.isFirstTime = false;
                    }
                }
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
            if (this.itemType === 'tuePlus') {
                this.isTuePlusFirstTime = true;
            }
            else {
                this.isFirstTime = true;
            }
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
            else if (this.itemType === 'tuePlus') {
                this.resultTueCountList = findTueCount(this.searchItemName, this.nedan, this.nedanType)
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
