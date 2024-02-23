import { ItemRepository } from "./item_repository";
import { calcNedan } from "./buki_tate_kantei";

class TateRepository extends ItemRepository {
    normalItemList = [];
    inList = [
        {name: 'サビ', fullName: 'サビよけ', kaine: 500, urine: 175, type: 'normal'},
        {name: '反', fullName: 'カウンター', kaine: 1000, urine: 350, type: 'normal'},
        {name: '影', fullName: '影縫い返し', kaine: 1000, urine: 350, type: 'tennen'},
        {name: 'ゾ', fullName: 'ゾワゾワ返し', kaine: 1000, urine: 350, type: 'isyu'},
        {name: '暴', fullName: '暴走返し', kaine: 1000, urine: 350, type: 'isyu'},
        {name: '惑', fullName: 'まどわし返し', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '米', fullName: 'おにぎり返し', kaine: 1000, urine: 350, type: 'isyu'},
        {name: '飛', fullName: '高飛び返し', kaine: 8000, urine: 2800, type: 'isyu'},
        {name: '見', fullName: '見切り', kaine: 2000, urine: 700, type: 'normal'},
        {name: '竜', fullName: 'ドラゴン特防', kaine: 8000, urine: 2800, type: 'normal'},
        {name: '爆', fullName: '耐爆', kaine: 1000, urine: 350, type: 'normal'},
        {name: '痛', fullName: '痛恨耐性', kaine: 8000, urine: 2800, type: 'normal'},
        {name: '鱗', fullName: '防水', kaine: 1000, urine: 350, type: 'normal'},
        {name: 'ト', fullName: 'トドよけ', kaine: 1000, urine: 350, type: 'normal'},
        {name: 'ガ', fullName: 'ガマラよけ', kaine: 1000, urine: 350, type: 'normal'},
        {name: '戯', fullName: 'いたずらよけ', kaine: 1000, urine: 350, type: 'normal'},
        {name: '握', fullName: 'にぎりよけ', kaine: 8000, urine: 2800, type: 'normal'},
        {name: '投', fullName: '投げものよけ', kaine: 1000, urine: 350, type: 'normal'},
        {name: '催', fullName: '催眠よけ', kaine: 1000, urine: 350, type: 'normal'},
        {name: '魔よ', fullName: '魔法弾よけ', kaine: 1000, urine: 350, type: 'normal'},
        {name: '魔反', fullName: '魔法弾反射', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '不', fullName: '不動', kaine: 2000, urine: 700, type: 'normal'},
        {name: '受', fullName: '受け身', kaine: 1000, urine: 350, type: 'normal'},
        {name: '金', fullName: '金食い防御', kaine: 8000, urine: 2800, type: 'normal'},
        {name: '腹力', fullName: '腹ぢから防御', kaine: 1000, urine: 350, type: 'normal'},
        {name: '飢', fullName: 'ハングリー', kaine: 1000, urine: 350, type: 'normal'},
        {name: '根', fullName: '根性', kaine: 1000, urine: 350, type: 'normal'},
        {name: '満', fullName: '満タン防御', kaine: 1000, urine: 350, type: 'normal'},
        {name: 'ハラ', fullName: 'ハラモチ', kaine: 500, urine: 175, type: 'normal'},
        {name: 'サ', fullName: 'サトリ', kaine: 5000, urine: 1750, type: 'normal'},
        {name: '罠', fullName: '罠よけ', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '0', fullName: '0の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '1', fullName: '1の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '2', fullName: '2の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '3', fullName: '3の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '4', fullName: '4の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '5', fullName: '5の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '6', fullName: '6の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '7', fullName: '7の守り', kaine: 1000, urine: 350, type: 'normal'},
        {name: '8', fullName: '8の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '9', fullName: '9の守り', kaine: 1000, urine: 350, type: 'tennen'},
        {name: '告', fullName: 'お告げ', kaine: 1000, urine: 350, type: 'normal'},
        {name: '呪', fullName: '呪いのちから', kaine: 1000, urine: 350, type: 'normal'},
        {name: '劣', fullName: '劣化', kaine: 1000, urine: 350, type: 'normal'},
        {name: '薬', fullName: 'HP+5', kaine: 2000, urine: 700, type: 'isyu'},
        {name: '弟', fullName: 'HP+10', kaine: 1000, urine: 350, type: 'isyu'},
        {name: '癒', fullName: 'HP+15', kaine: 3000, urine: 1050, type: 'isyu'},
        {name: '命', fullName: 'HP+20', kaine: 3000, urine: 1050, type: 'isyu'},
    ];

    constructor() {
        super();
        this.canSyukufuku = false;
        const c = this.create.bind(this);
        this.add(c('木甲の盾', 500, 200));
        this.add(c('青銅甲の盾', 800, 320));
        this.add(c('鉄甲の盾', 1200, 480));
        this.add(c('おにおおかみ', 1500, 600));
        this.add(c('風魔の盾', 6000, 2400));
        this.add(c('螺旋風魔の盾', 15000, 6000));
        this.add(c('金の盾', 2500, 1000, 'サビ'));
        this.add(c('バトルカウンター', 2200, 880, '反'));
        this.add(c('見切りの盾', 4000, 1600, '見'));
        this.add(c('ドラゴンシールド', 3000, 1200, '竜'));
        this.add(c('爆発隠の盾', 3300, 1320, '爆'));
        this.add(c('ミノタウロスの盾', 2500, 1000, '痛'));
        this.add(c('トドよけの盾', 2600, 1040, 'ト'));
        this.add(c('ガマラよけの盾', 2700, 1080, 'ガ'));
        this.add(c('いたずらよけの盾', 2800, 1120, '戯'));
        this.add(c('にぎりよけの盾', 3600, 1440, '握'));
        this.add(c('オトトの盾', 2000, 800, '鱗'));
        this.add(c('カッパのお皿', 5000, 2000, '投'));
        this.add(c('ゲイズの盾', 4000, 1600, '催'));
        this.add(c('魔法よけの盾', 7500, 3000, '魔よ'));
        this.add(c('不動の盾', 2500, 1000, '不'));
        this.add(c('ざぶとん', 3000, 1200, '受'));
        this.add(c('金食い虫の盾', 6000, 2400, '金'));
        this.add(c('鉄塊の大盾', 4400, 1760, '腹力'));
        this.add(c('ステーキプレート', 4500, 1800, '飢'));
        this.add(c('根性の盾', 4600, 1840, '根'));
        this.add(c('絶好調の盾', 5000, 2000, '満'));
        this.add(c('サトリの盾', 10000, 4000, 'サ'));
        this.add(c('ハラモチの盾', 2000, 800, 'ハラ'));
        this.add(c('めでたい御守', 5500, 2200, '7'));
        this.add(c('お告げの盾', 7000, 2800, '告'));
        this.add(c('山姥の鍋ぶた', 4100, 1640, '呪'));
        this.add(c('使い捨ての盾', 3400, 1360, '劣'));

        this.normalItemList = this.itemList.filter(item => item.status === 'normal');
    }
    
    create(name, kaine, urine, innName = '') {
        return {
            status: 'normal',
            name, kaine, urine, isMiseUri: true,
            in: this.#findIn(innName)
        };
    }
    
    #findIn(name) {
        if (name === '') {
            return null;
        }
        for (const inn of this.inList) {
            if (inn.name === name) {
                return inn;
            }
        }
        throw new Error(`未定義の印：${name}`);
    }

    findItemList(searchItem, isJingi, searchNedan, searchNedanType, searchInList) {
        const result = [];
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

export const tateRepository = new TateRepository();
