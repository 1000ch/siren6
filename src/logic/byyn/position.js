
export class Position {
    constructor(row, col, name = '') {
        this.row = row;
        this.col = col;
        this.name = name;
    }

    add(diff) {
        return new Position(
            this.row + diff.row,
            this.col + diff.col
        );
    }

    equal(pos) {
        return this.row === pos.row && this.col === pos.col;
    }
}

export const T = new Position(-1, 0, '上');
export const B = new Position(1, 0, '下');
export const L = new Position(0, -1, '左');
export const R = new Position(0, 1, '右');
export const TL = new Position(-1, -1, '左上');
export const TR = new Position(-1, 1, '右上');
export const BL = new Position(1, -1, '左下');
export const BR = new Position(1, 1, '右下');
