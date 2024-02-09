import { ItemRepository } from "./item_repository";

export class KusaRepository extends ItemRepository {
    static init() {
        const c = this.create;
        this.add(c('雑草', 10, 4));
        this.add(c('薬草', 40, 10));
        this.add(c('弟切草', 80, 30));
        this.add(c('いやし草', 200, 80));
        this.add(c('命の草', 500, 200));
        this.add(c('かぐわし草', 200, 80));
        this.add(c('復活の草', 400, 160));
        this.add(c('胃拡張の種', 200, 80));
        this.add(c('胃縮小の種', 200, 80));
        this.add(c('ドラゴン草', 250, 100));
        this.add(c('高飛び草', 100, 40));
        this.add(c('毒消し草', 600, 240));
        this.add(c('ちからの草', 700, 280));
        this.add(c('毒草', 50, 20));
        this.add(c('混乱草', 70, 25));
        this.add(c('睡眠草', 70, 25));
        this.add(c('暴走の種', 50, 20));
        this.add(c('目つぶし草', 70, 25));
        this.add(c('めぐすり草', 70, 25));
        this.add(c('すばやさ草', 70, 25));
        this.add(c('パワーアップ草', 70, 25));
        this.add(c('無敵草', 400, 160));
        this.add(c('しあわせ草', 1000, 400));
        this.add(c('天使の種', 2000, 800));
        this.add(c('くねくね草', 100, 40));
        this.add(c('不幸の種', 400, 160));
        this.add(c('超不幸の種', 2000, 800));
    }
}

KusaRepository.init();
