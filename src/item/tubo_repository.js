import { ItemRepository } from "./item_repository";
import { grouping } from "./reusable";

class TuboRepository extends ItemRepository {
    #itemGroupList = [];

    get itemGroupList() {
        return this.#itemGroupList;
    }

    create(name, kaine, urine, isMiseUri = true, needTuboZoudai = false) {
        return {
            status: 'normal',
            name, kaine, urine, isMiseUri,
            needTuboZoudai
        }
    }

    constructor() {
        super();
        this.canSyukufuku = false;
        const c = this.create;
        // コメントアウトは意図的に残している
        this.add(c('保存の壺[0]', 800, 320, false));
        // this.add(c('保存の壺[1]', 900, 360, false));
        // this.add(c('保存の壺[2]', 1000, 400, false));
        this.add(c('保存の壺[3]', 1100, 440));
        this.add(c('保存の壺[4]', 1200, 480));
        this.add(c('保存の壺[5]', 1300, 520));
        this.add(c('保存の壺[6]', 1400, 560, true, true));
        this.add(c('識別の壺[0]', 800, 320, false));
        // this.add(c('識別の壺[1]', 900, 360, false));
        // this.add(c('識別の壺[2]', 1000, 400, false));
        this.add(c('識別の壺[3]', 1100, 440));
        this.add(c('識別の壺[4]', 1200, 480));
        this.add(c('識別の壺[5]', 1300, 520));
        this.add(c('識別の壺[6]', 1400, 560, true, true));
        this.add(c('変化の壺[0]', 800, 320, false));
        // this.add(c('変化の壺[1]', 900, 360, false));
        // this.add(c('変化の壺[2]', 1000, 400, false));
        this.add(c('変化の壺[3]', 1100, 440));
        this.add(c('変化の壺[4]', 1200, 480));
        this.add(c('変化の壺[5]', 1300, 520));
        this.add(c('変化の壺[6]', 1400, 560, true, true));
        this.add(c('ただの壺[0]', 800, 320, false));
        // this.add(c('ただの壺[1]', 900, 360, false));
        // this.add(c('ただの壺[2]', 1000, 400, false));
        this.add(c('ただの壺[3]', 1100, 440));
        this.add(c('ただの壺[4]', 1200, 480));
        this.add(c('ただの壺[5]', 1300, 520));
        this.add(c('ただの壺[6]', 1400, 560, true, true));
        this.add(c('やりすごしの壺[0]', 800, 320, false));
        // this.add(c('やりすごしの壺[1]', 900, 360, false));
        // this.add(c('やりすごしの壺[2]', 1000, 400, false));
        this.add(c('やりすごしの壺[3]', 1100, 440));
        this.add(c('やりすごしの壺[4]', 1200, 480));
        this.add(c('やりすごしの壺[5]', 1300, 520));
        this.add(c('やりすごしの壺[6]', 1400, 560, true, true));
        this.add(c('換金の壺[0]', 1000, 400, false));
        // this.add(c('換金の壺[1]', 1100, 440, false));
        // this.add(c('換金の壺[2]', 1200, 480, false));
        this.add(c('換金の壺[3]', 1300, 520));
        this.add(c('換金の壺[4]', 1400, 560));
        this.add(c('換金の壺[5]', 1500, 600));
        this.add(c('換金の壺[6]', 1600, 640, true, true));
        this.add(c('底抜けの壺[0]', 1000, 400, false));
        this.add(c('底抜けの壺[1]', 1100, 440, false));
        this.add(c('底抜けの壺[2]', 1200, 480));
        this.add(c('底抜けの壺[3]', 1300, 520));
        this.add(c('底抜けの壺[4]', 1400, 560));
        this.add(c('底抜けの壺[5]', 1500, 600, true, true));
        this.add(c('底抜けの壺[6]', 1600, 640, true, true));
        this.add(c('倉庫の壺[0]', 1000, 400, false));
        this.add(c('倉庫の壺[1]', 1100, 440, false));
        this.add(c('倉庫の壺[2]', 1200, 480));
        this.add(c('倉庫の壺[3]', 1300, 520));
        this.add(c('倉庫の壺[4]', 1400, 560));
        this.add(c('倉庫の壺[5]', 1500, 600));
        this.add(c('倉庫の壺[6]', 1600, 640, true, true));
        this.add(c('手封じの壺[0]', 1000, 400, false));
        // this.add(c('手封じの壺[1]', 1100, 440, false));
        // this.add(c('手封じの壺[2]', 1200, 480, false));
        this.add(c('手封じの壺[3]', 1300, 520));
        this.add(c('手封じの壺[4]', 1400, 560));
        this.add(c('手封じの壺[5]', 1500, 600));
        this.add(c('手封じの壺[6]', 1600, 640, true, true));
        this.add(c('割れない壺[0]', 1000, 400, false));
        // this.add(c('割れない壺[1]', 1100, 440, false));
        // this.add(c('割れない壺[2]', 1200, 480, false));
        this.add(c('割れない壺[3]', 1300, 520));
        this.add(c('割れない壺[4]', 1400, 560));
        this.add(c('割れない壺[5]', 1500, 600));
        this.add(c('割れない壺[6]', 1600, 640, true, true));
        this.add(c('おはらいの壺[0]', 1600, 640, false));
        // this.add(c('おはらいの壺[1]', 1700, 680, false));
        this.add(c('おはらいの壺[2]', 1800, 720));
        this.add(c('おはらいの壺[3]', 1900, 760));
        this.add(c('おはらいの壺[4]', 2000, 800));
        this.add(c('おはらいの壺[5]', 2100, 840, true, true));
        this.add(c('おはらいの壺[6]', 2200, 880, true, true));
        this.add(c('呪いの壺[0]', 1600, 640, false));
        // this.add(c('呪いの壺[1]', 1700, 680, false));
        this.add(c('呪いの壺[2]', 1800, 720));
        this.add(c('呪いの壺[3]', 1900, 760));
        this.add(c('呪いの壺[4]', 2000, 800));
        this.add(c('呪いの壺[5]', 2100, 840, true, true));
        this.add(c('呪いの壺[6]', 2200, 880, true, true));
        this.add(c('背中の壺[0]', 2000, 800, false));
        this.add(c('背中の壺[1]', 2100, 840, false));
        this.add(c('背中の壺[2]', 2200, 880, false));
        this.add(c('背中の壺[3]', 2300, 920));
        this.add(c('背中の壺[4]', 2400, 960));
        this.add(c('背中の壺[5]', 2500, 1000));
        this.add(c('背中の壺[6]', 2600, 1040, true, true));
        this.add(c('トドの壺[0]', 2000, 800, false));
        this.add(c('トドの壺[1]', 2100, 840, false));
        this.add(c('トドの壺[2]', 2200, 880, false));
        this.add(c('トドの壺[3]', 2300, 920));
        this.add(c('トドの壺[4]', 2400, 960));
        this.add(c('トドの壺[5]', 2500, 1000));
        this.add(c('トドの壺[6]', 2600, 1040, true, true));
        this.add(c('水鉄砲の壺[0]', 2000, 800, false));
        this.add(c('水鉄砲の壺[1]', 2100, 840, false));
        this.add(c('水鉄砲の壺[2]', 2200, 880, false));
        this.add(c('水鉄砲の壺[3]', 2300, 920));
        this.add(c('水鉄砲の壺[4]', 2400, 960));
        this.add(c('水鉄砲の壺[5]', 2500, 1000));
        this.add(c('水鉄砲の壺[6]', 2600, 1040, true, true));
        this.add(c('笑いの壺[0]', 2000, 800, false));
        this.add(c('笑いの壺[1]', 2100, 840, false));
        this.add(c('笑いの壺[2]', 2200, 880));
        this.add(c('笑いの壺[3]', 2300, 920));
        this.add(c('笑いの壺[4]', 2400, 960, true, true));
        this.add(c('笑いの壺[5]', 2500, 1000, true, true));
        this.add(c('笑いの壺[6]', 2600, 1040, true, true));
        this.add(c('魔物の壺[0]', 2000, 800, false));
        // this.add(c('魔物の壺[1]', 2100, 840, false));
        // this.add(c('魔物の壺[2]', 2200, 880, false));
        this.add(c('魔物の壺[3]', 2300, 920));
        this.add(c('魔物の壺[4]', 2400, 960));
        this.add(c('魔物の壺[5]', 2500, 1000));
        this.add(c('魔物の壺[6]', 2600, 1040, true, true));
        this.add(c('ビックリの壺[0]', 2000, 800, false));
        // this.add(c('ビックリの壺[1]', 2100, 840, false));
        // this.add(c('ビックリの壺[2]', 2200, 880, false));
        this.add(c('ビックリの壺[3]', 2300, 920));
        this.add(c('ビックリの壺[4]', 2400, 960));
        this.add(c('ビックリの壺[5]', 2500, 1000));
        this.add(c('ビックリの壺[6]', 2600, 1040, true, true));
        this.add(c('合成の壺[0]', 6000, 2400, false));
        this.add(c('合成の壺[1]', 6100, 2440, false));
        this.add(c('合成の壺[2]', 6200, 2480, false));
        this.add(c('合成の壺[3]', 6300, 2520));
        this.add(c('合成の壺[4]', 6400, 2560));
        this.add(c('合成の壺[5]', 6500, 2600, true, true));
        this.add(c('合成の壺[6]', 6600, 2640, true, true));
        this.add(c('強化の壺[0]', 10000, 4000, false));
        // this.add(c('強化の壺[1]', 10100, 4040, false));
        this.add(c('強化の壺[2]', 10200, 4080));
        this.add(c('強化の壺[3]', 10300, 4120));
        this.add(c('強化の壺[4]', 10400, 4160, true, true));
        this.add(c('強化の壺[5]', 10500, 4200, true, true));
        this.add(c('強化の壺[6]', 10600, 4240, true, true));
        this.add(c('弱化の壺[0]', 10000, 4000, false));
        // this.add(c('弱化の壺[1]', 10100, 4040, false));
        this.add(c('弱化の壺[2]', 10200, 4080));
        this.add(c('弱化の壺[3]', 10300, 4120));
        this.add(c('弱化の壺[4]', 10400, 4160, true, true));
        this.add(c('弱化の壺[5]', 10500, 4200, true, true));
        this.add(c('弱化の壺[6]', 10600, 4240, true, true));

        this.#itemGroupList = grouping(this.itemList);
    }

