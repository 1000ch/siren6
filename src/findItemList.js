
export function findItemList(itemList, nedan = 0, nedanType) {
    if (nedan === 0) {
        return itemList.filter(item => item.status === 'normal');
    }
    return itemList.filter(item => item[nedanType] === nedan).sort((a, b) => {
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
