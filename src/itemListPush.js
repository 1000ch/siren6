
export function createFuncItemListPush(list, canSyukufuku) {
    return function(name, kaine, urine, isDefault = false) {
        list.push({
            status: 'normal',
            name: name,
            kaine: kaine,
            urine: urine
        });
        if (isDefault) {
            list.at(-1).default = true;
        }
        if (canSyukufuku) {
            list.push({
                status: 'syukufuku',
                name: name + '🔔',
                kaine: kaine * 2,
                urine: urine * 2
            });
        }
        list.push({
            status: 'noroi',
            name: name + '💀',
            kaine: Math.floor(kaine * 0.87),
            urine: Math.floor(urine * 0.87)
        });
    }
}
