
const kusaList = [];

function kusaListPush(name, kaine, urine) {
    kusaList.push({
        name: name,
        kaine: kaine,
        urine: urine
    });
}

kusaListPush('雑草', 10, 4);
kusaListPush('薬草', 40, 10);
kusaListPush('弟切草', 80, 30);
kusaListPush('いやし草', 200, 80);
kusaListPush('命の草', 500, 200);
kusaListPush('かぐわし草', 200, 80);
kusaListPush('復活の草', 400, 160);
kusaListPush('胃拡張の種', 200, 80);
kusaListPush('胃縮小の種', 200, 80);
kusaListPush('ドラゴン草', 250, 100);
kusaListPush('高飛び草', 100, 40);
kusaListPush('毒消し草', 600, 240);
kusaListPush('ちからの草', 700, 280);
kusaListPush('毒草', 50, 20);
kusaListPush('混乱草', 70, 25);
kusaListPush('睡眠草', 70, 25);
kusaListPush('暴走の種', 50, 20);
kusaListPush('目つぶし草', 70, 25);
kusaListPush('めぐすり草', 70, 25);
kusaListPush('すばやさ草', 70, 25);
kusaListPush('パワーアップ草', 70, 25);
kusaListPush('無敵草', 400, 160);
kusaListPush('しあわせ草', 1000, 400);
kusaListPush('天使の種', 2000, 800);
kusaListPush('くねくね草', 100, 40);
kusaListPush('不幸の種', 400, 160);
kusaListPush('超不幸の種', 2000, 800);

export function findKusaList(nedan = 0, nedanType) {
    if (nedan === 0) {
        return kusaList;
    }
    return kusaList.filter(kusa => kusa[nedanType] === nedan);
}
