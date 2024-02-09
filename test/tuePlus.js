import { assert } from 'chai';
import { findTueCountList } from '../src/item/tue.js';

describe('杖+', function () {
    it('検索 通常 買値', function () {
        const resultList = findTueCountList('かなしばりの杖', 4200, 'kaine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].isNoroi, false);
        assert.strictEqual(resultList[0].count, 37);
    });
    it('検索 通常 売値', function () {
        const resultList = findTueCountList('トンネルの杖', 3200, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].isNoroi, false);
        assert.strictEqual(resultList[0].count, 73);
    });
    it('検索 呪い 買値', function () {
        const resultList = findTueCountList('加速の杖', 3915, 'kaine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].isNoroi, true);
        assert.strictEqual(resultList[0].count, 38);
    });
    it('検索 呪い 売値', function () {
        const resultList = findTueCountList('幸せの杖', 1740, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].isNoroi, true);
        assert.strictEqual(resultList[0].count, 40);
    });
    it('検索 該当なし 買値', function () {
        const resultList = findTueCountList('導きの杖', 1234, 'kaine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 該当なし 売値', function () {
        const resultList = findTueCountList('一時しのぎの杖', 1234, 'urine');
        assert.strictEqual(resultList.length, 0);
    });
});
