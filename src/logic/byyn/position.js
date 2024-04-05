
export class Position {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    add(diff) {
        return new Position(
            this.row + diff.row,
            this.col + diff.col
        );
    }
}

export const T = new Position(-1, 0);
export const B = new Position(1, 0);
export const L = new Position(0, -1);
export const R = new Position(0, 1);
export const TL = new Position(-1, -1);
export const TR = new Position(-1, 1);
export const BL = new Position(1, -1);
export const BR = new Position(1, 1);
