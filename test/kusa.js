import { assert } from 'chai';
import { kusaRepository } from '../src/item/kusa_repository.js';

describe('草', function () {
    it('検索 通常 買値', function () {
        const resultList = kusaRepository.findItemList(50, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '毒草');
        assert.strictEqual(resultList[1].name, '暴走の種');
    });
    it('検索 通常 売値', function () {
        const resultList = kusaRepository.findItemList(25, 'urine');
        assert.strictEqual(resultList.length, 6);
        assert.strictEqual(resultList[0].name, '混乱草');
        assert.strictEqual(resultList[1].name, '睡眠草');
        assert.strictEqual(resultList[2].name, '目つぶし草');
        assert.strictEqual(resultList[3].name, 'めぐすり草');
        assert.strictEqual(resultList[4].name, 'すばやさ草');
        assert.strictEqual(resultList[5].name, 'パワーアップ草');
    });
    it('検索 呪い 買値', function () {
        const resultList = kusaRepository.findItemList(87, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '高飛び草💀');
        assert.strictEqual(resultList[1].name, 'くねくね草💀');
    });
    it('検索 呪い 売値', function () {
        const resultList = kusaRepository.findItemList(87, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].name, 'ドラゴン草💀');
    });
    it('検索 祝福 買値', function () {
        const resultList = kusaRepository.findItemList(4000, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '天使の種🔔');
        assert.strictEqual(resultList[1].name, '超不幸の種🔔');
    });
    it('検索 祝福 売値', function () {
        const resultList = kusaRepository.findItemList(320, 'urine');
        assert.strictEqual(resultList.length, 3);
        assert.strictEqual(resultList[0].name, '復活の草🔔');
        assert.strictEqual(resultList[1].name, '無敵草🔔');
        assert.strictEqual(resultList[2].name, '不幸の種🔔');
    });
    it('検索 通常＆祝福 買値', function () {
        const resultList = kusaRepository.findItemList(1000, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, 'しあわせ草');
        assert.strictEqual(resultList[1].name, '命の草🔔');
    });
    it('検索 通常＆祝福 売値', function () {
        const resultList = kusaRepository.findItemList(160, 'urine');
        assert.strictEqual(resultList.length, 7);
        assert.strictEqual(resultList[0].name, '復活の草');
        assert.strictEqual(resultList[1].name, '無敵草');
        assert.strictEqual(resultList[2].name, '不幸の種');
        assert.strictEqual(resultList[3].name, 'いやし草🔔');
        assert.strictEqual(resultList[4].name, 'かぐわし草🔔');
        assert.strictEqual(resultList[5].name, '胃拡張の種🔔');
        assert.strictEqual(resultList[6].name, '胃縮小の種🔔');
    });
    it('検索 該当なし 買値', function () {
        const resultList = kusaRepository.findItemList(300, 'kaine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 該当なし 売値', function () {
        const resultList = kusaRepository.findItemList(300, 'urine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 一覧', function () {
        const resultList = kusaRepository.findAllItemList();
        assert.strictEqual(resultList.length, 27);
        assert.strictEqual(resultList[0].name, '雑草');
        assert.strictEqual(resultList[1].name, '薬草');
        assert.strictEqual(resultList[2].name, '毒草');
        assert.strictEqual(resultList[3].name, '暴走の種');
        assert.strictEqual(resultList[4].name, '混乱草');
        assert.strictEqual(resultList[5].name, '睡眠草');
        assert.strictEqual(resultList[6].name, '目つぶし草');
        assert.strictEqual(resultList[7].name, 'めぐすり草');
        assert.strictEqual(resultList[8].name, 'すばやさ草');
        assert.strictEqual(resultList[9].name, 'パワーアップ草');
        assert.strictEqual(resultList[10].name, '弟切草');
        assert.strictEqual(resultList[11].name, '高飛び草');
        assert.strictEqual(resultList[12].name, 'くねくね草');
        assert.strictEqual(resultList[13].name, 'いやし草');
        assert.strictEqual(resultList[14].name, 'かぐわし草');
        assert.strictEqual(resultList[15].name, '胃拡張の種');
        assert.strictEqual(resultList[16].name, '胃縮小の種');
        assert.strictEqual(resultList[17].name, 'ドラゴン草');
        assert.strictEqual(resultList[18].name, '復活の草');
        assert.strictEqual(resultList[19].name, '無敵草');
        assert.strictEqual(resultList[20].name, '不幸の種');
        assert.strictEqual(resultList[21].name, '命の草');
        assert.strictEqual(resultList[22].name, '毒消し草');
        assert.strictEqual(resultList[23].name, 'ちからの草');
        assert.strictEqual(resultList[24].name, 'しあわせ草');
        assert.strictEqual(resultList[25].name, '天使の種');
        assert.strictEqual(resultList[26].name, '超不幸の種');
    });
});
