import { ItemRepository } from "./item_repository";
import { calcNedan } from "./buki_tate_kantei";

class BukiRepository extends ItemRepository {
    nameList = [];
    inList = [
        {name: 'サビ', fullName: 'サビよけ', kaine: 500, urine: 175},
        {name: '三', fullName: '三方向攻撃', kaine: 3000, urine: 1050},
        {name: '後', fullName: '前後攻撃', kaine: 3000, urine: 1050},
        {name: '左右', fullName: '左右攻撃', kaine: 3000, urine: 1050},
        {name: '会', fullName: '会心の一撃', kaine: 1000, urine: 350},
        {name: '必', fullName: '必中', kaine: 5000, urine: 1750},
        {name: '連', fullName: '連続攻撃', kaine: 5000, urine: 1750},
        {name: '水', fullName: '水棲特攻', kaine: 500, urine: 175},
        {name: '獣', fullName: 'ケモノ特攻', kaine: 500, urine: 175},
        {name: '竜', fullName: 'ドラゴン特攻', kaine: 500, urine: 175},
        {name: '爆', fullName: '爆発特攻', kaine: 500, urine: 175},
        {name: '仏', fullName: 'ゴースト特攻', kaine: 500, urine: 175},
        {name: 'ド', fullName: 'ドレイン特攻', kaine: 500, urine: 175},
        {name: '目', fullName: '一ツ目特攻', kaine: 500, urine: 175},
        {name: '斬', fullName: '金属特攻', kaine: 1000, urine: 350},
        {name: '浮', fullName: '浮遊特攻', kaine: 500, urine: 175},
        {name: 'デ', fullName: 'デッ怪特攻', kaine: 500, urine: 175},
        {name: '乱', fullName: '混乱', kaine: 1000, urine: 350},
        {name: '眠', fullName: '睡眠', kaine: 1000, urine: 350},
        {name: '封', fullName: '封印', kaine: 1000, urine: 350},
        {name: '暗', fullName: '目つぶし', kaine: 1000, urine: 350},
        {name: '縛', fullName: 'かなしばり', kaine: 1000, urine: 350},
        {name: '炎', fullName: '炎飛ばし', kaine: 2000, urine: 700},
        {name: '電', fullName: '感電', kaine: 1000, urine: 350},
        {name: '突', fullName: '突き飛ばし', kaine: 1000, urine: 350},
        {name: '回', fullName: '回復', kaine: 1000, urine: 350},
        {name: '桃', fullName: '桃まん', kaine: 1000, urine: 350},
        {name: '金', fullName: '金食い攻撃', kaine: 1000, urine: 350},
        {name: '腹力', fullName: '腹ちから攻撃', kaine: 1000, urine: 350},
        {name: '飢', fullName: 'ハングリー', kaine: 1000, urine: 350},
        {name: '底', fullName: '底力', kaine: 1000, urine: 350},
        {name: 'ス', fullName: '空振り溜め', kaine: 500, urine: 175},
        {name: '溜4', fullName: '4連溜め', kaine: 500, urine: 175},
        {name: '0', fullName: '0の会心', kaine: 500, urine: 175},
        {name: '1', fullName: '1の会心', kaine: 500, urine: 175},
        {name: '2', fullName: '2の会心', kaine: 500, urine: 175},
        {name: '3', fullName: '3の会心', kaine: 500, urine: 175},
        {name: '4', fullName: '4の会心', kaine: 500, urine: 175},
        {name: '5', fullName: '5の会心', kaine: 500, urine: 175},
        {name: '6', fullName: '6の会心', kaine: 500, urine: 175},
        {name: '7', fullName: '7の会心', kaine: 500, urine: 175},
        {name: '8', fullName: '8の会心', kaine: 500, urine: 175},
        {name: '9', fullName: '9の会心', kaine: 500, urine: 175},
        {name: '堀', fullName: '壁掘り', kaine: 500, urine: 175},
        {name: '堀∞', fullName: '壁掘り無限', kaine: 5000, urine: 1750},
        {name: '壊', fullName: '罠壊し', kaine: 500, urine: 175},
        {name: '壊∞', fullName: '罠壊し無限', kaine: 5000, urine: 1750},
        {name: '探', fullName: '罠探り', kaine: 500, urine: 175},
        {name: '鰹', fullName: '鰹節', kaine: 500, urine: 175},
        {name: '呪', fullName: '呪いのちから', kaine: 500, urine: 175},
        {name: '劣', fullName: '劣化', kaine: 500, urine: 175},
        {name: '薬', fullName: 'HP+5', kaine: 2000, urine: 700},
        {name: '弟', fullName: 'HP+10', kaine: 1000, urine: 350},
        {name: '癒', fullName: 'HP+15', kaine: 3000, urine: 1050},
        {name: '命', fullName: 'HP+20', kaine: 3000, urine: 1050},
    ];

