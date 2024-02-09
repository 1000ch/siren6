
// TODO 削除

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

export function grouping(itemList) {
    const groups = {};
    for (const item of itemList.filter(item => item.status === 'normal')) {
        const name = item.name.slice(0, -3);
        if (!groups[name]) {
            groups[name] = [];
        }
        groups[name].push(item);
    }
    return Object.values(groups);
}

export function findItemList(itemList, nedan, searchNedanType) {
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

export function findAllItemList(itemList) {
    return itemList.filter(item => item.status === 'normal').sort((a, b) => a.kaine - b.kaine);
}

export function findAllItemGroupList(itemGroupList) {
    return itemGroupList.sort((a, b) => a[0].kaine - b[0].kaine).map(group => {
        let minCount = 0;
        for (const item of group) {
            if (item.unused) {
                minCount = item.name.at(-2);
                break;
            }
        }
        return {
            name: group[0].name.slice(0, -3),
            kaine: group[0].kaine,
            urine: group[0].urine,
            count: `${minCount}～${group.at(-1).name.at(-2)}`,
        };
    });
}
