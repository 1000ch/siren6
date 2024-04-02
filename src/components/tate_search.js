import { createBukiTateSearchViewModel } from './buki_tate_template';
import { tateRepository } from '../logic/item/tate_repository';

export const TateSearch = createBukiTateSearchViewModel('Tate', tateRepository);
