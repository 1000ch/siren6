import { assert } from 'chai';
import { findAllItemList, findItemList } from '../src/item/item.js';
import { makimonoList } from '../src/item/makimono.js';

describe('巻物', function () {
    it('検索 通常 買値', function () {
        const resultList = findItemList(makimonoList, 300, 'kaine');
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
        const resultList = findItemList(makimonoList, 1200, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].name, '全滅の巻物');
    });
    it('検索 呪い 買値', function () {
        const resultList = findItemList(makimonoList, 8700, 'kaine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].name, 'ねだやしの巻物💀');
    });
    it('検索 呪い 売値', function () {
        const resultList = findItemList(makimonoList, 208, 'urine');
        assert.strictEqual(resultList.length, 4);
        assert.strictEqual(resultList[0].name, 'おはらいの巻物💀');
        assert.strictEqual(resultList[1].name, 'あかりの巻物💀');
        assert.strictEqual(resultList[2].name, '迷子の巻物💀');
        assert.strictEqual(resultList[3].name, '罠消しの巻物💀');
    });
    it('検索 祝福 買値', function () {
        const resultList = findItemList(makimonoList, 1200, 'kaine');
        assert.strictEqual(resultList.length, 4);
        assert.strictEqual(resultList[0].name, 'おはらいの巻物🔔');
        assert.strictEqual(resultList[1].name, 'あかりの巻物🔔');
        assert.strictEqual(resultList[2].name, '迷子の巻物🔔');
        assert.strictEqual(resultList[3].name, '罠消しの巻物🔔');
    });
    it('検索 祝福 売値', function () {
        const resultList = findItemList(makimonoList, 2400, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].name, '全滅の巻物🔔');
    });
    it('検索 通常＆祝福 買値', function () {
        assert.fail();
    });
    it('検索 通常＆祝福 売値', function () {
        assert.fail();
    });
    it('検索 該当なし 買値', function () {
        assert.fail();
    });
    it('検索 該当なし 売値', function () {
        assert.fail();
    });
    it('検索 一覧', function () {
        assert.fail();
    });
});
