import { assert } from 'chai';
import { bukiList } from '../src/item/buki.js';

describe('武器', function () {
    it('検索 一覧', function () {
        const resultList = bukiList;
        assert.strictEqual(resultList.length, 37);
        assert.strictEqual(resultList[0].name, '木刀');
        assert.strictEqual(resultList[1].name, '青銅の太刀');
        assert.strictEqual(resultList[2].name, 'カタナ');
        assert.strictEqual(resultList[3].name, 'つるはし');
        assert.strictEqual(resultList[4].name, '木づち');
        assert.strictEqual(resultList[5].name, 'かつおぶし');
        assert.strictEqual(resultList[6].name, 'どうたぬき');
        assert.strictEqual(resultList[7].name, '金の剣');
        assert.strictEqual(resultList[8].name, '使い捨て刀');
        assert.strictEqual(resultList[9].name, '斬鉄剣');
        assert.strictEqual(resultList[10].name, '一ツ目殺し');
        assert.strictEqual(resultList[11].name, '水斬りの剣');
        assert.strictEqual(resultList[12].name, '三日月刀');
        assert.strictEqual(resultList[13].name, 'ドレインバスター');
        assert.strictEqual(resultList[14].name, '空の刃');
        assert.strictEqual(resultList[15].name, 'ドラゴンキラー');
        assert.strictEqual(resultList[16].name, '山姥包丁');
        assert.strictEqual(resultList[17].name, '成仏のカマ');
        assert.strictEqual(resultList[18].name, '巨大ハリセン');
        assert.strictEqual(resultList[19].name, '回復の剣');
        assert.strictEqual(resultList[20].name, '罠探りの棒');
        assert.strictEqual(resultList[21].name, '桃まん棒');
        assert.strictEqual(resultList[22].name, '原始の斧');
        assert.strictEqual(resultList[23].name, '鉄塊の大剣');
        assert.strictEqual(resultList[24].name, 'ステーキナイフ');
        assert.strictEqual(resultList[25].name, '剛剣マンジカブラ');
        assert.strictEqual(resultList[26].name, 'スパークソード');
        assert.strictEqual(resultList[27].name, '四ツ叉');
        assert.strictEqual(resultList[28].name, 'めでたい熊手');
        assert.strictEqual(resultList[29].name, '金食い虫こん棒');
        assert.strictEqual(resultList[30].name, 'ミノタウロスの斧');
        assert.strictEqual(resultList[31].name, '妖刀かまいたち');
        assert.strictEqual(resultList[32].name, '連撃刀');
        assert.strictEqual(resultList[33].name, '最強ハンマー');
        assert.strictEqual(resultList[34].name, '火迅風魔刀');
        assert.strictEqual(resultList[35].name, '黄金のつるはし');
        assert.strictEqual(resultList[36].name, '秘剣カブラステギ');
    });
});