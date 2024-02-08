import { createApp } from 'vue';
import { findAllItemList, findItemList } from './item/item';
import { kusaList } from './item/kusa';
import { tueList, tueNameList, findAllTueList, findTueCountList } from './item/tue';
import { makimonoList } from './item/makimono';
import { tuboList, findAllTuboList } from './item/tubo';
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
            nedanTypeList: ['kaine', 'urine', 'all'],
            nedanTypeName: {kaine: '買値', urine: '売値', all: '一覧'},
            searchItemType: 'kusa',
            searchNedanType: 'kaine',
            searchNedan: 0,
            prevItemType: 'kusa',
            currentNedanType: 'kaine',
            currentTuePlusNedanType: 'urine',
            currentNedan: 0,
            currentTuePlusNedan: 0,
            resultItemList: [],
            resultTueCountList: [],
        }
    },
    created() {
        this.tueNameList = tueNameList;
    },
    methods: {
        onChangeSearchItemName() {
            this.findItemList();
        },
        onClickItemType(type) {
            this.searchItemType = type;

            if (this.prevItemType === 'tuePlus') {
                this.currentTuePlusNedanType = this.searchNedanType;
                this.currentTuePlusNedan = this.searchNedan;
                this.searchNedanType = this.currentNedanType;
                this.searchNedan = this.currentNedan;
            }
            else if (this.searchItemType === 'tuePlus') {
                this.currentNedanType = this.searchNedanType;
                this.currentNedan = this.searchNedan;
                this.searchNedanType = this.currentTuePlusNedanType;
                this.searchNedan = this.currentTuePlusNedan;
            }
            this.prevItemType = this.searchItemType;

            this.findItemList();
        },
        onClickNedanType(type) {
            this.searchNedanType = type;
            this.findItemList();
        },
        onFocusInputNedan(event) {
            event.target.select();
        },
        onBlurInputNedan(event) {
            this.searchNedan = Number(this.searchNedan);
            event.target.value = this.searchNedan;
            this.findItemList();
            if (this.searchNedan !== 0) {
                if (this.searchItemType === 'tuePlus') {
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
            this.searchNedan = 0;
            this.findItemList();
            if (this.searchItemType === 'tuePlus') {
                this.isTuePlusFirstTime = true;
            }
            else {
                this.isFirstTime = true;
            }
        },
        isZeroTimes(item) {
            return item.name.endsWith('[0]');
        },
        findItemList() {
            if (this.searchItemType === 'buki') {
                this.resultItemList = bukiList;
                return;
            }
            else if (this.searchItemType === 'tate') {
                this.resultItemList = tateList;
                return;
            }
            else if (this.searchItemType === 'tuePlus') {
                this.resultTueCountList = findTueCountList(this.searchItemName, this.searchNedan, this.searchNedanType)
                return;
            }

            let targetList = [];
            switch (this.searchItemType) {
                case 'kusa': targetList = kusaList; break;
                case 'tue': targetList = tueList; break;
                case 'makimono': targetList = makimonoList; break;
                case 'tubo': targetList = tuboList; break;
                case 'udewa': targetList = udewaList; break;
            }

            if (this.searchNedanType === 'all') {
                if (this.searchItemType === 'tue') {
                    this.resultItemList = findAllTueList();
                }
                else if (this.searchItemType === 'tubo') {
                    this.resultItemList = findAllTuboList();
                }
                else {
                    this.resultItemList = findAllItemList(targetList);
                }

                // for (let i = 0; i < this.resultItemList.length; i++) {
                //     const item = this.resultItemList[i];
                //     if (i % 2 === 1) {
                //         item.shouldChangeBackground = true;
                //     }
                // }
                let prevKaine = this.resultItemList[0].kaine;
                let shouldChangeBackground = false;
                for (const item of this.resultItemList) {
                    if (item.kaine !== prevKaine) {
                        shouldChangeBackground = !shouldChangeBackground;
                    }
                    item.shouldChangeBackground = shouldChangeBackground;
                    prevKaine = item.kaine;
                }
            }
            else {
                this.resultItemList = findItemList(targetList, this.searchNedan, this.searchNedanType);
            }
        },
    }
};

createApp(vm).mount('#app');
