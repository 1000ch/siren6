import { ItemRepository } from "./item_repository";

export class TateRepository extends ItemRepository {
    static init() {
        const c = this.create;
    }
}

TateRepository.init();
