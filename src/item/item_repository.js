
export class ItemRepository {
    static canSyukufuku = true;
    static itemList = [];

    static create(name, kaine, urine, unused = true) {
        return {
            status: 'normal',
            name: name,
            kaine: kaine,
            urine: urine,
            unused: unused
        }
    }

    static add(item) {
        this.itemList.push(item);
        if (this.canSyukufuku) {
            this.itemList.push({
                status: 'syukufuku',
                name: item.name + '🔔',
                kaine: item.kaine * 2,
                urine: item.urine * 2,
                unused: item.unused
            });
        }
        this.itemList.push({
            status: 'noroi',
            name: item.name + '💀',
            kaine: Math.floor(item.kaine * 0.87),
            urine: Math.floor(item.urine * 0.87),
            unused: item.unused
        });
    }

    static findItemList(nedan, searchNedanType) {
        return this.itemList.filter(item => item[searchNedanType] === nedan).sort((a, b) => {
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

    static findAllItemList() {
        return this.itemList.filter(item => item.status === 'normal').sort((a, b) => a.kaine - b.kaine);
    }
}
