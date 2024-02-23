
export function createBukiTateSearchViewModel(repository) {
    return {
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
    
            <div v-show="searchNedanType !== 'all'"
                 id="in-name-select-container">
              <select id="in-name-select"
                      v-model="selectedIn"
                      @change="onChangeInNameSelect">
                <option value="null" hidden>印の追加</option>
                <optgroup v-for="inList in inGroupList"
                          :label="inTypeName[inList[0].type]">
                  <option v-for="inn in inList"
                          :value="inn"
                          :disabled="inn === searchItem.in || searchInList.includes(inn)">
                    「{{inn.name}}」{{inn.fullName}}
                  </option>
                </optgroup>
              </select>
              <img id="in-reset-btn" src="./assets/tidoro.png"
                   ref="inResetBtn"
                   @click="onClickInResetBtn">
            </div>
            
            <div v-show="searchNedanType !== 'all' && searchInList.length > 0"
                 id="in-tag-list">
              <div v-for="inn in searchInList"
                   class="in-tag"
                   :class="inn.type">
                {{inn.fullName}}
                <img class="in-tag-close" 
                     src="./assets/odoro.png"
                     @click="onClickInTagClose(inn)">
              </div>
            </div>
        `,
        emits: ['foundItemList', 'foundAllItemList'],
        data() {
            return {
                isFirstTime: true,
                normalItemList: [],
                inGroupList: [],
                inTypeName: {normal: '青印', isyu: '緑印', tennen: '黄印'},
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
            // オドロ君は後から画像読み込みが発生して表示が遅いので先読みする。
            const img = document.createElement('img');
            img.src = "./assets/odoro.png";
    
            this.normalItemList = repository.normalItemList;
            this.searchItem = this.normalItemList[0];
            this.inGroupList = repository.inGroupList;
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
            onClickInResetBtn() {
                const inResetBtnClassList = this.$refs.inResetBtn.classList;
                if (!inResetBtnClassList.contains('melt')) {
                    inResetBtnClassList.add('melt');
                    setTimeout(() => {
                        inResetBtnClassList.remove('melt');
                    }, 5000);
                }
                this.searchInList = [];
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
                let itemList = [];
                if (!this.isFirstTime) {
                    itemList = repository.findItemList(
                        this.searchItem, this.isJingi,
                        this.searchNedan, this.searchNedanType,
                        this.searchInList
                    );
                    if (itemList.length === 0) {
                        itemList = repository.findItemList(
                            this.searchItem, this.isJingi,
                            this.searchNedan, this.searchNedanType === 'kaine' ? 'urine' : 'kaine',
                            this.searchInList
                        );
                        if (itemList.length > 0) {
                            this.shouldDisplaySearchHint = true;
                        }
                    }
                }
                this.$emit('foundItemList', {
                    isFirstTime: this.isFirstTime,
                    itemList,
                    shouldDisplaySearchHint: this.shouldDisplaySearchHint,
                    searchNedanType: this.searchNedanType
                });
            },
            findAllItemList() {
                const allItemList = repository.findAllItemList(this.searchItemStatusList);
                this.$emit('foundAllItemList', allItemList);
            },
        }
    };
}
