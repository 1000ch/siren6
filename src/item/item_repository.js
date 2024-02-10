
export class ItemRepository {
    static canSyukufuku = true;
    static canNoroi = true;
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
            syukufukuItem.kaine = this.syukufukuNedan(item.kaine);
            syukufukuItem.urine = this.syukufukuNedan(item.urine);
            this.itemList.push(syukufukuItem);
        }
        if (this.canNoroi) {
            const noroiItem = {...item};
            noroiItem.status = 'noroi';
            noroiItem.name = item.name + '💀';
            noroiItem.kaine = this.noroiNedan(item.kaine);
            noroiItem.urine = this.noroiNedan(item.urine);
            this.itemList.push(noroiItem);
        }
    }

    static syukufukuNedan(nedan) {
        return nedan * 2;
    }
    static noroiNedan(nedan) {
        return Math.floor(nedan * 0.87);
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
