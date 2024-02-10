import { ItemRepository } from "./item_repository";

export class BukiRepository extends ItemRepository {
    static init() {
        const c = this.create;
    }
}

BukiRepository.init();
