import { createFuncItemListPush } from './item'

export const udewaList = [];
const itemListPush = createFuncItemListPush(udewaList, false);

udewaList.sort((a, b) => a.kaine - b.kaine);
