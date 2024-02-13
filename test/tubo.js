import { assert } from 'chai';
import { tuboRepository } from '../src/item/tubo_repository';

describe('壺', function () {
    it('検索 通常 買値', function () {
        const resultList = tuboRepository.findItemList(1100, 'kaine');
        assert.strictEqual(resultList.length, 7);
        assert.strictEqual(resultList[0].name, '保存の壺[3]');
        assert.strictEqual(resultList[1].name, '識別の壺[3]');
        assert.strictEqual(resultList[2].name, '変化の壺[3]');
        assert.strictEqual(resultList[3].name, 'ただの壺[3]');
        assert.strictEqual(resultList[4].name, 'やりすごしの壺[3]');
        assert.strictEqual(resultList[5].name, '底抜けの壺[1]');
        assert.strictEqual(resultList[6].name, '倉庫の壺[1]');
    });
    it('検索 通常 売値', function () {
        const resultList = tuboRepository.findItemList(720, 'urine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, 'おはらいの壺[2]');
        assert.strictEqual(resultList[1].name, '呪いの壺[2]');
    });
    it('検索 呪い 買値', function () {
        const resultList = tuboRepository.findItemList(2001, 'kaine');
        assert.strictEqual(resultList.length, 6);
        assert.strictEqual(resultList[0].name, '背中の壺[3]💀');
        assert.strictEqual(resultList[1].name, 'トドの壺[3]💀');
        assert.strictEqual(resultList[2].name, '水鉄砲の壺[3]💀');
        assert.strictEqual(resultList[3].name, '笑いの壺[3]💀');
        assert.strictEqual(resultList[4].name, '魔物の壺[3]💀');
        assert.strictEqual(resultList[5].name, 'ビックリの壺[3]💀');
    });
    it('検索 呪い 売値', function () {
        const resultList = tuboRepository.findItemList(3584, 'urine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '強化の壺[3]💀');
        assert.strictEqual(resultList[1].name, '弱化の壺[3]💀');
    });
    it('検索 祝福は存在しない 買値', function () {
        const resultList1 = tuboRepository.findItemList(1400, 'kaine');
        const resultList2 = tuboRepository.findItemList(2800, 'kaine');
        assert.notStrictEqual(resultList1.length, 0);
        assert.strictEqual(resultList2.length, 0);
    });
    it('検索 祝福は存在しない 売値', function () {
        const resultList1 = tuboRepository.findItemList(1000, 'urine');
        const resultList2 = tuboRepository.findItemList(2000, 'urine');
        assert.notStrictEqual(resultList1.length, 0);
        assert.strictEqual(resultList2.length, 0);
    });
    it('検索 該当なし 買値', function () {
        const resultList = tuboRepository.findItemList(1234, 'kaine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 該当なし 売値', function () {
        const resultList = tuboRepository.findItemList(1234, 'urine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 一覧', function () {
        const resultList = tuboRepository.findAllItemList();
        assert.strictEqual(resultList.length, 21);
        assert.strictEqual(tuboToString(resultList[0]), '保存の壺/800/320/3～5');
        assert.strictEqual(tuboToString(resultList[1]), '識別の壺/800/320/3～5');
        assert.strictEqual(tuboToString(resultList[2]), '変化の壺/800/320/3～5');
        assert.strictEqual(tuboToString(resultList[3]), 'ただの壺/800/320/3～5');
        assert.strictEqual(tuboToString(resultList[4]), 'やりすごしの壺/800/320/3～5');
        assert.strictEqual(tuboToString(resultList[5]), '換金の壺/1000/400/3～5');
        assert.strictEqual(tuboToString(resultList[6]), '底抜けの壺/1000/400/2～4');
        assert.strictEqual(tuboToString(resultList[7]), '倉庫の壺/1000/400/2～5');
        assert.strictEqual(tuboToString(resultList[8]), '手封じの壺/1000/400/3～5');
        assert.strictEqual(tuboToString(resultList[9]), '割れない壺/1000/400/3～5');
        assert.strictEqual(tuboToString(resultList[10]), 'おはらいの壺/1600/640/2～4');
        assert.strictEqual(tuboToString(resultList[11]), '呪いの壺/1600/640/2～4');
        assert.strictEqual(tuboToString(resultList[12]), '背中の壺/2000/800/3～5');
        assert.strictEqual(tuboToString(resultList[13]), 'トドの壺/2000/800/3～5');
        assert.strictEqual(tuboToString(resultList[14]), '水鉄砲の壺/2000/800/3～5');
        assert.strictEqual(tuboToString(resultList[15]), '笑いの壺/2000/800/2～3');
        assert.strictEqual(tuboToString(resultList[16]), '魔物の壺/2000/800/3～5');
        assert.strictEqual(tuboToString(resultList[17]), 'ビックリの壺/2000/800/3～5');
        assert.strictEqual(tuboToString(resultList[18]), '合成の壺/6000/2400/3～4');
        assert.strictEqual(tuboToString(resultList[19]), '強化の壺/10000/4000/2～3');
        assert.strictEqual(tuboToString(resultList[20]), '弱化の壺/10000/4000/2～3');
    });

    function tuboToString(buto) {
        return `${buto.name}/${buto.kaine}/${buto.urine}/${buto.count}`;
    }
});
