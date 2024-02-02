
export const bukiList = [];

function itemListPush(name, kaine, urine) {
    bukiList.push({name, kaine, urine, unused: true});
}

itemListPush('木刀', 250, 100);
itemListPush('青銅の太刀', 550, 220);
itemListPush('カタナ', 1000, 400);
itemListPush('どうたぬき', 2200, 880);
itemListPush('剛剣マンジカブラ', 5500, 2200);
itemListPush('火迅風魔刀', 16000, 6400);
itemListPush('秘剣カブラステギ', 25000, 10000);
itemListPush('金の剣', 3000, 1200);
itemListPush('妖刀かまいたち', 8400, 3360);
itemListPush('ミノタウロスの斧', 6500, 2600);
itemListPush('連撃刀', 10000, 4000);
itemListPush('水斬りの剣', 3300, 1320);
itemListPush('原始の斧', 5000, 2000);
itemListPush('ドラゴンキラー', 4000, 1600);
itemListPush('三日月刀', 3500, 1400);
itemListPush('空の刃', 3700, 1480);
itemListPush('成仏のカマ', 4200, 1680);
itemListPush('ドレインバスター', 3600, 1440);
itemListPush('一ツ目殺し', 3200, 1280);
itemListPush('斬鉄剣', 3100, 1240);
itemListPush('巨大ハリセン', 4200, 1680);
itemListPush('回復の剣', 4300, 1720);
itemListPush('桃まん棒', 4500, 1800);
itemListPush('金食い虫こん棒', 6000, 2400);
itemListPush('鉄塊の大剣', 5300, 2120);
itemListPush('ステーキナイフ', 5400, 2160);
itemListPush('スパークソード', 5500, 2200);
itemListPush('四ツ叉', 5600, 2240);
itemListPush('めでたい熊手', 5700, 2280);
itemListPush('つるはし', 1000, 400);
itemListPush('黄金のつるはし', 18000, 7200);
itemListPush('木づち', 1000, 400);
itemListPush('最強ハンマー', 15000, 6000);
itemListPush('罠探りの棒', 4400, 1760);
itemListPush('かつおぶし', 1800, 720);
itemListPush('山姥包丁', 4000, 1600);
itemListPush('使い捨て刀', 3000, 1200);
bukiList.sort((a, b) => a.kaine - b.kaine);
