import { ItemRepository } from "./item_repository";

class TateRepository extends ItemRepository {
    constructor() {
        super();
        this.canSyukufuku = false;
        this.canNoroi = false;
        const c = this.create;
        this.add(c('木甲の盾', 500, 200));
        this.add(c('青銅甲の盾', 800, 320));
        this.add(c('鉄甲の盾', 1200, 480));
        this.add(c('おにおおかみ', 1500, 600));
        this.add(c('風魔の盾', 6000, 2400));
        this.add(c('螺旋風魔の盾', 15000, 6000));
        this.add(c('金の盾', 2500, 1000));
        this.add(c('バトルカウンター', 2200, 880));
        this.add(c('見切りの盾', 4000, 1600));
        this.add(c('ドラゴンシールド', 3000, 1200));
        this.add(c('爆発隠の盾', 3300, 1320));
        this.add(c('ミノタウロスの盾', 2500, 1000));
        this.add(c('トドよけの盾', 2600, 1040));
        this.add(c('ガマラよけの盾', 2700, 1080));
        this.add(c('いたずらよけの盾', 2800, 1120));
        this.add(c('にぎりよけの盾', 3600, 1440));
        this.add(c('オトトの盾', 2000, 800));
        this.add(c('カッパのお皿', 5000, 2000));
        this.add(c('ゲイズの盾', 4000, 1600));
        this.add(c('魔法よけの盾', 7500, 3000));
        this.add(c('不動の盾', 2500, 1000));
        this.add(c('ざぶとん', 3000, 1200));
        this.add(c('金食い虫の盾', 6000, 2400));
        this.add(c('鉄塊の大盾', 4400, 1760));
        this.add(c('ステーキプレート', 4500, 1800));
        this.add(c('根性の盾', 4600, 1840));
        this.add(c('絶好調の盾', 5000, 2000));
        this.add(c('サトリの盾', 10000, 4000));
        this.add(c('ハラモチの盾', 2000, 800));
        this.add(c('めでたい御守', 5500, 2200));
        this.add(c('お告げの盾', 7000, 2800));
        this.add(c('山姥の鍋ぶた', 4100, 1640));
        this.add(c('使い捨ての盾', 3400, 1360));
    }
}

export const tateRepository = new TateRepository();
