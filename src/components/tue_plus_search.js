import { tueRepository } from '../item/tue_repository';

export const TuePlusSearch = {
    props: {
        useBothKaineAndUrine: Boolean
    },
    template: `
        <div id="search-item-name-container">
          <select id="search-item-name"
                  v-model="searchItemName"
                  @change="onChangeSearchItemName">
            <template v-for="name in tueNameList">
              <option :value="name">{{name}}</option>
            </template>
          </select>
        </div>

        <div id="input-nedan-container">
          <div id="nedan-type-container">
            <template v-for="nedanType in nedanTypeList">
              <div class="radio-btn nedan-type"
                   :class="{'selected': searchNedanType === nedanType}"
                   @click="onClickNedanType(nedanType)">{{nedanTypeName[nedanType]}}</div>
            </template>
          </div>
          <input type="number" id="input-nedan" v-model="searchNedan"
                 @focus="onFocusInputNedan"
                 @blur="onBlurInputNedan"
                 @keydown.enter="onKeyDownEnterInputNedan">
          <img id="clear-btn" ref="clearBtn" src="./assets/gamara.png"
               @click="onClickClearBtn">
        </div>
    `,
    emits: ['foundTueCountList'],
    data() {
        return {
            isFirstTime: true,
            tueNameList: [],
            searchItemName: 'ただの杖',
            nedanTypeList: ['kaine', 'urine'],
            nedanTypeName: {kaine: '買値', urine: '売値'},
            searchNedanType: 'urine',
            searchNedan: 0,
        }
    },
    created() {
        this.tueNameList = tueRepository.nameList;
    },
    methods: {
        onChangeSearchItemName() {
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
        findItemList() {
            const tueCountList = tueRepository.findCountList(this.searchItemName, this.searchNedan, this.searchNedanType);
            this.$emit('foundTueCountList', {tueCountList, isFirstTime: this.isFirstTime});
        }
    }
};
