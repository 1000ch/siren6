import { assert } from 'chai';
import { findAllItemList, findItemList } from '../src/item/item.js';
import { kusaList } from '../src/item/kusa.js';

describe('草', function () {
    it('検索 通常 買値', function () {
        const resultList = findItemList(kusaList, 50, 'kaine');
        assert.strictEqual(resultList[0].name, '毒草');
        assert.strictEqual(resultList[1].name, '暴走の種');
    });
    it('検索 通常 売値', function () {
        assert.fail();
    });
    it('検索 呪い 買値', function () {
        assert.fail();
    });
    it('検索 呪い 売値', function () {
        assert.fail();
    });
    it('検索 祝福 買値', function () {
        assert.fail();
    });
    it('検索 祝福 売値', function () {
        assert.fail();
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
