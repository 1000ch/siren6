import { assert } from 'chai';
import { udewaRepository } from '../src/item/udewa_repository';

describe('腕輪', function () {
    it('検索 通常 買値', function () {
        const resultList = udewaRepository.findItemList(7500, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '罠師の腕輪');
        assert.strictEqual(resultList[1].name, '鑑定師の腕輪');
    });
    it('検索 通常 売値', function () {
        const resultList = udewaRepository.findItemList(1200, 'urine');
        assert.strictEqual(resultList.length, 4);
        assert.strictEqual(resultList[0].name, '呪いよけの腕輪');
        assert.strictEqual(resultList[1].name, '水グモの腕輪');
        assert.strictEqual(resultList[2].name, '浮遊の腕輪');
        assert.strictEqual(resultList[3].name, '魔物呼びの腕輪');
    });
    it('検索 呪い 買値', function () {
        const resultList = udewaRepository.findItemList(2175, 'kaine');
        assert.strictEqual(resultList.length, 4);
        assert.strictEqual(resultList[0].name, '睡眠よけの腕輪💀');
        assert.strictEqual(resultList[1].name, '気配察知の腕輪💀');
        assert.strictEqual(resultList[2].name, '道具感知の腕輪💀');
        assert.strictEqual(resultList[3].name, '大砲強化の腕輪💀');
    });
    it('検索 呪い 売値', function () {
        const resultList = udewaRepository.findItemList(1218, 'urine');
        assert.strictEqual(resultList.length, 4);
        assert.strictEqual(resultList[0].name, '胃拡張の腕輪💀');
        assert.strictEqual(resultList[1].name, '胃縮小の腕輪💀');
        assert.strictEqual(resultList[2].name, '弾きよけの腕輪💀');
        assert.strictEqual(resultList[3].name, '値切りの腕輪💀');
    });
    it('検索 祝福は存在しない 買値', function () {
        const resultList1 = udewaRepository.findItemList(4000, 'kaine');
        const resultList2 = udewaRepository.findItemList(8000, 'kaine');
        assert.notStrictEqual(resultList1.length, 0);
        assert.strictEqual(resultList2.length, 0);
    });
    it('検索 祝福は存在しない 売値', function () {
        const resultList1 = udewaRepository.findItemList(6000, 'urine');
        const resultList2 = udewaRepository.findItemList(12000, 'urine');
        assert.notStrictEqual(resultList1.length, 0);
        assert.strictEqual(resultList2.length, 0);
    });
    it('検索 該当なし 買値', function () {
        const resultList = udewaRepository.findItemList(1234, 'kaine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 該当なし 売値', function () {
        const resultList = udewaRepository.findItemList(1234, 'urine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 一覧', function () {
        const resultList = udewaRepository.findAllItemList();
        assert.strictEqual(resultList.length, 37);
        assert.strictEqual(resultList[0].name, '遠投の腕輪');
        assert.strictEqual(resultList[1].name, 'ヘタ投げの腕輪');
        assert.strictEqual(resultList[2].name, 'ボヨヨンの腕輪');
        assert.strictEqual(resultList[3].name, '連射の腕輪');
        assert.strictEqual(resultList[4].name, '諸刃の腕輪');
        assert.strictEqual(resultList[5].name, '痛恨の腕輪');
        assert.strictEqual(resultList[6].name, '高飛びの腕輪');
        assert.strictEqual(resultList[7].name, '爆発の腕輪');
        assert.strictEqual(resultList[8].name, '垂れ流しの腕輪');
        assert.strictEqual(resultList[9].name, '金垂れ流しの腕輪');
        assert.strictEqual(resultList[10].name, '罠増しの腕輪');
        assert.strictEqual(resultList[11].name, 'ちからの腕輪');
        assert.strictEqual(resultList[12].name, '睡眠よけの腕輪');
        assert.strictEqual(resultList[13].name, '気配察知の腕輪');
        assert.strictEqual(resultList[14].name, '道具感知の腕輪');
        assert.strictEqual(resultList[15].name, '大砲強化の腕輪');
        assert.strictEqual(resultList[16].name, '呪いよけの腕輪');
        assert.strictEqual(resultList[17].name, '水グモの腕輪');
        assert.strictEqual(resultList[18].name, '浮遊の腕輪');
        assert.strictEqual(resultList[19].name, '魔物呼びの腕輪');
        assert.strictEqual(resultList[20].name, '胃拡張の腕輪');
        assert.strictEqual(resultList[21].name, '胃縮小の腕輪');
        assert.strictEqual(resultList[22].name, '弾きよけの腕輪');
        assert.strictEqual(resultList[23].name, '値切りの腕輪');
        assert.strictEqual(resultList[24].name, 'しあわせの腕輪');
        assert.strictEqual(resultList[25].name, '混乱よけの腕輪');
        assert.strictEqual(resultList[26].name, '回復の腕輪');
        assert.strictEqual(resultList[27].name, '錆よけの腕輪');
        assert.strictEqual(resultList[28].name, '透視の腕輪');
        assert.strictEqual(resultList[29].name, '裏道の腕輪');
        assert.strictEqual(resultList[30].name, 'すれちがいの腕輪');
        assert.strictEqual(resultList[31].name, '毒消しの腕輪');
        assert.strictEqual(resultList[32].name, '壁抜けの腕輪');
        assert.strictEqual(resultList[33].name, '忍び足の腕輪');
        assert.strictEqual(resultList[34].name, '罠師の腕輪');
        assert.strictEqual(resultList[35].name, '鑑定師の腕輪');
        assert.strictEqual(resultList[36].name, '百発百中の腕輪');
    });
});
