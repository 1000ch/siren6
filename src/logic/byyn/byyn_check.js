import { Position, TL, TR, BL, BR } from "./position";
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

    let pathList = [];
    for (let row = 0; row < room.length; row++) {
        for (let col = 0; col < room.length; col++) {
            for (const dir of [TL, TR, BL, BR]) {
                const startPos = new Position(row, col);
                const path = findByynPath(startPos, dir, isTubo);
                if (path.length > 0) {
                    pathList.push(path);
                }
            }
        }
    }

    let catchablePathList1 = [];
    let catchablePathList2 = [];
    let uncatchablePathList = [];

    for (const path of pathList) {
        const start = path[0];
        const end = path.at(-1);
        if (start.pos.equal(end.pos)) {
            // 巡回してキャッチ
            if (start.dir.equal(end.dir)) {
                catchablePathList1.push(path);
            }
            // 角に当たった後、戻ってきてキャッチ
            else {
                catchablePathList2.push(path);
            }
        }
        else {
            uncatchablePathList.push(path);
        }
    }

    pathList = [];

    // catchablePathList1削減

    console.debug('catchablePathList1');

    while (catchablePathList1.length > 0) {
        const path = catchablePathList1.shift();
        pathList.push(path);

        const {pos: pos1, dir: dir1} = path[0];

        catchablePathList1 = catchablePathList1.filter(path => {
            for (const {pos: pos2, dir: dir2} of path) {
                if (pos1.equal(pos2) && (dir1.equal(dir2) || dir1.equal(dir2.reverse()))) {
                    return false;
                }
            }
            return true;
        });
    }

    // catchablePathList2削減

    console.debug('catchablePathList2');

    while (catchablePathList2.length > 0) {
        const path = catchablePathList2.shift();
        pathList.push(path);

        console.debug(path);
        const {pos: pos1, dir: dir1} = path[(path.length - 1) / 2];
        
        catchablePathList2 = catchablePathList2.filter(path => {
            const {pos: pos2, dir: dir2} = path[(path.length - 1) / 2];

            console.debug(pos1);
            console.debug(pos2);
            console.debug(dir1);
            console.debug(dir2);
            console.debug('---');

            return !(pos1.equal(pos2) && dir1.equal(dir2));
        });
    }

    // uncatchablePathList削減

    console.debug('uncatchablePathList');

    uncatchablePathList.sort((path1, path2) => {
        const lastPos1 = path1.at(-1).pos; 
        const lastPos2 = path2.at(-1).pos; 
        if (lastPos1 === null && lastPos2 === null) {
            return 0;
        }
        else if (lastPos1 === null) {
            return 1;
        }
        else if (lastPos2 === null) {
            return -1;
        }
        return path1.length - path2.length;
    });

    // todo

    return pathList;
}

function findByynPath(startPos, dir, isTubo) {
    if (typeFrom(startPos) !== NONE) {
        return [];
    }
    
    const isHit = {
        top: false, bottom: false,
        left: false, right: false
    };

    let pos = startPos;
    const path = [{pos, dir}];

    while (true) {
        // 移動
        pos = pos.add(dir);

        const type = typeFrom(pos);
        if (type === OUT_OF_RANGE) {
            // どこ行くねーん
            path.push(null);
            return canBunretu(isHit) ? path : [];
        }
        else if (type === NONE) {
            // 何もしない
            path.push({pos, dir});
        }
        else if (type === BYYN) {
            const hAdjType = typeFrom(pos.add(0, -dir.col));
            const vAdjType = typeFrom(pos.add(-dir.row, 0));

            // 3つパターン
            if (hAdjType === BYYN && vAdjType === BYYN) {
                return canBunretu(isHit) ? path : [];
            }
            else if (hAdjType === BYYN && vAdjType === TUTI) {
                return canBunretu(isHit) ? path : [];
            }
            else if (hAdjType === TUTI && vAdjType === BYYN) {
                return canBunretu(isHit) ? path : [];
            }
            else if (hAdjType === TUTI && vAdjType === TUTI) {
                // 正反対に戻る
                dir = dir.reverse();
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
                path.push({pos, dir});
            }
            else if (hAdjType === TUTI && vAdjType === NONE) {
                // 正反対に戻る
                dir = dir.reverse();
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
                path.push({pos, dir});
            }
            else if (hAdjType === NONE && vAdjType === TUTI) {
                // 正反対に戻る
                dir = dir.reverse();
                pos = pos.add(dir);
            }
            // 1つパターン
            else if (hAdjType === NONE && vAdjType === NONE) {
                // 正反対に戻る
                dir = dir.reverse();
                pos = pos.add(dir);
            }
            // アサート
            else {
                throw new Error(`想定外の経路 dir: ${dir.toString()}, hAdjType: ${hAdjType}, vAdjType: ${vAdjType}`);
            }
        }
        else if (type === TUTI) {
            if (isTubo) {
                return [];
            }
            return canBunretu(isHit) ? path : [];
        }
        else {
            throw new Error(`想定外のtype: ${type}`);
        }

        // キャッチしたら終了
        if (pos.equal(startPos)) {
            return canBunretu(isHit) ? path : [];
        }
    }
}

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
