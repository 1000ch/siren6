
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
};
