import { ItemRepository } from "./item_repository";

class UdewaRepository extends ItemRepository {
    constructor() {
        super();
        this.canSyukufuku = false;
        const c = this.create;
        this.add(c('回復の腕輪', 5000, 2000));
        this.add(c('ちからの腕輪', 2000, 800));
        this.add(c('胃拡張の腕輪', 3500, 1400));
        this.#addKakuteiNoroi(c('胃縮小の腕輪', 3500, 1400, false));
        this.add(c('しあわせの腕輪', 4000, 1600));
        this.add(c('毒消しの腕輪', 6500, 2600));
        this.add(c('混乱よけの腕輪', 4000, 1600));
        this.add(c('睡眠よけの腕輪', 2500, 1000));
        this.add(c('錆よけの腕輪', 5000, 2000));
        this.add(c('呪いよけの腕輪', 3000, 1200));
        this.add(c('弾きよけの腕輪', 3500, 1400));
        this.add(c('遠投の腕輪', 1500, 600));
        this.add(c('ヘタ投げの腕輪', 1500, 600));
        this.add(c('百発百中の腕輪', 15000, 6000));
        this.add(c('ボヨヨンの腕輪', 1500, 600));
        this.add(c('連射の腕輪', 1500, 600));
        this.add(c('諸刃の腕輪', 1500, 600));
        this.add(c('痛恨の腕輪', 1500, 600));
        this.add(c('高飛びの腕輪', 1500, 600));
        this.add(c('爆発の腕輪', 1500, 600));
        this.add(c('透視の腕輪', 5000, 2000));
        this.add(c('気配察知の腕輪', 2500, 1000));
        this.add(c('道具感知の腕輪', 2500, 1000));
        this.add(c('裏道の腕輪', 5000, 2000));
        this.add(c('水グモの腕輪', 3000, 1200));
        this.add(c('浮遊の腕輪', 3000, 1200));
        this.add(c('壁抜けの腕輪', 6500, 2600));
        this.add(c('忍び足の腕輪', 6500, 2600));
        this.add(c('すれちがいの腕輪', 5000, 2000));
        this.#addKakuteiNoroi(c('垂れ流しの腕輪', 1500, 600, false));
        this.#addKakuteiNoroi(c('金垂れ流しの腕輪', 1500, 600, false));
        this.add(c('魔物呼びの腕輪', 3000, 1200));
        this.add(c('罠増しの腕輪', 1500, 600));
        this.add(c('値切りの腕輪', 3500, 1400));
        this.add(c('罠師の腕輪', 7500, 3000));
        this.add(c('鑑定師の腕輪', 7500, 3000));
        this.add(c('大砲強化の腕輪', 2500, 1000));
    }

    #addKakuteiNoroi(item) {
        this.itemList.push(item);
        const noroiItem = {};
        noroiItem.status = 'noroi';
        noroiItem.name = item.name + '💀';
        noroiItem.kaine = this.noroiNedan(item.kaine);
        noroiItem.urine = this.noroiNedan(item.urine);
        noroiItem.isMiseUri = true;
        this.itemList.push(noroiItem);
    }
}

export const udewaRepository = new UdewaRepository();
