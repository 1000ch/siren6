import { findItemList, createFuncItemListPush } from './item'

const kusaList = [];
const itemListPush = createFuncItemListPush(kusaList, true);
itemListPush('雑草', 10, 4);
itemListPush('薬草', 40, 10);
itemListPush('弟切草', 80, 30);
itemListPush('いやし草', 200, 80);
itemListPush('命の草', 500, 200);
itemListPush('かぐわし草', 200, 80);
itemListPush('復活の草', 400, 160);
itemListPush('胃拡張の種', 200, 80);
itemListPush('胃縮小の種', 200, 80);
itemListPush('ドラゴン草', 250, 100);
itemListPush('高飛び草', 100, 40);
itemListPush('毒消し草', 600, 240);
itemListPush('ちからの草', 700, 280);
itemListPush('毒草', 50, 20);
itemListPush('混乱草', 70, 25);
itemListPush('睡眠草', 70, 25);
itemListPush('暴走の種', 50, 20);
itemListPush('目つぶし草', 70, 25);
itemListPush('めぐすり草', 70, 25);
itemListPush('すばやさ草', 70, 25);
itemListPush('パワーアップ草', 70, 25);
itemListPush('無敵草', 400, 160);
itemListPush('しあわせ草', 1000, 400);
itemListPush('天使の種', 2000, 800);
itemListPush('くねくね草', 100, 40);
itemListPush('不幸の種', 400, 160);
itemListPush('超不幸の種', 2000, 800);
kusaList.sort((a, b) => a.kaine - b.kaine);

export function findKusaList(nedan = 0, nedanType) {
    return findItemList(kusaList, nedan, nedanType);
}
