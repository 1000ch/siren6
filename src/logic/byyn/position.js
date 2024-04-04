
export class Position {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    move(diff) {
        this.row += diff.row;
        this.col += diff.col;
    }
}

export const TL = new Position(-1, -1);
export const TR = new Position(-1, 1);
export const BL = new Position(1, -1);
export const BR = new Position(1, 1);
