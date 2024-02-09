import { ItemRepository } from "./item_repository";

export class MakimonoRepository extends ItemRepository {
    static create(name, kaine, urine, needSelect = false) {
        return {
            status: 'normal',
            name, kaine, urine,
            unused: true,
            needSelect
        };
    }

    static init() {

    }
}

MakimonoRepository.init();
