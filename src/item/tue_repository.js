import { ItemRepository } from "./item_repository";

export class TueRepository extends ItemRepository {
    static init() {
        this.canSyukufuku = false;
        
    }
}

TueRepository.init();
