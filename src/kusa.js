import { listPushItem } from './listPushItem'

const kusaList = [];
listPushItem(kusaList, '雑草', 10, 4);
listPushItem(kusaList, '薬草', 40, 10);
listPushItem(kusaList, '弟切草', 80, 30);
listPushItem(kusaList, 'いやし草', 200, 80);
listPushItem(kusaList, '命の草', 500, 200);
listPushItem(kusaList, 'かぐわし草', 200, 80);
listPushItem(kusaList, '復活の草', 400, 160);
listPushItem(kusaList, '胃拡張の種', 200, 80);
listPushItem(kusaList, '胃縮小の種', 200, 80);
listPushItem(kusaList, 'ドラゴン草', 250, 100);
listPushItem(kusaList, '高飛び草', 100, 40);
listPushItem(kusaList, '毒消し草', 600, 240);
listPushItem(kusaList, 'ちからの草', 700, 280);
listPushItem(kusaList, '毒草', 50, 20);
listPushItem(kusaList, '混乱草', 70, 25);
listPushItem(kusaList, '睡眠草', 70, 25);
listPushItem(kusaList, '暴走の種', 50, 20);
listPushItem(kusaList, '目つぶし草', 70, 25);
listPushItem(kusaList, 'めぐすり草', 70, 25);
listPushItem(kusaList, 'すばやさ草', 70, 25);
listPushItem(kusaList, 'パワーアップ草', 70, 25);
listPushItem(kusaList, '無敵草', 400, 160);
listPushItem(kusaList, 'しあわせ草', 1000, 400);
listPushItem(kusaList, '天使の種', 2000, 800);
listPushItem(kusaList, 'くねくね草', 100, 40);
listPushItem(kusaList, '不幸の種', 400, 160);
listPushItem(kusaList, '超不幸の種', 2000, 800);
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
