import { createFuncItemListPush } from './item'

export const makimonoList = [];
const itemListPush = createFuncItemListPush(makimonoList, true);

makimonoList.sort((a, b) => a.kaine - b.kaine);
