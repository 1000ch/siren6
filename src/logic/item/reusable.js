
export function grouping(itemList) {
    const groups = {};
    for (const item of itemList) {
        let name = item.name.replace(/\[\d+\]/, '');
        if (item.status === 'noroi') {
            name += '💀';
        }
        if (!groups[name]) {
            groups[name] = [];
        }
        groups[name].push(item);
    }
    return Object.values(groups);
}
