import { assert } from 'chai';
import { MakimonoRepository } from '../src/item/makimono_repository';

describe('巻物', function () {
    it('検索 通常 買値', function () {
        const resultList = MakimonoRepository.findItemList(300, 'kaine');
        assert.strictEqual(resultList.length, 9);
        assert.strictEqual(resultList[0].name, '混乱の巻物');
        assert.strictEqual(resultList[1].name, 'バクスイの巻物');
        assert.strictEqual(resultList[2].name, 'ゾワゾワの巻物');
        assert.strictEqual(resultList[3].name, '真空斬りの巻物');
        assert.strictEqual(resultList[4].name, '識別の巻物');
        assert.strictEqual(resultList[5].name, '銀封印の巻物');
        assert.strictEqual(resultList[6].name, '生物集合の巻物');
        assert.strictEqual(resultList[7].name, '道具寄せの巻物');
        assert.strictEqual(resultList[8].name, '困った時の巻物');
    });
    it('検索 通常 売値', function () {
        const resultList = MakimonoRepository.findItemList(1200, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].name, '全滅の巻物');
    });
    it('検索 呪い 買値', function () {
        const resultList = MakimonoRepository.findItemList(8700, 'kaine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].name, 'ねだやしの巻物💀');
    });
    it('検索 呪い 売値', function () {
        const resultList = MakimonoRepository.findItemList(208, 'urine');
        assert.strictEqual(resultList.length, 4);
        assert.strictEqual(resultList[0].name, 'おはらいの巻物💀');
        assert.strictEqual(resultList[1].name, 'あかりの巻物💀');
        assert.strictEqual(resultList[2].name, '迷子の巻物💀');
        assert.strictEqual(resultList[3].name, '罠消しの巻物💀');
    });
    it('検索 祝福 買値', function () {
        const resultList = MakimonoRepository.findItemList(1200, 'kaine');
        assert.strictEqual(resultList.length, 4);
        assert.strictEqual(resultList[0].name, 'おはらいの巻物🔔');
        assert.strictEqual(resultList[1].name, 'あかりの巻物🔔');
        assert.strictEqual(resultList[2].name, '迷子の巻物🔔');
        assert.strictEqual(resultList[3].name, '罠消しの巻物🔔');
    });
    it('検索 祝福 売値', function () {
        const resultList = MakimonoRepository.findItemList(2400, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].name, '全滅の巻物🔔');
    });
    it('検索 通常＆祝福 買値', function () {
        const resultList = MakimonoRepository.findItemList(400, 'kaine');
        assert.strictEqual(resultList.length, 7);
        assert.strictEqual(resultList[0].name, '天の恵みの巻物');
        assert.strictEqual(resultList[1].name, '地の恵みの巻物');
        assert.strictEqual(resultList[2].name, 'メッキの巻物');
        assert.strictEqual(resultList[3].name, '印増大の巻物');
        assert.strictEqual(resultList[4].name, '印消しの巻物');
        assert.strictEqual(resultList[5].name, 'おにぎりの巻物');
        assert.strictEqual(resultList[6].name, 'ぬれた巻物🔔');
    });
    it('検索 通常＆祝福 売値', function () {
        const resultList = MakimonoRepository.findItemList(240, 'urine');
        assert.strictEqual(resultList.length, 13);
        assert.strictEqual(resultList[0].name, 'おはらいの巻物');
        assert.strictEqual(resultList[1].name, 'あかりの巻物');
        assert.strictEqual(resultList[2].name, '迷子の巻物');
        assert.strictEqual(resultList[3].name, '罠消しの巻物');
        assert.strictEqual(resultList[4].name, '混乱の巻物🔔');
        assert.strictEqual(resultList[5].name, 'バクスイの巻物🔔');
        assert.strictEqual(resultList[6].name, 'ゾワゾワの巻物🔔');
        assert.strictEqual(resultList[7].name, '真空斬りの巻物🔔');
        assert.strictEqual(resultList[8].name, '識別の巻物🔔');
        assert.strictEqual(resultList[9].name, '銀封印の巻物🔔');
        assert.strictEqual(resultList[10].name, '生物集合の巻物🔔');
        assert.strictEqual(resultList[11].name, '道具寄せの巻物🔔');
        assert.strictEqual(resultList[12].name, '困った時の巻物🔔');
    });
    it('検索 該当なし 買値', function () {
        const resultList = MakimonoRepository.findItemList(1234, 'kaine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 該当なし 売値', function () {
        const resultList = MakimonoRepository.findItemList(1234, 'urine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 一覧', function () {
        const resultList = MakimonoRepository.findAllItemList();
        assert.strictEqual(resultList.length, 37);
        assert.strictEqual(resultList[0].name, 'ぬれた巻物');
        assert.strictEqual(resultList[1].name, '混乱の巻物');
        assert.strictEqual(resultList[2].name, 'バクスイの巻物');
        assert.strictEqual(resultList[3].name, 'ゾワゾワの巻物');
        assert.strictEqual(resultList[4].name, '真空斬りの巻物');
        assert.strictEqual(resultList[5].name, '識別の巻物');
        assert.strictEqual(resultList[6].name, '銀封印の巻物');
        assert.strictEqual(resultList[7].name, '生物集合の巻物');
        assert.strictEqual(resultList[8].name, '道具寄せの巻物');
        assert.strictEqual(resultList[9].name, '困った時の巻物');
        assert.strictEqual(resultList[10].name, '天の恵みの巻物');
        assert.strictEqual(resultList[11].name, '地の恵みの巻物');
        assert.strictEqual(resultList[12].name, 'メッキの巻物');
        assert.strictEqual(resultList[13].name, '印増大の巻物');
        assert.strictEqual(resultList[14].name, '印消しの巻物');
        assert.strictEqual(resultList[15].name, 'おにぎりの巻物');
        assert.strictEqual(resultList[16].name, 'おはらいの巻物');
        assert.strictEqual(resultList[17].name, 'あかりの巻物');
        assert.strictEqual(resultList[18].name, '迷子の巻物');
        assert.strictEqual(resultList[19].name, '罠消しの巻物');
        assert.strictEqual(resultList[20].name, '銀はがしの巻物');
        assert.strictEqual(resultList[21].name, '壺増大の巻物');
        assert.strictEqual(resultList[22].name, '吸い出しの巻物');
        assert.strictEqual(resultList[23].name, '呪いの巻物');
        assert.strictEqual(resultList[24].name, '罠の巻物');
        assert.strictEqual(resultList[25].name, '水がれの巻物');
        assert.strictEqual(resultList[26].name, '魔物部屋の巻物');
        assert.strictEqual(resultList[27].name, '大部屋の巻物');
        assert.strictEqual(resultList[28].name, 'バクチの巻物');
        assert.strictEqual(resultList[29].name, 'くちなしの巻物');
        assert.strictEqual(resultList[30].name, '拾えずの巻物');
        assert.strictEqual(resultList[31].name, '敵加速の巻物');
        assert.strictEqual(resultList[32].name, '脱出の巻物');
        assert.strictEqual(resultList[33].name, '聖域の巻物');
        assert.strictEqual(resultList[34].name, '白紙の巻物');
        assert.strictEqual(resultList[35].name, '全滅の巻物');
        assert.strictEqual(resultList[36].name, 'ねだやしの巻物');
    });
});
