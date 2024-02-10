import { ItemRepository } from "./item_repository";

export class BukiRepository extends ItemRepository {
    static init() {
        this.canSyukufuku = false;
        this.canNoroi = false;
        const c = this.create;
        this.add(c('木刀', 250, 100));
        this.add(c('青銅の太刀', 550, 220));
        this.add(c('カタナ', 1000, 400));
        this.add(c('どうたぬき', 2200, 880));
        this.add(c('剛剣マンジカブラ', 5500, 2200));
        this.add(c('火迅風魔刀', 16000, 6400));
        this.add(c('秘剣カブラステギ', 25000, 10000));
        this.add(c('金の剣', 3000, 1200));
        this.add(c('妖刀かまいたち', 8400, 3360));
        this.add(c('ミノタウロスの斧', 6500, 2600));
        this.add(c('連撃刀', 10000, 4000));
        this.add(c('水斬りの剣', 3300, 1320));
        this.add(c('原始の斧', 5000, 2000));
        this.add(c('ドラゴンキラー', 4000, 1600));
        this.add(c('三日月刀', 3500, 1400));
        this.add(c('空の刃', 3700, 1480));
        this.add(c('成仏のカマ', 4200, 1680));
        this.add(c('ドレインバスター', 3600, 1440));
        this.add(c('一ツ目殺し', 3200, 1280));
        this.add(c('斬鉄剣', 3100, 1240));
        this.add(c('巨大ハリセン', 4200, 1680));
        this.add(c('回復の剣', 4300, 1720));
        this.add(c('桃まん棒', 4500, 1800));
        this.add(c('金食い虫こん棒', 6000, 2400));
        this.add(c('鉄塊の大剣', 5300, 2120));
        this.add(c('ステーキナイフ', 5400, 2160));
        this.add(c('スパークソード', 5500, 2200));
        this.add(c('四ツ叉', 5600, 2240));
        this.add(c('めでたい熊手', 5700, 2280));
        this.add(c('つるはし', 1000, 400));
        this.add(c('黄金のつるはし', 18000, 7200));
        this.add(c('木づち', 1000, 400));
        this.add(c('最強ハンマー', 15000, 6000));
        this.add(c('罠探りの棒', 4400, 1760));
        this.add(c('かつおぶし', 1800, 720));
        this.add(c('山姥包丁', 4000, 1600));
        this.add(c('使い捨て刀', 3000, 1200));
    }
}

BukiRepository.init();