    findItemList(nedan, searchNedanType) {
        return this.itemList.filter(item => item[searchNedanType] === nedan).sort((a, b) => {
            if (!a.needTuboZoudai && b.needTuboZoudai) {
                return -1;
            }
            else if (a.needTuboZoudai && !b.needTuboZoudai) {
                return 1;
            }
            else if (a.status === b.status) {
                return 0;
            }
            else if (a.status === 'noroi') {
                return -1;
            }
            else if (b.status === 'noroi') {
                return 1;
            }
            else if (a.status === 'syukufuku') {
                return 1;
            }
            else if (b.status === 'syukufuku') {
                return -1;
            }
            throw new Error('ここが実行されることはありえない');
        });
    }

    findAllItemList(searchItemStatusList = ['normal']) {
        return this.#itemGroupList.filter(group => searchItemStatusList.includes(group[0].status))
                                  .sort((a, b) => this.findAllItemListSortRule(a[0], b[0]))
                                  .map(group => {
            let minCount = -1;
            let maxCount = -1;
            const offset = group[0].status === 'normal' ? 0 : -2;
            for (let i = 0; i < group.length; i++) {
                const item = group[i];
                if (minCount === -1 && item.isMiseUri) {
                    minCount = item.name.at(-2 + offset);
                }
                else if (item.needTuboZoudai) {
                    maxCount = group[i - 1].name.at(-2 + offset);
                    break;
                }
            }
            return {
                name: group[0].name.replace(/\[\d+\]/, ''),
                kaine: group[0].kaine,
                urine: group[0].urine,
                count: `${minCount}～${maxCount}`,
            };
        });
    }
}

export const tuboRepository = new TuboRepository();
