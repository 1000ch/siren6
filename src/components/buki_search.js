import { bukiRepository } from '../item/buki_repository';

export const BukiSearch = {
    template: `
        <div v-show="searchNedanType !== 'all'"
             id="search-item-name-container">
          <select id="search-item-name"
                  v-model="searchItem"
                  @change="onChangeSearchItemName">
            <template v-for="item in normalItemList">
              <option :value="item">{{item.name}}</option>
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
            <option :value="inn"
                    :disabled="inn === searchItem.in || searchInList.includes(inn)">
              「{{inn.name}}」{{inn.fullName}}
            </option>
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
    emits: ['foundBukiList', 'foundAllBukiList'],
    data() {
        return {
            isFirstTime: true,
            normalItemList: [],
            inList: [],
            searchInList: [],
            selectedIn: null,
            searchItem: null,
            isJingi: false,
            nedanTypeList: ['kaine', 'urine', 'all'],
            nedanTypeName: {kaine: '買値', urine: '売値', all: '一覧'},
            itemStatusList: ['normal', 'noroi'],
            itemStatusName: {normal: '通常', noroi: '呪い'},
            searchNedanType: 'all',
            searchNedan: 0,
            searchItemStatusList: ['normal'],
            shouldDisplaySearchHint: false,
        }
    },
    created() {
        this.normalItemList = bukiRepository.normalItemList;
        this.searchItem = this.normalItemList[0];
        this.inList = bukiRepository.inList;
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
            this.shouldDisplaySearchHint = false;
            let bukiList = [];
            if (!this.isFirstTime) {
                bukiList = bukiRepository.findItemList(
                    this.searchItem, this.isJingi,
                    this.searchNedan, this.searchNedanType,
                    this.searchInList
                );
                if (bukiList.length === 0) {
                    bukiList = bukiRepository.findItemList(
                        this.searchItem, this.isJingi,
                        this.searchNedan, this.searchNedanType === 'kaine' ? 'urine' : 'kaine',
                        this.searchInList
                    );
                    if (bukiList.length > 0) {
                        this.shouldDisplaySearchHint = true;
                    }
                }
            }
            this.$emit('foundBukiList', {
                isFirstTime: this.isFirstTime,
                bukiList,
                shouldDisplaySearchHint: this.shouldDisplaySearchHint,
                searchNedanType: this.searchNedanType
            });
        },
        findAllItemList() {
            const allBukiList = bukiRepository.findAllItemList(this.searchItemStatusList);
            this.$emit('foundAllBukiList', allBukiList);
        },
    }
};
