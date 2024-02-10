import { ItemRepository } from "./item_repository";

export class BukiRepository extends ItemRepository {
    static init() {
        this.canSyukufuku = false;
        const c = this.create;
    }
}

BukiRepository.init();
