
export const tuboList = [];

function itemListPush(name, kaine, urine, unused = true, isNedanBase = false) {
    tuboList.push({
        status: 'normal',
        name, kaine, urine,
        unused, isNedanBase
    });
    tuboList.push({
        status: 'noroi',
        name: name + '💀',
        kaine: Math.floor(kaine * 0.87),
        urine: Math.floor(urine * 0.87),
        unused, isNedanBase
    });
}

itemListPush('保存の壺[0]', 800, 320, false, true);
// itemListPush('保存の壺[1]', 900, 360, false);
// itemListPush('保存の壺[2]', 1000, 400, false);
itemListPush('保存の壺[3]', 1100, 440);
itemListPush('保存の壺[4]', 1200, 480);
itemListPush('保存の壺[5]', 1300, 520);
itemListPush('識別の壺[0]', 800, 320, false, true);
// itemListPush('識別の壺[1]', 900, 360, false);
// itemListPush('識別の壺[2]', 1000, 400, false);
itemListPush('識別の壺[3]', 1100, 440);
itemListPush('識別の壺[4]', 1200, 480);
itemListPush('識別の壺[5]', 1300, 520);
itemListPush('変化の壺[0]', 800, 320, false, true);
// itemListPush('変化の壺[1]', 900, 360, false);
// itemListPush('変化の壺[2]', 1000, 400, false);
itemListPush('変化の壺[3]', 1100, 440);
itemListPush('変化の壺[4]', 1200, 480);
itemListPush('変化の壺[5]', 1300, 520);
itemListPush('換金の壺[0]', 1000, 400, false, true);
// itemListPush('換金の壺[1]', 1100, 440, false);
// itemListPush('換金の壺[2]', 1200, 480, false);
itemListPush('換金の壺[3]', 1300, 520);
itemListPush('換金の壺[4]', 1400, 560);
itemListPush('換金の壺[5]', 1500, 600);
itemListPush('合成の壺[0]', 6000, 2400, false, true);
itemListPush('合成の壺[1]', 6100, 2440, false);
itemListPush('合成の壺[2]', 6200, 2480); // MEMO 存在しない？
itemListPush('合成の壺[3]', 6300, 2520);
itemListPush('合成の壺[4]', 6400, 2560);
itemListPush('おはらいの壺[0]', 1600, 640, false, true);
// itemListPush('おはらいの壺[1]', 1700, 680, false);
itemListPush('おはらいの壺[2]', 1800, 720);
itemListPush('おはらいの壺[3]', 1900, 760);
itemListPush('おはらいの壺[4]', 2000, 800);
itemListPush('呪いの壺[0]', 1600, 640, false, true);
// itemListPush('呪いの壺[1]', 1700, 680, false);
itemListPush('呪いの壺[2]', 1800, 720);
itemListPush('呪いの壺[3]', 1900, 760);
itemListPush('呪いの壺[4]', 2000, 800);
itemListPush('強化の壺[0]', 10000, 4000, false, true);
// itemListPush('強化の壺[1]', 10100, 4040, false);
itemListPush('強化の壺[2]', 10200, 4080);
itemListPush('強化の壺[3]', 10300, 4120);
itemListPush('弱化の壺[0]', 10000, 4000, false, true);
// itemListPush('弱化の壺[1]', 10100, 4040, false);
itemListPush('弱化の壺[2]', 10200, 4080);
itemListPush('弱化の壺[3]', 10300, 4120);
itemListPush('底抜けの壺[0]', 1000, 400, false, true);
itemListPush('底抜けの壺[1]', 1100, 440, false);
itemListPush('底抜けの壺[2]', 1200, 480);
itemListPush('底抜けの壺[3]', 1300, 520);
itemListPush('底抜けの壺[4]', 1400, 560);
itemListPush('倉庫の壺[0]', 1000, 400, false, true);
itemListPush('倉庫の壺[1]', 1100, 440, false);
itemListPush('倉庫の壺[2]', 1200, 480, false);
itemListPush('倉庫の壺[3]', 1300, 520);
itemListPush('倉庫の壺[4]', 1400, 560);
itemListPush('倉庫の壺[5]', 1500, 600);
itemListPush('手封じの壺[0]', 1000, 400, false, true);
// itemListPush('手封じの壺[1]', 1100, 440, false);
// itemListPush('手封じの壺[2]', 1200, 480, false);
itemListPush('手封じの壺[3]', 1300, 520);
itemListPush('手封じの壺[4]', 1400, 560);
itemListPush('手封じの壺[5]', 1500, 600);
itemListPush('割れない壺[0]', 1000, 400, false, true);
// itemListPush('割れない壺[1]', 1100, 440, false);
// itemListPush('割れない壺[2]', 1200, 480, false);
itemListPush('割れない壺[3]', 1300, 520);
itemListPush('割れない壺[4]', 1400, 560);
itemListPush('割れない壺[5]', 1500, 600);
itemListPush('ただの壺[0]', 800, 320, false, true);
// itemListPush('ただの壺[1]', 900, 360, false);
// itemListPush('ただの壺[2]', 1000, 400, false);
itemListPush('ただの壺[3]', 1100, 440);
itemListPush('ただの壺[4]', 1200, 480);
itemListPush('ただの壺[5]', 1300, 520);
itemListPush('やりすごしの壺[0]', 800, 320, false, true);
// itemListPush('やりすごしの壺[1]', 900, 360, false);
// itemListPush('やりすごしの壺[2]', 1000, 400, false);
itemListPush('やりすごしの壺[3]', 1100, 440);
itemListPush('やりすごしの壺[4]', 1200, 480);
itemListPush('やりすごしの壺[5]', 1300, 520);
itemListPush('背中の壺[0]', 2000, 800, false, true);
itemListPush('背中の壺[1]', 2100, 840, false);
itemListPush('背中の壺[2]', 2200, 880, false);
itemListPush('背中の壺[3]', 2300, 920);
itemListPush('背中の壺[4]', 2400, 960);
itemListPush('背中の壺[5]', 2500, 1000);
itemListPush('トドの壺[0]', 2000, 800, false, true);
itemListPush('トドの壺[1]', 2100, 840, false);
itemListPush('トドの壺[2]', 2200, 880, false);
itemListPush('トドの壺[3]', 2300, 920);
itemListPush('トドの壺[4]', 2400, 960);
itemListPush('トドの壺[5]', 2500, 1000);
itemListPush('水鉄砲の壺[0]', 2000, 800, false, true);
itemListPush('水鉄砲の壺[1]', 2100, 840, false);
itemListPush('水鉄砲の壺[2]', 2200, 880); // MEMO: 床落ちで存在するらしい
itemListPush('水鉄砲の壺[3]', 2300, 920);
itemListPush('水鉄砲の壺[4]', 2400, 960);
itemListPush('水鉄砲の壺[5]', 2500, 1000);
itemListPush('笑いの壺[0]', 2000, 800, false, true);
itemListPush('笑いの壺[1]', 2100, 840, false);
itemListPush('笑いの壺[2]', 2200, 880);
itemListPush('笑いの壺[3]', 2300, 920);
itemListPush('魔物の壺[0]', 2000, 800, false, true);
// itemListPush('魔物の壺[1]', 2100, 840, false);
// itemListPush('魔物の壺[2]', 2200, 880, false);
itemListPush('魔物の壺[3]', 2300, 920);
itemListPush('魔物の壺[4]', 2400, 960);
itemListPush('魔物の壺[5]', 2500, 1000);
// itemListPush('ビックリの壺[0]', 2000, 800, false, true);
// itemListPush('ビックリの壺[1]', 2100, 840, false);
// itemListPush('ビックリの壺[2]', 2200, 880, false);
// itemListPush('ビックリの壺[3]', 2300, 920);
// itemListPush('ビックリの壺[4]', 2400, 960);
// itemListPush('ビックリの壺[5]', 2500, 1000);
tuboList.sort((a, b) => a.kaine - b.kaine);
