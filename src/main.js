import { createApp } from 'vue';
import emitter from 'tiny-emitter/instance';
import { BukiSearch } from './components/buki_search';
import { TateSearch } from './components/tate_search';
import { TuePlusSearch } from './components/tue_plus_search';
import { kusaRepository } from './item/kusa_repository';
import { tueRepository } from './item/tue_repository';
import { makimonoRepository } from './item/makimono_repository';
import { tuboRepository } from './item/tubo_repository';
import { udewaRepository } from './item/udewa_repository';
import Cookies from 'js-cookie';

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
            useBothKaineAndUrine: false,
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
            resultMultiBukiList: [],
            resultTateList: [],
            resultMultiTateList: [],
            resultTueCountList: [],
            resultMultiTueCountList: [],
            shouldDisplaySearchHint: false,
            shouldDisplaySearchBukiHint: false,
            shouldDisplaySearchTateHint: false,
            shouldDisplayBukiWarning: false,
            shouldDisplayTateWarning: false,
        }
    },
    created() {
        const strUseBothKaineAndUrine = Cookies.get('useBothKaineAndUrine');
        if (strUseBothKaineAndUrine !== undefined) {
            this.useBothKaineAndUrine = strUseBothKaineAndUrine === 'true';
        }

        this.findItemList();
    },
    methods: {
        onClickItemType(type) {
            this.searchItemType = type;
            if (this.searchItemType === 'buki') {
                emitter.emit('findBukiList');
            }
            else if (this.searchItemType === 'tate') {
                emitter.emit('findTateList');
            }
            else if (this.searchItemType === 'tuePlus') {
                emitter.emit('findTuePlusList');
            }
            else {
                this.findItemList();
            }
        },
        onClickNedanType(type) {
            this.searchNedanType = type;
            this.findItemList();
        },
        onClickHeaderNedanType(type) {
            if (this.useBothKaineAndUrine && this.searchNedanType !== 'all') {
                this.searchNedanType = type;
                this.findItemList();
            }
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
            if (this.searchNedan !== 0) {
                this.isFirstTime = false;
            }
            this.findItemList();
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
            this.isFirstTime = true;
            this.findItemList();
        },
        onChangeUseBothKaineAndUrineCheckBox() {
            Cookies.set('useBothKaineAndUrine', String(this.useBothKaineAndUrine), {expires: 365});
            if (this.searchItemType === 'buki') {
                emitter.emit('findBukiList');
            }
            else if (this.searchItemType === 'tate') {
                emitter.emit('findTateList');
            }
            else if (this.searchItemType === 'tuePlus') {
                emitter.emit('findTuePlusList');
            }
            else if (this.searchNedanType !== 'all') {
                this.findItemList();
            }
        },
        // 武器の検索結果
        onFoundBukiList(result) {
            this.shouldDisplayBukiWarning = false;
            this.isBukiFirstTime = result.isFirstTime;
            if (this.isBukiFirstTime) {
                this.resultBukiList = [];
                this.resultMultiBukiList = [];
            }
            else {
                let targetItemList = [];
                if (this.useBothKaineAndUrine) {
                    this.resultBukiList = [];
                    this.resultMultiBukiList = result.itemList;
                    targetItemList = this.resultMultiBukiList[0].itemList;
                    if (targetItemList.length === 0) {
                        targetItemList = this.resultMultiBukiList[1].itemList;
                    }
                }
                else {
                    this.resultBukiList = result.itemList;
                    this.resultMultiBukiList = [];
                    targetItemList = this.resultBukiList;
                }
                this.shouldDisplayBukiWarning = targetItemList.every(item => !this.isVaildDefaultYukaOtiBukiTate(item));
            }
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
            this.shouldDisplayTateWarning = false;
            this.isTateFirstTime = result.isFirstTime;
            if (this.isTateFirstTime) {
                this.resultTateList = [];
                this.resultMultiTateList = [];
            }
            else {
                let targetItemList = [];
                if (this.useBothKaineAndUrine) {
                    this.resultTateList = [];
                    this.resultMultiTateList = result.itemList;
                    targetItemList = this.resultMultiTateList[0].itemList;
                    if (targetItemList.length === 0) {
                        targetItemList = this.resultMultiTateList[1].itemList;
                    }
                }
                else {
                    this.resultTateList = result.itemList;
                    this.resultMultiTateList = [];
                    targetItemList = this.resultTateList;
                }
                this.shouldDisplayTateWarning = targetItemList.every(item => !this.isVaildDefaultYukaOtiBukiTate(item));
            }
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
            if (this.isTuePlusFirstTime) {
                this.resultTueCountList = [];
                this.resultMultiTueCountList = [];
            }
            else if (this.useBothKaineAndUrine) {
                this.resultTueCountList = [];
                this.resultMultiTueCountList = result.tueCountList;
            }
            else {
                this.resultTueCountList = result.tueCountList;
                this.resultMultiTueCountList = [];
            }
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
        isVaildDefaultYukaOtiBukiTate(item) {
            if (item.isNoroi) {
                return item.syuseiti === -1;
            }
            else {
                return item.syuseiti >= 0 && item.syuseiti <= 3;
            }
        },
        findItemList() {
            if (
                this.searchItemType === 'buki' ||
                this.searchItemType === 'tate' ||
                this.searchItemType === 'tuePlus'
            ) {
                throw new Error('ここが実行されることはない');
            }

            this.shouldDisplaySearchHint = false;
            if (this.isFirstTime && this.searchNedanType !== 'all') {
                this.resultItemList = [];
                return;
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

                if (this.useBothKaineAndUrine) {
                    this.resultItemList = this.resultItemList.concat(repo.findItemList(this.searchNedan, this.searchNedanType === 'kaine' ? 'urine' : 'kaine'));
                }
                else {
                    if (this.resultItemList.length === 0) {
                        this.resultItemList = repo.findItemList(this.searchNedan, this.searchNedanType === 'kaine' ? 'urine' : 'kaine');
                        if (this.resultItemList.length > 0) {
                            this.shouldDisplaySearchHint = true;
                        }
                    }
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
