import { createBukiTateSearchViewModel } from './buki_tate_template';
import { bukiRepository } from '../logic/item/buki_repository';

export const BukiSearch = createBukiTateSearchViewModel('Buki', bukiRepository);
