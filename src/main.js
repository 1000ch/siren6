import { createApp } from 'vue';
import { KusaRepository } from './item/kusa_repository';
import { TueRepository } from './item/tue_repository';
import { MakimonoRepository } from './item/makimono_repository';
import { TuboRepository } from './item/tubo_repository';
import { UdewaRepository } from './item/udewa_repository';
import { BukiRepository } from './item/buki_repository';
import { TateRepository } from './item/tate_repository';

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
        this.tueNameList = TueRepository.tueNameList;
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
                this.resultItemList = BukiRepository.findAllItemList();
                return;
            }
            if (this.searchItemType === 'tate') {
                this.resultItemList = TateRepository.findAllItemList();
                return;
            }
            if (this.searchItemType === 'tuePlus') {
                this.resultTueCountList = TueRepository.findCountList(this.searchItemName, this.searchNedan, this.searchNedanType)
                return;
            }

            let repo = null;
            switch (this.searchItemType) {
                case 'kusa': repo = KusaRepository; break;
                case 'tue': repo = TueRepository; break;
                case 'makimono': repo = MakimonoRepository; break;
                case 'tubo': repo = TuboRepository; break;
                case 'udewa': repo = UdewaRepository; break;
                case 'buki': repo = BukiRepository; break;
                case 'tate': repo = TateRepository; break;
            }

            if (this.searchNedanType === 'all') {
                this.resultItemList = repo.findAllItemList();

                let prevKaine = this.resultItemList[0].kaine;
                let shouldChangeBackground = false;
                for (const item of this.resultItemList) {
                    if (item.kaine !== prevKaine) {
                        shouldChangeBackground = !shouldChangeBackground;
                        item.needBorderline = true;
                    }
                    item.shouldChangeBackground = shouldChangeBackground;
                    prevKaine = item.kaine;
                }
            }
            else {
                this.resultItemList = repo.findItemList(this.searchNedan, this.searchNedanType);
            }
        },
    }
};

createApp(vm).mount('#app');
