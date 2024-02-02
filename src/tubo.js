import { createFuncItemListPush } from './item'

export const tuboList = [];
const itemListPush = createFuncItemListPush(tuboList, false);

tuboList.sort((a, b) => a.kaine - b.kaine);
