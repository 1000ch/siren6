
export function calcNedan(nedanType, item, isJingi, syuseiti, inList, isNoroi) {
    const jingiHosei = isJingi ? 2 : 1;
    const syuseitiHosei = nedanType === 'kaine' ? 100 : 40;
    const allInNedan = inList.reduce((sum, inn) => sum + (inn === item.in ? 0 : inn[nedanType]), 0);
    const noroiHosei = isNoroi ? 0.87 : 1;
    return Math.floor((item[nedanType] * jingiHosei + syuseiti * syuseitiHosei + allInNedan) * noroiHosei);
}
