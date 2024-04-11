
export const NONE = 'none';
export const BYYN = 'byyn';
export const TUTI = 'tuti';
export const MIZU = 'mizu';
export const ITEM = 'item';
export const PREV_ITEM = 'prev-item';
export const OUT_OF_RANGE = 'out-of-range';

export function cell(fill = NONE, item = NONE) {
    return {fill, item};
}
