import { tueRepository } from '../item/tue_repository';

export const TuePlusSearch = {
    template: `
        <select id="search-item-name"
                v-model="searchItemName"
                @change="onChangeSearchItemName">
          <template v-for="name in tueNameList">
            <option :value="name">{{name}}</option>
          </template>
        </select>

        <div id="input-nedan-container">
          <div id="nedan-type-container">
            <template v-for="nedanType in nedanTypeList">
              <div class="radio-btn nedan-type"
                   v-if="nedanType !== 'all'"
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
    data() {
        return {
            tueNameList: [],
            searchItemName: 'ただの杖',
            searchNedanType: 'urine',
            searchNedan: 0,
        }
    },
    created() {
        this.tueNameList = tueRepository.nameList;
    },
    onChangeSearchItemName() {
        // todo イベント発火
        // this.findItemList();
    },
    onFocusInputNedan(event) {
        event.target.select();
    },
    onBlurInputNedan(event) {
        this.searchNedan = Number(this.searchNedan);
        event.target.value = this.searchNedan;
        // this.findItemList(); todo
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
        // this.findItemList(); // todo
    },
};
