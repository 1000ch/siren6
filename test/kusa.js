import { assert } from 'chai';
import { findAllItemList, findItemList } from '../src/item/item.js';
import { kusaList } from '../src/item/kusa.js';

describe('草', function () {
    it('検索 通常 買値', function () {
        const resultList = findItemList(kusaList, 50, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '毒草');
        assert.strictEqual(resultList[1].name, '暴走の種');
    });
    it('検索 通常 売値', function () {
        const resultList = findItemList(kusaList, 25, 'urine');
        assert.strictEqual(resultList.length, 6);
        assert.strictEqual(resultList[0].name, '混乱草');
        assert.strictEqual(resultList[1].name, '睡眠草');
        assert.strictEqual(resultList[2].name, '目つぶし草');
        assert.strictEqual(resultList[3].name, 'めぐすり草');
        assert.strictEqual(resultList[4].name, 'すばやさ草');
        assert.strictEqual(resultList[5].name, 'パワーアップ草');
    });
    it('検索 呪い 買値', function () {
        const resultList = findItemList(kusaList, 87, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '高飛び草💀');
        assert.strictEqual(resultList[1].name, 'くねくね草💀');
    });
    it('検索 呪い 売値', function () {
        const resultList = findItemList(kusaList, 87, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].name, 'ドラゴン草💀');
    });
    it('検索 祝福 買値', function () {
        const resultList = findItemList(kusaList, 4000, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '天使の種🔔');
        assert.strictEqual(resultList[1].name, '超不幸の種🔔');
    });
    it('検索 祝福 売値', function () {
        const resultList = findItemList(kusaList, 320, 'urine');
        assert.strictEqual(resultList.length, 3);
        assert.strictEqual(resultList[0].name, '復活の草🔔');
        assert.strictEqual(resultList[1].name, '無敵草🔔');
        assert.strictEqual(resultList[2].name, '不幸の種🔔');
    });
    it('検索 通常＆祝福 買値', function () {
        const resultList = findItemList(kusaList, 1000, 'kaine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, 'しあわせ草');
        assert.strictEqual(resultList[1].name, '命の草🔔');
    });
    it('検索 通常＆祝福 売値', function () {
        const resultList = findItemList(kusaList, 160, 'urine');
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
        const resultList = findItemList(kusaList, 300, 'kaine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 該当なし 売値', function () {
        const resultList = findItemList(kusaList, 300, 'urine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 一覧', function () {
        assert.fail();
    });
});
