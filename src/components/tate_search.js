import { tateRepository } from '../item/tate_repository';

export const TateSearch = {
    template: `
        <div v-show="searchNedanType !== 'all'"
             id="search-item-name-container">
          <select id="search-item-name"
                  v-model="searchItemName"
                  @change="onChangeSearchItemName">
            <template v-for="name in tateNameList">
              <option :value="name">{{name}}</option>
            </template>
          </select>
          <div id="jingi-btn" class="radio-btn"
               :class="{'selected': isJingi}"
               @click="onClickJingiBtn">神器</div>
        </div>
        
        <div id="input-nedan-container" class="exists-itiran">
          <div id="nedan-type-container">
            <template v-for="nedanType in nedanTypeList">
              <div class="radio-btn nedan-type"
                   :class="{'selected': searchNedanType === nedanType}"
                   @click="onClickNedanType(nedanType)">{{nedanTypeName[nedanType]}}</div>
            </template>
          </div>
          <template v-if="searchNedanType !== 'all'">
            <input type="number" id="input-nedan" v-model="searchNedan"
                 @focus="onFocusInputNedan"
                 @blur="onBlurInputNedan"
                 @keydown.enter="onKeyDownEnterInputNedan">
            <img id="clear-btn" ref="clearBtn" src="./assets/gamara.png"
                 @click="onClickClearBtn">
          </template>
          <div id="item-status-container" v-else>
            <template v-for="status in itemStatusList">
              <div class="radio-btn item-status"
                   :class="{'selected': searchItemStatusList.includes(status)}"
                   @click="onClickItemStatus(status)">{{itemStatusName[status]}}</div>
            </template>
          </div>
        </div>

        <select v-show="searchNedanType !== 'all'"
                id="in-name-select"
                v-model="selectedIn"
                @change="onChangeInNameSelect">
          <option value="null" hidden>印の追加</option>
          <template v-for="inn in inList">
            <option :value="inn">{{inn.fullName}}</option>
          </template>
        </select>

        <div v-show="searchNedanType !== 'all' && searchInList.length > 0"
             id="in-tag-list">
          <div class="in-tag" v-for="inn in searchInList">
            <span class="in-tag-name">{{inn.fullName}}</span>
            <span class="in-tag-close" @click="onClickInTagClose(inn)">❎</span>
          </div>
        </div>
    `,
    emits: ['foundTateList', 'foundAllTateList'],
    data() {
        return {
            isFirstTime: true,
            tateNameList: [],
            inList: [],
            searchInList: [],
            selectedIn: null,
            searchItemName: '木甲の盾',
            isJingi: false,
            nedanTypeList: ['kaine', 'urine', 'all'],
            nedanTypeName: {kaine: '買値', urine: '売値', all: '一覧'},
            itemStatusList: ['normal', 'noroi'],
            itemStatusName: {normal: '通常', noroi: '呪い'},
            searchNedanType: 'all',
            searchNedan: 0,
            searchItemStatusList: ['normal'],
        }
    },
    created() {
        this.tateNameList = tateRepository.nameList;
        this.inList = tateRepository.inList;
        this.findAllItemList();
    },
    methods: {
        onChangeSearchItemName() {
            this.findItemList();
        },
        onClickJingiBtn() {
            this.isJingi = !this.isJingi;
            this.findItemList();
        },
        onClickNedanType(type) {
            this.searchNedanType = type;
            if (this.searchNedanType === 'all') {
                this.findAllItemList();
            }
            else {
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
            this.findAllItemList();
        },
        onFocusInputNedan(event) {
            event.target.select();
        },
        onBlurInputNedan(event) {
            this.searchNedan = Number(this.searchNedan);
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
        onChangeInNameSelect() {
            const selectedIn = this.selectedIn;
            this.selectedIn = null;
            if (this.searchInList.includes(selectedIn)) {
                return;
            }
            this.searchInList.push(selectedIn);
            this.findItemList();
        },
        onClickInTagClose(inn) {
            const removeIndex = this.searchInList.indexOf(inn);
            if (removeIndex === -1) {
                return;
            }
            this.searchInList.splice(removeIndex, 1);
            this.findItemList();
        },
        findItemList() {
            let tateList = [];
            if (!this.isFirstTime) {
                tateList = tateRepository.findItemList(
                    this.searchItemName, this.isJingi,
                    this.searchNedan, this.searchNedanType,
                    this.searchInList
                );
            }
            this.$emit('foundTateList', {isFirstTime: this.isFirstTime, tateList});
        },
        findAllItemList() {
            const allTateList = tateRepository.findAllItemList(this.searchItemStatusList);
            this.$emit('foundAllTateList', allTateList);
        },
    }
};
