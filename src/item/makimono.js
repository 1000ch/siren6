
export const makimonoList = [];

// TODO 削除

function itemListPush(name, kaine, urine, needSelect = false) {
    makimonoList.push({
        status: 'normal',
        name, kaine, urine,
        unused: true,
        needSelect
    });
    makimonoList.push({
        status: 'syukufuku',
        name: name + '🔔',
        kaine: kaine * 2,
        urine: urine * 2,
        unused: true,
        needSelect
    });
    makimonoList.push({
        status: 'noroi',
        name: name + '💀',
        kaine: Math.floor(kaine * 0.87),
        urine: Math.floor(urine * 0.87),
        unused: true,
        needSelect
    });
}

itemListPush('混乱の巻物', 300, 120);
itemListPush('バクスイの巻物', 300, 120);
itemListPush('ゾワゾワの巻物', 300, 120);
itemListPush('真空斬りの巻物', 300, 120);
itemListPush('全滅の巻物', 3000, 1200);
itemListPush('おはらいの巻物', 600, 240, true);
itemListPush('識別の巻物', 300, 120, true);
itemListPush('天の恵みの巻物', 400, 160, true);
itemListPush('地の恵みの巻物', 400, 160, true);
itemListPush('メッキの巻物', 400, 160, true);
itemListPush('印増大の巻物', 400, 160, true);
itemListPush('印消しの巻物', 400, 160, true);
itemListPush('銀封印の巻物', 300, 120, true);
itemListPush('銀はがしの巻物', 1000, 400, true);
itemListPush('壺増大の巻物', 1000, 400, true);
itemListPush('吸い出しの巻物', 1000, 400, true);
itemListPush('おにぎりの巻物', 400, 160, true);
itemListPush('呪いの巻物', 1000, 400, true);
itemListPush('あかりの巻物', 600, 240);
itemListPush('迷子の巻物', 600, 240);
itemListPush('罠消しの巻物', 600, 240);
itemListPush('罠の巻物', 1000, 400);
itemListPush('水がれの巻物', 1000, 400);
itemListPush('魔物部屋の巻物', 1000, 400);
itemListPush('大部屋の巻物', 1000, 400);
itemListPush('生物集合の巻物', 300, 120);
itemListPush('道具寄せの巻物', 300, 120);
itemListPush('バクチの巻物', 1000, 400);
itemListPush('くちなしの巻物', 1000, 400);
itemListPush('拾えずの巻物', 1000, 400);
itemListPush('敵加速の巻物', 1000, 400);
itemListPush('困った時の巻物', 300, 120);
itemListPush('脱出の巻物', 1000, 400);
itemListPush('ねだやしの巻物', 10000, 4000);
itemListPush('聖域の巻物', 1000, 400);
itemListPush('白紙の巻物', 1000, 400);
itemListPush('ぬれた巻物', 200, 80);
