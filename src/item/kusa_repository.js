import { ItemRepository } from "./item_repository";

export class KusaRepository extends ItemRepository {
    static init() {
        this.addItem('雑草', 10, 4);
        this.addItem('薬草', 40, 10);
        this.addItem('弟切草', 80, 30);
        this.addItem('いやし草', 200, 80);
        this.addItem('命の草', 500, 200);
        this.addItem('かぐわし草', 200, 80);
        this.addItem('復活の草', 400, 160);
        this.addItem('胃拡張の種', 200, 80);
        this.addItem('胃縮小の種', 200, 80);
        this.addItem('ドラゴン草', 250, 100);
        this.addItem('高飛び草', 100, 40);
        this.addItem('毒消し草', 600, 240);
        this.addItem('ちからの草', 700, 280);
        this.addItem('毒草', 50, 20);
        this.addItem('混乱草', 70, 25);
        this.addItem('睡眠草', 70, 25);
        this.addItem('暴走の種', 50, 20);
        this.addItem('目つぶし草', 70, 25);
        this.addItem('めぐすり草', 70, 25);
        this.addItem('すばやさ草', 70, 25);
        this.addItem('パワーアップ草', 70, 25);
        this.addItem('無敵草', 400, 160);
        this.addItem('しあわせ草', 1000, 400);
        this.addItem('天使の種', 2000, 800);
        this.addItem('くねくね草', 100, 40);
        this.addItem('不幸の種', 400, 160);
        this.addItem('超不幸の種', 2000, 800);
    }
}

KusaRepository.init();
