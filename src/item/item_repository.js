
export class ItemRepository {
    canSyukufuku = true;
    canNoroi = true;
    itemList = [];

    create(name, kaine, urine, isMiseUri = true) {
        return {
            status: 'normal',
            name, kaine, urine, isMiseUri
        };
    }

    add(item) {
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

    syukufukuNedan(nedan) {
        return nedan * 2;
    }
    noroiNedan(nedan) {
        return Math.floor(nedan * 0.87);
    }

    findItemList(nedan, searchNedanType) {
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

    findAllItemList(searchItemStatusList = ['normal']) {
        return this.itemList.filter(item => searchItemStatusList.includes(item.status)).sort(this.findAllItemListSortRule);
    }

    findAllItemListSortRule(a, b) {
        if (a.kaine !== b.kaine) {
            return a.kaine - b.kaine;
        }
        else if (a.status === b.status) {
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
    }
}
