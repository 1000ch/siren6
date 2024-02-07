
export function findItemList(itemList, nedan, searchNedanType) {
    if (searchNedanType === 'all') {
        return itemList.filter(item => item.status === 'normal').sort((a, b) => a.kaine - b.kaine);
    }
    else {
        return itemList.filter(item => item[searchNedanType] === nedan).sort((a, b) => {
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
}

export function createFuncItemListPush(list, canSyukufuku) {
    return function(name, kaine, urine, unused = true) {
        list.push({
            status: 'normal',
            name: name,
            kaine: kaine,
            urine: urine,
            unused: unused
        });
        if (canSyukufuku) {
            list.push({
                status: 'syukufuku',
                name: name + '🔔',
                kaine: kaine * 2,
                urine: urine * 2,
                unused: unused
            });
        }
        list.push({
            status: 'noroi',
            name: name + '💀',
            kaine: Math.floor(kaine * 0.87),
            urine: Math.floor(urine * 0.87),
            unused: unused
        });
    }
}

