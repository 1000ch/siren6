import { Position, T, B, L, R, TL, TR, BL, BR } from "./position";
import { NONE, BYYN, TUTI, OUT_OF_RANGE } from './cell';

/*
今はさっさと実装することと拡張性を重視し、全マスから全方向に投げて調べるという方針をとる。
もちろん枝刈りすることはできるが、それを保守することや拡張性などを考慮するとわりに合わないと判断した。
*/

let room = [];
let useUdewa = false;

export function byynCheck(_room, _useUdewa, isTubo) {
    room = _room;
    useUdewa = _useUdewa;
}

function byynCheck1(startPos, dir, isTubo) {
    if (typeFrom(startPos) !== NONE) {
        return false;
    }
    
    const isHit = {
        top: false, bottom: false,
        left: false, right: false
    };

    let pos = startPos;
    const path = [pos];

    while (true) {
        // 移動
        pos = pos.add(dir);

        const type = typeFrom(pos);
        if (type === OUT_OF_RANGE) {
            // どこ行くねーん
            path.push(null);
            return canBunretu(isHit) ? path : false;
        }
        else if (type === NONE) {
            // 何もしない
            path.push(pos);
        }
        else if (type === BYYN) {
            const hAdjType = typeFrom(pos.add(0, -dir.col));
            const vAdjType = typeFrom(pos.add(-dir.row, 0));

            // 3つパターン
            if (hAdjType === BYYN && vAdjType === BYYN) {
                return canBunretu(isHit) ? path : false;
            }
            else if (hAdjType === BYYN && vAdjType === TUTI) {
                return canBunretu(isHit) ? path : false;
            }
            else if (hAdjType === TUTI && vAdjType === BYYN) {
                return canBunretu(isHit) ? path : false;
            }
            else if (hAdjType === TUTI && vAdjType === TUTI) {
                // 正反対に戻る
                dir = dir.return();
                pos = pos.add(dir);
            }
            // 2つパターン
            else if (hAdjType === BYYN && vAdjType === NONE) {
                // 横向きの壁で反射

                if (dir.row > 0) {
                    isHit.top = true;
                }
                else {
                    isHit.bottom = true;
                }

                dir = dir.hReflect();
                pos.row += dir.row;
                path.push(pos);
            }
            else if (hAdjType === TUTI && vAdjType === NONE) {
                // 正反対に戻る
                dir = dir.return();
                pos = pos.add(dir);
            }
            else if (hAdjType === NONE && vAdjType === BYYN) {
                // 縦向きの壁で反射

                if (dir.col > 0) {
                    isHit.right = true;
                }
                else {
                    isHit.left = true;
                }
                
                dir = dir.vReflect();
                pos.col += dir.col;
                path.push(pos);
            }
            else if (hAdjType === NONE && vAdjType === TUTI) {
                // 正反対に戻る
                dir = dir.return();
                pos = pos.add(dir);
            }
            // 1つパターン
            else if (hAdjType === NONE && vAdjType === NONE) {
                // 正反対に戻る
                dir = dir.return();
                pos = pos.add(dir);
            }
            // アサート
            else {
                throw new Error(`想定外の経路 dir: ${dir.toString()}, hAdjType: ${hAdjType}, vAdjType: ${vAdjType}`);
            }
        }
        else if (type === TUTI) {
            if (isTubo) {
                return false;
            }
            return canBunretu(isHit) ? path : false;
        }
        else {
            throw new Error(`想定外のtype: ${type}`);
        }

        // キャッチしたら終了
        if (pos.equal(startPos)) {
            return canBunretu(isHit) ? path : false;
        }
    }
}

// 分裂した   → アイテムが停止するまでの経路
// 分裂しない → false
function canBunretu(isHit) {
    return isHit.top && isHit.bottom && isHit.left && isHit.right;
}

function typeFrom(pos) {
    if (
        0 <= pos.row && pos.row < room.length &&
        0 <= pos.col && pos.col < room.length
    ) {
        const type = room[pos.row][pos.col];
        if (useUdewa && type === TUTI) {
            return BYYN;
        }
        return type;
    }
    return OUT_OF_RANGE;
}
