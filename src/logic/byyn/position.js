
export class Position {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    add(...args) {
        let diff = null;
        if (args.length === 1) {
            diff = args[0];
        }
        else {
            diff = new Position(args[0], args[1]);
        }
        return new Position(
            this.row + diff.row,
            this.col + diff.col
        );
    }

    return() {
        return new Position(
            this.row * -1,
            this.col * -1
        );
    }

    hReflect() {
        return new Position(
            this.row * -1,
            this.col
        );
    }

    vReflect() {
        return new Position(
            this.row,
            this.col * -1
        );
    }

    equal(pos) {
        return this.row === pos.row && this.col === pos.col;
    }

    toString() {
        return `[row: ${this.row}, col: ${this.col}]`;
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
