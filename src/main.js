import { createApp } from 'vue';
import { TuePlusSearch } from './components/tue_plus_search';
import { kusaRepository } from './item/kusa_repository';
import { tueRepository } from './item/tue_repository';
import { makimonoRepository } from './item/makimono_repository';
import { tuboRepository } from './item/tubo_repository';
import { udewaRepository } from './item/udewa_repository';
import { bukiRepository } from './item/buki_repository';
import { tateRepository } from './item/tate_repository';

const vm = {
    components: {
        TuePlusSearch
    },
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
            itemStatusList: ['normal', 'noroi', 'syukufuku'],
            itemStatusName: {normal: '通常', noroi: '呪い', syukufuku: '祝福'},
            searchItemType: 'kusa',
            searchNedanType: 'kaine',
            searchNedan: 0,
            searchItemStatusList: ['normal'],
            prevItemType: 'kusa',
            currentNedanType: 'kaine',
            currentTuePlusNedanType: 'urine',
            currentNedan: 0,
            currentTuePlusNedan: 0,
            resultItemList: [],
            resultTueCountList: [],
            shouldDisplaySearchHint: false,
        }
    },
    created() {
        this.findItemList();
    },
    methods: {
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
        onClickItemStatus(status) {
            if (this.searchItemStatusList.includes(status)) {
                if (this.searchItemStatusList.length > 1) {
                    this.searchItemStatusList = this.searchItemStatusList.filter(s => s !== status);
                }
            }
            else {
                this.searchItemStatusList.push(status);
            }
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
        onResultTuePlusSearch(result) {
            this.isTuePlusFirstTime = result.isFirstTime;
            this.resultTueCountList = result.tueCountList;
        },
        isZeroTimes(item) {
            return item.name.endsWith('[0]');
        },
        findItemList() {
            this.shouldDisplaySearchHint = false;
            
            if (this.searchItemType === 'buki') {
                this.resultItemList = bukiRepository.findAllItemList();
                return;
            }
            if (this.searchItemType === 'tate') {
                this.resultItemList = tateRepository.findAllItemList();
                return;
            }
            if (this.searchItemType === 'tuePlus') {
                this.resultTueCountList = tueRepository.findCountList(this.searchItemName, this.searchNedan, this.searchNedanType)
                return;
            }

            let repo = null;
            switch (this.searchItemType) {
                case 'kusa': repo = kusaRepository; break;
                case 'tue': repo = tueRepository; break;
                case 'makimono': repo = makimonoRepository; break;
                case 'tubo': repo = tuboRepository; break;
                case 'udewa': repo = udewaRepository; break;
                case 'buki': repo = bukiRepository; break;
                case 'tate': repo = tateRepository; break;
            }

            if (this.searchNedanType === 'all') {
                this.findAllItemList(repo);
            }
            else {
                this.resultItemList = repo.findItemList(this.searchNedan, this.searchNedanType);
                if (this.resultItemList.length === 0) {
                    this.resultItemList = repo.findItemList(this.searchNedan, this.searchNedanType === 'kaine' ? 'urine' : 'kaine');
                    if (this.resultItemList.length > 0) {
                        this.shouldDisplaySearchHint = true;
                    }
                }
            }
        },
        findAllItemList(repo) {
            this.resultItemList = repo.findAllItemList(this.searchItemStatusList);
            let prevKaine = this.resultItemList[0].kaine;
            for (const item of this.resultItemList) {
                item.needBorderline = item.kaine !== prevKaine;
                prevKaine = item.kaine;
            }
        }
    }
};

createApp(vm).mount('#app');
