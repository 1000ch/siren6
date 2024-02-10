import { ItemRepository } from "./item_repository";

export class TateRepository extends ItemRepository {
    static init() {
        this.canSyukufuku = false;
        const c = this.create;
    }
}

TateRepository.init();
