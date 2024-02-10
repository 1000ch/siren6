import { ItemRepository } from "./item_repository";

export class UdewaRepository extends ItemRepository {
    static init() {
        const c = this.create;
    }
}

UdewaRepository.init();
