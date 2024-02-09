import { assert } from 'chai';
import { findItemList } from '../src/item/item.js';
import { tueList, findAllTueList } from '../src/item/tue';

describe('杖', function () {
    it('検索 通常 買値', function () {
        const resultList = findItemList(tueList, 1500, 'kaine');
        assert.strictEqual(resultList.length, 5);
        assert.strictEqual(resultList[0].name, '痛み分けの杖[5]');
        assert.strictEqual(resultList[1].name, '一時しのぎの杖[5]');
        assert.strictEqual(resultList[2].name, 'ガイコツまどうの杖[5]');
        assert.strictEqual(resultList[3].name, '幸せの杖[5]');
        assert.strictEqual(resultList[4].name, '不幸の杖[5]');
    });
    it('検索 通常 売値', function () {
        const resultList = findItemList(tueList, 1000, 'urine');
        assert.strictEqual(resultList.length, 2);
        assert.strictEqual(resultList[0].name, '身代わりの杖[5]');
        assert.strictEqual(resultList[1].name, '桃まんの杖[5]');
    });
    it('検索 呪い 買値', function () {
        const resultList = findItemList(tueList, 435, 'kaine');
        assert.strictEqual(resultList.length, 8);
        assert.strictEqual(resultList[0].name, 'ただの杖[0]💀');
        assert.strictEqual(resultList[1].name, 'かなしばりの杖[0]💀');
        assert.strictEqual(resultList[2].name, '封印の杖[0]💀');
        assert.strictEqual(resultList[3].name, '吹き飛ばしの杖[0]💀');
        assert.strictEqual(resultList[4].name, '場所がえの杖[0]💀');
        assert.strictEqual(resultList[5].name, '飛びつきの杖[0]💀');
        assert.strictEqual(resultList[6].name, '感電の杖[0]💀');
        assert.strictEqual(resultList[7].name, '転ばぬ先の杖[0]💀');
    });
    it('検索 呪い 売値', function () {
        const resultList = findItemList(tueList, 278, 'urine');
        assert.strictEqual(resultList.length, 13);
        assert.strictEqual(resultList[0].name, 'ただの杖[3]💀');
        assert.strictEqual(resultList[1].name, 'かなしばりの杖[3]💀');
        assert.strictEqual(resultList[2].name, '封印の杖[3]💀');
        assert.strictEqual(resultList[3].name, '吹き飛ばしの杖[3]💀');
        assert.strictEqual(resultList[4].name, '場所がえの杖[3]💀');
        assert.strictEqual(resultList[5].name, '飛びつきの杖[3]💀');
        assert.strictEqual(resultList[6].name, '感電の杖[3]💀');
        assert.strictEqual(resultList[7].name, '転ばぬ先の杖[3]💀');
        assert.strictEqual(resultList[8].name, 'トンネルの杖[1]💀');
        assert.strictEqual(resultList[9].name, '土塊の杖[1]💀');
        assert.strictEqual(resultList[10].name, '導きの杖[1]💀');
        assert.strictEqual(resultList[11].name, '加速の杖[1]💀');
        assert.strictEqual(resultList[12].name, '鈍足の杖[1]💀');
    });
    it('検索 祝福は存在しない 買値', function () {
        const resultList1 = findItemList(tueList, 2000, 'kaine');
        const resultList2 = findItemList(tueList, 4000, 'kaine');
        assert.notStrictEqual(resultList1.length, 0);
        assert.strictEqual(resultList2.length, 0);
    });
    it('検索 祝福は存在しない 売値', function () {
        const resultList1 = findItemList(tueList, 800, 'urine');
        const resultList2 = findItemList(tueList, 1600, 'urine');
        assert.notStrictEqual(resultList1.length, 0);
        assert.strictEqual(resultList2.length, 0);
    });
    it('検索 該当なし 買値', function () {
        const resultList = findItemList(tueList, 1234, 'kaine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 該当なし 売値', function () {
        const resultList = findItemList(tueList, 1234, 'urine');
        assert.strictEqual(resultList.length, 0);
    });
    it('検索 一覧', function () {
        const resultList = findAllTueList();
        assert.strictEqual(resultList.length, 20);
        assert.strictEqual(tueToString(resultList[0]), 'ただの杖/500/200/5～7');
        assert.strictEqual(tueToString(resultList[1]), 'かなしばりの杖/500/200/4～6');
        assert.strictEqual(tueToString(resultList[2]), '封印の杖/500/200/4～6');
        assert.strictEqual(tueToString(resultList[3]), '吹き飛ばしの杖/500/200/5～7');
        assert.strictEqual(tueToString(resultList[4]), '場所がえの杖/500/200/5～7');
        assert.strictEqual(tueToString(resultList[5]), '飛びつきの杖/500/200/5～7');
        assert.strictEqual(tueToString(resultList[6]), '感電の杖/500/200/4～6');
        assert.strictEqual(tueToString(resultList[7]), '転ばぬ先の杖/500/200/5～7');
        assert.strictEqual(tueToString(resultList[8]), 'トンネルの杖/700/280/4～6');
        assert.strictEqual(tueToString(resultList[9]), '土塊の杖/700/280/4～6');
        assert.strictEqual(tueToString(resultList[10]), '導きの杖/700/280/2～4');
        assert.strictEqual(tueToString(resultList[11]), '加速の杖/700/280/4～6');
        assert.strictEqual(tueToString(resultList[12]), '鈍足の杖/700/280/4～6');
        assert.strictEqual(tueToString(resultList[13]), '痛み分けの杖/1000/400/5～7');
        assert.strictEqual(tueToString(resultList[14]), '一時しのぎの杖/1000/400/4～6');
        assert.strictEqual(tueToString(resultList[15]), 'ガイコツまどうの杖/1000/400/5～7');
        assert.strictEqual(tueToString(resultList[16]), '幸せの杖/1000/400/4～6');
        assert.strictEqual(tueToString(resultList[17]), '不幸の杖/1000/400/4～6');
        assert.strictEqual(tueToString(resultList[18]), '身代わりの杖/2000/800/4～6');
        assert.strictEqual(tueToString(resultList[19]), '桃まんの杖/2000/800/4～6');
    });
});

function tueToString(tue) {
    return `${tue.name}/${tue.kaine}/${tue.urine}/${tue.count}`;
}
