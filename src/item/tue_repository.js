import { ItemRepository } from "./item_repository";
import { grouping, findAllItemGroupList } from "./reusable";

export class TueRepository extends ItemRepository {
    static #itemGroupList = [];
    static #itemBaseList = [];
    static nameList = [];

    static init() {
        this.canSyukufuku = false;
        const c = this.create;
        add(c('ただの杖[0]', 500, 200, false));
        add(c('ただの杖[1]', 600, 240, false));
        add(c('ただの杖[2]', 700, 280, false));
        add(c('ただの杖[3]', 800, 320, false));
        add(c('ただの杖[4]', 900, 360, false));
        add(c('ただの杖[5]', 1000, 400));
        add(c('ただの杖[6]', 1100, 440));
        add(c('ただの杖[7]', 1200, 480));
        add(c('かなしばりの杖[0]', 500, 200, false));
        add(c('かなしばりの杖[1]', 600, 240, false));
        add(c('かなしばりの杖[2]', 700, 280, false));
        add(c('かなしばりの杖[3]', 800, 320, false));
        add(c('かなしばりの杖[4]', 900, 360));
        add(c('かなしばりの杖[5]', 1000, 400));
        add(c('かなしばりの杖[6]', 1100, 440));
        add(c('封印の杖[0]', 500, 200, false));
        add(c('封印の杖[1]', 600, 240, false));
        add(c('封印の杖[2]', 700, 280, false));
        add(c('封印の杖[3]', 800, 320, false));
        add(c('封印の杖[4]', 900, 360));
        add(c('封印の杖[5]', 1000, 400));
        add(c('封印の杖[6]', 1100, 440));
        add(c('吹き飛ばしの杖[0]', 500, 200, false));
        add(c('吹き飛ばしの杖[1]', 600, 240, false));
        add(c('吹き飛ばしの杖[2]', 700, 280, false));
        add(c('吹き飛ばしの杖[3]', 800, 320, false));
        add(c('吹き飛ばしの杖[4]', 900, 360, false));
        add(c('吹き飛ばしの杖[5]', 1000, 400));
        add(c('吹き飛ばしの杖[6]', 1100, 440));
        add(c('吹き飛ばしの杖[7]', 1200, 480));
        add(c('場所がえの杖[0]', 500, 200, false));
        add(c('場所がえの杖[1]', 600, 240, false));
        add(c('場所がえの杖[2]', 700, 280, false));
        add(c('場所がえの杖[3]', 800, 320, false));
        add(c('場所がえの杖[4]', 900, 360, false));
        add(c('場所がえの杖[5]', 1000, 400));
        add(c('場所がえの杖[6]', 1100, 440));
        add(c('場所がえの杖[7]', 1200, 480));
        add(c('飛びつきの杖[0]', 500, 200, false));
        add(c('飛びつきの杖[1]', 600, 240, false));
        add(c('飛びつきの杖[2]', 700, 280, false));
        add(c('飛びつきの杖[3]', 800, 320, false));
        add(c('飛びつきの杖[4]', 900, 360, false));
        add(c('飛びつきの杖[5]', 1000, 400));
        add(c('飛びつきの杖[6]', 1100, 440));
        add(c('飛びつきの杖[7]', 1200, 480));
        add(c('感電の杖[0]', 500, 200, false));
        add(c('感電の杖[1]', 600, 240, false));
        add(c('感電の杖[2]', 700, 280, false));
        add(c('感電の杖[3]', 800, 320, false));
        add(c('感電の杖[4]', 900, 360));
        add(c('感電の杖[5]', 1000, 400));
        add(c('感電の杖[6]', 1100, 440));
        add(c('転ばぬ先の杖[0]', 500, 200, false));
        add(c('転ばぬ先の杖[1]', 600, 240, false));
        add(c('転ばぬ先の杖[2]', 700, 280, false));
        add(c('転ばぬ先の杖[3]', 800, 320, false));
        add(c('転ばぬ先の杖[4]', 900, 360, false));
        add(c('転ばぬ先の杖[5]', 1000, 400));
        add(c('転ばぬ先の杖[6]', 1100, 440));
        add(c('転ばぬ先の杖[7]', 1200, 480));
        add(c('トンネルの杖[0]', 700, 280, false));
        add(c('トンネルの杖[1]', 800, 320, false));
        add(c('トンネルの杖[2]', 900, 360, false));
        add(c('トンネルの杖[3]', 1000, 400, false));
        add(c('トンネルの杖[4]', 1100, 440));
        add(c('トンネルの杖[5]', 1200, 480));
        add(c('トンネルの杖[6]', 1300, 520));
        add(c('土塊の杖[0]', 700, 280, false));
        add(c('土塊の杖[1]', 800, 320, false));
        add(c('土塊の杖[2]', 900, 360, false));
        add(c('土塊の杖[3]', 1000, 400, false));
        add(c('土塊の杖[4]', 1100, 440));
        add(c('土塊の杖[5]', 1200, 480));
        add(c('土塊の杖[6]', 1300, 520));
        add(c('導きの杖[0]', 700, 280, false));
        add(c('導きの杖[1]', 800, 320, false));
        add(c('導きの杖[2]', 900, 360));
        add(c('導きの杖[3]', 1000, 400));
        add(c('導きの杖[4]', 1100, 440));
        add(c('加速の杖[0]', 700, 280, false));
        add(c('加速の杖[1]', 800, 320, false));
        add(c('加速の杖[2]', 900, 360, false));
        add(c('加速の杖[3]', 1000, 400, false));
        add(c('加速の杖[4]', 1100, 440));
        add(c('加速の杖[5]', 1200, 480));
        add(c('加速の杖[6]', 1300, 520));
        add(c('鈍足の杖[0]', 700, 280, false));
        add(c('鈍足の杖[1]', 800, 320, false));
        add(c('鈍足の杖[2]', 900, 360, false));
        add(c('鈍足の杖[3]', 1000, 400, false));
        add(c('鈍足の杖[4]', 1100, 440));
        add(c('鈍足の杖[5]', 1200, 480));
        add(c('鈍足の杖[6]', 1300, 520));
        add(c('痛み分けの杖[0]', 1000, 400, false));
        add(c('痛み分けの杖[1]', 1100, 440, false));
        add(c('痛み分けの杖[2]', 1200, 480, false));
        add(c('痛み分けの杖[3]', 1300, 520, false));
        add(c('痛み分けの杖[4]', 1400, 560, false));
        add(c('痛み分けの杖[5]', 1500, 600));
        add(c('痛み分けの杖[6]', 1600, 640));
        add(c('痛み分けの杖[7]', 1700, 680));
        add(c('一時しのぎの杖[0]', 1000, 400, false));
        add(c('一時しのぎの杖[1]', 1100, 440, false));
        add(c('一時しのぎの杖[2]', 1200, 480, false));
        add(c('一時しのぎの杖[3]', 1300, 520, false));
        add(c('一時しのぎの杖[4]', 1400, 560));
        add(c('一時しのぎの杖[5]', 1500, 600));
        add(c('一時しのぎの杖[6]', 1600, 640));
        add(c('ガイコツまどうの杖[0]', 1000, 400, false));
        add(c('ガイコツまどうの杖[1]', 1100, 440, false));
        add(c('ガイコツまどうの杖[2]', 1200, 480, false));
        add(c('ガイコツまどうの杖[3]', 1300, 520, false));
        add(c('ガイコツまどうの杖[4]', 1400, 560, false));
        add(c('ガイコツまどうの杖[5]', 1500, 600));
        add(c('ガイコツまどうの杖[6]', 1600, 640));
        add(c('ガイコツまどうの杖[7]', 1700, 680));
        add(c('幸せの杖[0]', 1000, 400, false));
        add(c('幸せの杖[1]', 1100, 440, false));
        add(c('幸せの杖[2]', 1200, 480, false));
        add(c('幸せの杖[3]', 1300, 520, false));
        add(c('幸せの杖[4]', 1400, 560));
        add(c('幸せの杖[5]', 1500, 600));
        add(c('幸せの杖[6]', 1600, 640));
        add(c('不幸の杖[0]', 1000, 400, false));
        add(c('不幸の杖[1]', 1100, 440, false));
        add(c('不幸の杖[2]', 1200, 480, false));
        add(c('不幸の杖[3]', 1300, 520, false));
        add(c('不幸の杖[4]', 1400, 560));
        add(c('不幸の杖[5]', 1500, 600));
        add(c('不幸の杖[6]', 1600, 640));
        add(c('身代わりの杖[0]', 2000, 800, false));
        add(c('身代わりの杖[1]', 2100, 840, false));
        add(c('身代わりの杖[2]', 2200, 880, false));
        add(c('身代わりの杖[3]', 2300, 920, false));
        add(c('身代わりの杖[4]', 2400, 960));
        add(c('身代わりの杖[5]', 2500, 1000));
        add(c('身代わりの杖[6]', 2600, 1040));
        add(c('桃まんの杖[0]', 2000, 800, false));
        add(c('桃まんの杖[1]', 2100, 840, false));
        add(c('桃まんの杖[2]', 2200, 880, false));
        add(c('桃まんの杖[3]', 2300, 920, false));
        add(c('桃まんの杖[4]', 2400, 960));
        add(c('桃まんの杖[5]', 2500, 1000));
        add(c('桃まんの杖[6]', 2600, 1040));

        this.#itemGroupList = grouping(this.itemList);
        this.#itemBaseList = this.#itemGroupList.map(group => ({
            name: group[0].name.slice(0, -3),
            kaine: group[0].kaine,
            urine: group[0].urine
        }));

        this.nameList = this.#itemBaseList.map(tue => tue.name);
    }

    static findAllItemList() {
        return findAllItemGroupList(this.#itemGroupList);
    }

    static findCountList(name, nedan, searchNedanType) {
        let nedan0 = 0;
        for (const item of this.#itemBaseList) {
            if (item.name === name) {
                nedan0 = item[searchNedanType];
            }
        }
        if (nedan0 === 0) {
            return [];
        }
        
        const result = [];
        const nedanDelta = searchNedanType === 'kaine' ? 100 : 40;
    
        for (let count = 0; count <= 99; count++) {
            const tmpNedan = nedan0 + nedanDelta * count;
            if (nedan === this.noroiNedan(tmpNedan)) {
                result.push({isNoroi: true, count});
            }
            else if (nedan === tmpNedan) {
                result.push({isNoroi: false, count});
                break;
            }
        }
        
        return result;
    }
}

TueRepository.init();
