import { createBukiTateViewModel } from './buki_tate_template';
import { bukiRepository } from '../item/buki_repository';

export const BukiSearch = createBukiTateViewModel(bukiRepository);