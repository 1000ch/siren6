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
    
    let pos = pos = startPos.add(dir);

    const isHit = {
        top: false, bottom: false,
        left: false, right: false
    };

    while (true) {
        const type = typeFrom(pos);
        if (type === OUT_OF_RANGE) {
            return false;
        }
        else if (type === NONE) {
            pos = pos.add(dir);
        }
        else if (type === BYYN) {
            if (dir === TL) {
                const rightType = typeFrom(pos.add(R));
            }
            // todo
        }
        else if (type === TUTI) {
            if (
                isHit.top && isHit.bottom &&
                isHit.left && isHit.right
            ) {
                return []; // todo 道筋
            }
            return false;
        }
        else {
            throw new Error(`想定外のtype: ${type}`);
        }
    }
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
