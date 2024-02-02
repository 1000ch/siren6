import { createFuncItemListPush } from './item'

export const bukiList = [];
const itemListPush = createFuncItemListPush(bukiList, false);

bukiList.sort((a, b) => a.kaine - b.kaine);
