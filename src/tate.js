import { createFuncItemListPush } from './item'

export const tateList = [];

function itemListPush(name, kaine, urine) {
    tateList.push({name, kaine, urine});
}

itemListPush('木甲の盾', 500, 200);
itemListPush('青銅甲の盾', 800, 320);
itemListPush('鉄甲の盾', 1200, 480);
itemListPush('おにおおかみ', 1500, 600);
itemListPush('風魔の盾', 6000, 2400);
itemListPush('螺旋風魔の盾', 15000, 6000);
itemListPush('金の盾', 2500, 1000);
itemListPush('バトルカウンター', 2200, 880);
itemListPush('見切りの盾', 4000, 1600);
itemListPush('ドラゴンシールド', 3000, 1200);
itemListPush('爆発隠の盾', 3300, 1320);
itemListPush('ミノタウロスの盾', 2500, 1000);
itemListPush('トドよけの盾', 2600, 1040);
itemListPush('ガマラよけの盾', 2700, 1080);
itemListPush('いたずらよけの盾', 2800, 1120);
itemListPush('にぎりよけの盾', 3600, 1440);
itemListPush('オトトの盾', 2000, 800);
itemListPush('カッパのお皿', 5000, 2000);
itemListPush('ゲイズの盾', 4000, 1600);
itemListPush('魔法よけの盾', 7500, 3000);
itemListPush('不動の盾', 2500, 1000);
itemListPush('ざぶとん', 3000, 1200);
itemListPush('金食い虫の盾', 6000, 2400);
itemListPush('鉄塊の大盾', 4400, 1760);
itemListPush('ステーキプレート', 4500, 1800);
itemListPush('根性の盾', 4600, 1840);
itemListPush('絶好調の盾', 5000, 2000);
itemListPush('サトリの盾', 10000, 4000);
itemListPush('ハラモチの盾', 2000, 800);
itemListPush('めでたい御守', 5500, 2200);
itemListPush('お告げの盾', 7000, 2800);
itemListPush('山姥の鍋ぶた', 4100, 1640);
itemListPush('使い捨ての盾', 3400, 1360);
tateList.sort((a, b) => a.kaine - b.kaine);
