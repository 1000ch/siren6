
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
