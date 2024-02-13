
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
