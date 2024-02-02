import { createFuncItemListPush } from './item'

export const okouList = [];
const itemListPush = createFuncItemListPush(okouList, false);

okouList.sort((a, b) => a.kaine - b.kaine);
