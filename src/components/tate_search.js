import { createBukiTateSearchViewModel } from './buki_tate_template';
import { tateRepository } from '../item/tate_repository';

export const TateSearch = createBukiTateSearchViewModel(tateRepository);
