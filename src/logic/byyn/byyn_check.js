import { Position, T, B, L, R, TL, TR, BL, BR } from "./position";
import { NONE, BYYN, TUTI, OUT_OF_RANGE } from './cell';

/*
今はさっさと実装することと拡張性を重視し、全マスから全方向に投げて調べるという方針をとる。
もちろん枝刈りすることはできるが、それを保守することや拡張性などを考慮するとわりに合わないと判断した。
*/

let room = [];

export function byynCheck(_room, useUdewa, isTubo) {
    room = _room;
}

function byynCheck1(startPos, dir, useUdewa, isTubo) {
    if (typeFrom(startPos) !== NONE) {
        return false;
    }
    
    let pos = pos = startPos.move(dir);

    while (true) {
        const type = typeFrom(pos);
        if (type === OUT_OF_RANGE) {
            return false;
        }
        else if (type === NONE) {
            pos = pos.move(dir);
        }
        else if (type === BYYN) {
            // todo
        }
        else if (type === TUTI) {
            // todo udewa
            // todo 条件を満たしている場合はOK そうでない場合はNG
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
        return room[pos.row][pos.col];
    }
    return OUT_OF_RANGE;
}
