import { assert } from 'chai';
import { tueRepository } from '../src/logic/item/tue_repository';

describe('杖+', function () {
    it('検索 通常 買値', function () {
        const resultList = tueRepository.nameList;
        assert.strictEqual(resultList.length, 20);
        assert.strictEqual(resultList[0], 'ただの杖');
        assert.strictEqual(resultList[1], 'かなしばりの杖');
        assert.strictEqual(resultList[2], '封印の杖');
        assert.strictEqual(resultList[3], '吹き飛ばしの杖');
        assert.strictEqual(resultList[4], '場所がえの杖');
        assert.strictEqual(resultList[5], '飛びつきの杖');
        assert.strictEqual(resultList[6], '感電の杖');
        assert.strictEqual(resultList[7], '転ばぬ先の杖');
        assert.strictEqual(resultList[8], 'トンネルの杖');
        assert.strictEqual(resultList[9], '土塊の杖');
        assert.strictEqual(resultList[10], '導きの杖');
        assert.strictEqual(resultList[11], '加速の杖');
        assert.strictEqual(resultList[12], '鈍足の杖');
        assert.strictEqual(resultList[13], '痛み分けの杖');
        assert.strictEqual(resultList[14], '一時しのぎの杖');
        assert.strictEqual(resultList[15], 'ガイコツまどうの杖');
        assert.strictEqual(resultList[16], '幸せの杖');
        assert.strictEqual(resultList[17], '不幸の杖');
        assert.strictEqual(resultList[18], '身代わりの杖');
        assert.strictEqual(resultList[19], '桃まんの杖');
    });
    it('検索 通常 買値', function () {
        const resultList = tueRepository.findCountList('かなしばりの杖', 4200, 'kaine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].isNoroi, false);
        assert.strictEqual(resultList[0].count, 37);
    });
    it('検索 通常 売値', function () {
        const resultList = tueRepository.findCountList('トンネルの杖', 3200, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].isNoroi, false);
        assert.strictEqual(resultList[0].count, 73);
    });
    it('検索 呪い 買値', function () {
        const resultList = tueRepository.findCountList('加速の杖', 3915, 'kaine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].isNoroi, true);
        assert.strictEqual(resultList[0].count, 38);
    });
    it('検索 呪い 売値', function () {
        const resultList = tueRepository.findCountList('幸せの杖', 1740, 'urine');
        assert.strictEqual(resultList.length, 1);
        assert.strictEqual(resultList[0].isNoroi, true);
        assert.strictEqual(resultList[0].count, 40);
    });
    it('検索 該当なし 買値', function () {
        const resultList = tueRepository.findCountList('導きの杖', 1234, 'kaine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 該当なし 売値', function () {
        const resultList = tueRepository.findCountList('一時しのぎの杖', 1234, 'urine');
        assert.strictEqual(resultList.length, 0);
    });
});
