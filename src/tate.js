import { createFuncItemListPush } from './item'

export const tateList = [];
const itemListPush = createFuncItemListPush(tateList, false);

tateList.sort((a, b) => a.kaine - b.kaine);
