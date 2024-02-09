
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
            const syukufukuItem = {...item};
            syukufukuItem.status = 'syukufuku';
            syukufukuItem.name = item.name + '🔔';
            syukufukuItem.kaine = item.kaine * 2;
            syukufukuItem.urine = item.urine * 2;
            this.itemList.push(syukufukuItem);
        }
        const noroiItem = {...item};
        noroiItem.status = 'noroi';
        noroiItem.name = item.name + '💀';
        noroiItem.kaine = Math.floor(item.kaine * 0.87);
        noroiItem.urine = Math.floor(item.urine * 0.87);
        this.itemList.push(noroiItem);
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
