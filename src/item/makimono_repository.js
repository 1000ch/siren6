import { ItemRepository } from "./item_repository";

class MakimonoRepository extends ItemRepository {
    create(name, kaine, urine, needSelect = false) {
        return {
            status: 'normal',
            name, kaine, urine,
            isMiseUri: true,
            needSelect
        };
    }

    constructor() {
        super();
        const c = this.create;
        this.add(c('混乱の巻物', 300, 120));
        this.add(c('バクスイの巻物', 300, 120));
        this.add(c('ゾワゾワの巻物', 300, 120));
        this.add(c('真空斬りの巻物', 300, 120));
        this.add(c('全滅の巻物', 3000, 1200));
        this.add(c('おはらいの巻物', 600, 240, true));
        this.add(c('識別の巻物', 300, 120, true));
        this.add(c('天の恵みの巻物', 400, 160, true));
        this.add(c('地の恵みの巻物', 400, 160, true));
        this.add(c('メッキの巻物', 400, 160, true));
        this.add(c('印増大の巻物', 400, 160, true));
        this.add(c('印消しの巻物', 400, 160, true));
        this.add(c('銀封印の巻物', 300, 120, true));
        this.add(c('銀はがしの巻物', 1000, 400, true));
        this.add(c('壺増大の巻物', 1000, 400, true));
        this.add(c('吸い出しの巻物', 1000, 400, true));
        this.add(c('おにぎりの巻物', 400, 160, true));
        this.add(c('呪いの巻物', 1000, 400, true));
        this.add(c('あかりの巻物', 600, 240));
        this.add(c('迷子の巻物', 600, 240));
        this.add(c('罠消しの巻物', 600, 240));
        this.add(c('罠の巻物', 1000, 400));
        this.add(c('水がれの巻物', 1000, 400));
        this.add(c('魔物部屋の巻物', 1000, 400));
        this.add(c('大部屋の巻物', 1000, 400));
        this.add(c('生物集合の巻物', 300, 120));
        this.add(c('道具寄せの巻物', 300, 120));
        this.add(c('バクチの巻物', 1000, 400));
        this.add(c('くちなしの巻物', 1000, 400));
        this.add(c('拾えずの巻物', 1000, 400));
        this.add(c('敵加速の巻物', 1000, 400));
        this.add(c('困った時の巻物', 300, 120));
        this.add(c('脱出の巻物', 1000, 400));
        this.add(c('ねだやしの巻物', 10000, 4000));
        this.add(c('聖域の巻物', 1000, 400));
        this.add(c('白紙の巻物', 1000, 400));
        this.add(c('ぬれた巻物', 200, 80));
    }
}

export const makimonoRepository = new MakimonoRepository();
