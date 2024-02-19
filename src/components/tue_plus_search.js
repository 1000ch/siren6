import { tueRepository } from '../item/tue_repository';

export const TuePlusSearch = {
    template: `
        <div>Hello, World!</div>
        <!--
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
        -->
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
};
