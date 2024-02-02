
const kusaList = [];

function kusaListPush(name, kaine, urine) {
    kusaList.push({
        status: 'normal',
        name: name,
        kaine: kaine,
        urine: urine
    });
    kusaList.push({
        status: 'syukufuku',
        name: name + '🔔',
        kaine: kaine * 2,
        urine: urine * 2
    });
    kusaList.push({
        status: 'noroi',
        name: name + '💀',
        kaine: Math.floor(kaine * 0.87),
        urine: Math.floor(urine * 0.87)
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
kusaList.sort((a, b) => a.kaine - b.kaine);

export function findKusaList(nedan = 0, nedanType) {
    if (nedan === 0) {
        return kusaList.filter(kusa => kusa.status === 'normal');
    }
    return kusaList.filter(kusa => kusa[nedanType] === nedan).sort((a, b) => {
        if (a.status === b.status) {
            return 0;
        }
        else if (a.status === 'noroi') {
            return -1;
        }
        else if (b.status === 'noroi') {
            return 1;
        }
        else if (a.status === 'syukufuku') {
            return 1;
        }
        else if (b.status === 'syukufuku') {
            return -1;
        }
        throw new Error('ここが実行されることはありえない');
    });
}