    constructor() {
        super();
        this.canSyukufuku = false;
        const c = this.create;
        this.add(c('木刀', 250, 100));
        this.add(c('青銅の太刀', 550, 220));
        this.add(c('カタナ', 1000, 400));
        this.add(c('どうたぬき', 2200, 880));
        this.add(c('剛剣マンジカブラ', 5500, 2200));
        this.add(c('火迅風魔刀', 16000, 6400));
        this.add(c('秘剣カブラステギ', 25000, 10000));
        this.add(c('金の剣', 3000, 1200));
        this.add(c('妖刀かまいたち', 8400, 3360));
        this.add(c('ミノタウロスの斧', 6500, 2600));
        this.add(c('連撃刀', 10000, 4000));
        this.add(c('水斬りの剣', 3300, 1320));
        this.add(c('原始の斧', 5000, 2000));
        this.add(c('ドラゴンキラー', 4000, 1600));
        this.add(c('三日月刀', 3500, 1400));
        this.add(c('空の刃', 3700, 1480));
        this.add(c('成仏のカマ', 4200, 1680));
        this.add(c('ドレインバスター', 3600, 1440));
        this.add(c('一ツ目殺し', 3200, 1280));
        this.add(c('斬鉄剣', 3100, 1240));
        this.add(c('巨大ハリセン', 4200, 1680));
        this.add(c('回復の剣', 4300, 1720));
        this.add(c('桃まん棒', 4500, 1800));
        this.add(c('金食い虫こん棒', 6000, 2400));
        this.add(c('鉄塊の大剣', 5300, 2120));
        this.add(c('ステーキナイフ', 5400, 2160));
        this.add(c('スパークソード', 5500, 2200));
        this.add(c('四ツ叉', 5600, 2240));
        this.add(c('めでたい熊手', 5700, 2280));
        this.add(c('つるはし', 1000, 400));
        this.add(c('黄金のつるはし', 18000, 7200));
        this.add(c('木づち', 1000, 400));
        this.add(c('最強ハンマー', 15000, 6000));
        this.add(c('罠探りの棒', 4400, 1760));
        this.add(c('かつおぶし', 1800, 720));
        this.add(c('山姥包丁', 4000, 1600));
        this.add(c('使い捨て刀', 3000, 1200));

        this.nameList = this.itemList.filter(item => item.status === 'normal').map(item => item.name);
    }

    findItemList(searchItemName, isJingi, searchNedan, searchNedanType, searchInList) {
        const result = [];
        let searchItem = null;
        for (const item of this.itemList) {
            if (item.name === searchItemName) {
                searchItem = item;
                break;
            }
        }

        let existsNoroi = false;
        let prevNormalNedan = 0;
        for (let syuseiti = -99; syuseiti <= 99; syuseiti++) {
            if (!existsNoroi) {
                const noroiNedan = calcNedan(searchNedanType, searchItem, isJingi, syuseiti, searchInList, true);
                if (noroiNedan === searchNedan) {
                    existsNoroi = true;
                    result.push({isNoroi: true, syuseiti});
                }
                else if (noroiNedan > searchNedan) {
                    break;
                }
            }
            
            if (prevNormalNedan < searchNedan) {
                const normalNedan = calcNedan(searchNedanType, searchItem, isJingi, syuseiti, searchInList, false);
                if (normalNedan === searchNedan) {
                    result.push({isNoroi: false, syuseiti});
                }
            }
            else if (existsNoroi) {
                break;
            }
        }

        return result;
    }
}

export const bukiRepository = new BukiRepository();
