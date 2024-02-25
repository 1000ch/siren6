import { createApp } from 'vue';
import { BukiSearch } from './components/buki_search';
import { TateSearch } from './components/tate_search';
import { TuePlusSearch } from './components/tue_plus_search';
import { kusaRepository } from './item/kusa_repository';
import { tueRepository } from './item/tue_repository';
import { makimonoRepository } from './item/makimono_repository';
import { tuboRepository } from './item/tubo_repository';
import { udewaRepository } from './item/udewa_repository';

const vm = {
    components: {
        BukiSearch,
        TateSearch,
        TuePlusSearch
    },
    data() {
        return {
            isFirstTime: true,
            isBukiFirstTime: true,
            isTateFirstTime: true,
            isTuePlusFirstTime: true,
            shouldKubetuKaineAndUrine: true,
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
            searchBukiNedanType: 'all',
            searchTateNedanType: 'all',
            searchNedan: 0,
            searchItemStatusList: ['normal'],
            resultItemList: [],
            resultBukiList: [],
            resultTateList: [],
            resultTueCountList: [],
            shouldDisplaySearchHint: false,
            shouldDisplaySearchBukiHint: false,
            shouldDisplaySearchTateHint: false,
        }
    },
    created() {
        this.findItemList();
    },
    methods: {
        onClickItemType(type) {
            this.searchItemType = type;
            if (!['buki', 'tate', 'tuePlus'].includes(this.searchItemType)) {
                this.findItemList();
            }
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
            this.searchNedan = Number(event.target.value);
            event.target.value = this.searchNedan;
            this.findItemList();
            if (this.searchNedan !== 0) {
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
            this.searchNedan = 0;
            this.findItemList();
            this.isFirstTime = true;
        },
        onChangeShouldKubetuKaineAndUrineCheckBox() {
            if (this.searchNedanType !== 'all') {
                this.findItemList();
            }
        },
        // 武器の検索結果
        onFoundBukiList(result) {
            this.isBukiFirstTime = result.isFirstTime;
            this.resultBukiList = result.itemList;
            this.shouldDisplaySearchBukiHint = result.shouldDisplaySearchHint;
            this.searchBukiNedanType = result.searchNedanType;
        },
        onFoundAllBukiList(allItemList) {
            this.resultBukiList = allItemList;
            this.searchBukiNedanType = 'all';
            this.decorateResultItemList(this.resultBukiList);
        },
        // 盾の検索結果
        onFoundTateList(result) {
            this.isTateFirstTime = result.isFirstTime;
            this.resultTateList = result.itemList;
            this.shouldDisplaySearchTateHint = result.shouldDisplaySearchHint;
            this.searchTateNedanType = result.searchNedanType;
        },
        onFoundAllTateList(allItemList) {
            this.resultTateList = allItemList;
            this.searchTateNedanType = 'all';
            this.decorateResultItemList(this.resultTateList);
        },
        // 杖+の検索結果
        onFoundTueCountList(result) {
            this.isTuePlusFirstTime = result.isFirstTime;
            this.resultTueCountList = result.tueCountList;
        },
        isZeroTimes(item) {
            return item.name.endsWith('[0]');
        },
        isSearchedNedanType(nedanType) {
            if (this.shouldDisplaySearchHint) {
                return this.searchNedanType !== nedanType;
            }
            return this.searchNedanType === nedanType;
        },
        findItemList() {
            this.shouldDisplaySearchHint = false;
            
            if (
                this.searchItemType === 'buki' ||
                this.searchItemType === 'tate' ||
                this.searchItemType === 'tuePlus'
            ) {
                throw new Error('ここが実行されることはない');
            }

            let repo = null;
            switch (this.searchItemType) {
                case 'kusa': repo = kusaRepository; break;
                case 'tue': repo = tueRepository; break;
                case 'makimono': repo = makimonoRepository; break;
                case 'tubo': repo = tuboRepository; break;
                case 'udewa': repo = udewaRepository; break;
                default: throw new Error('ここが実行されることはない');
            }

            if (this.searchNedanType === 'all') {
                this.findAllItemList(repo);
            }
            else {
                this.resultItemList = repo.findItemList(this.searchNedan, this.searchNedanType);

                if (this.shouldKubetuKaineAndUrine) {
                    if (this.resultItemList.length === 0) {
                        this.resultItemList = repo.findItemList(this.searchNedan, this.searchNedanType === 'kaine' ? 'urine' : 'kaine');
                        if (this.resultItemList.length > 0) {
                            this.shouldDisplaySearchHint = true;
                        }
                    }
                }
                else {
                    this.resultItemList = this.resultItemList.concat(repo.findItemList(this.searchNedan, this.searchNedanType === 'kaine' ? 'urine' : 'kaine'));
                }
            }
        },
        findAllItemList(repo) {
            this.resultItemList = repo.findAllItemList(this.searchItemStatusList);
            this.decorateResultItemList(this.resultItemList);
        },
        decorateResultItemList(resultItemList) {
            let prevKaine = resultItemList[0].kaine;
            for (const item of resultItemList) {
                item.needBorderline = item.kaine !== prevKaine;
                prevKaine = item.kaine;
            }
        },
    }
};

createApp(vm).mount('#app');
