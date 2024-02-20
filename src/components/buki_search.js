import { bukiRepository } from '../item/buki_repository';

export const BukiSearch = {
    template: `
        <div id="search-item-name-container">
          <select id="search-item-name"
                  v-model="searchItemName"
                  @change="onChangeSearchItemName">
            <template v-for="name in bukiNameList">
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

        <select id="in-name-select"
                @change="onChangeInNameSelect">
          <option value="" hidden>印の追加</option>
          <template v-for="inn in inList">
            <option :value="inn.name">{{inn.fullName}}</option>
          </template>
        </select>
    `,
    emits: ['result'],
    data() {
        return {
            isFirstTime: true,
            bukiNameList: [],
            inList: [],
            searchItemName: '木刀',
            isJingi: false,
            nedanTypeList: ['kaine', 'urine', 'all'],
            nedanTypeName: {kaine: '買値', urine: '売値', all: '一覧'},
            itemStatusList: ['normal', 'noroi'],
            itemStatusName: {normal: '通常', noroi: '呪い'},
            searchNedanType: 'kaine',
            searchNedan: 0,
            searchItemStatusList: ['normal'],
        }
    },
    created() {
        this.bukiNameList = bukiRepository.nameList;
        this.inList = bukiRepository.inList;
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
            // todo
            this.findItemList();
        },
        findItemList() {
            // todo
        }
    }
};
