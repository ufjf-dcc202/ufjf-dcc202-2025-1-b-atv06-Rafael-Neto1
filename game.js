export const layoutInicial = [
    [null, null, 1, 1, 1, null, null],
    [null, null, 1, 1, 1, null, null],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [null, null, 1, 1, 1, null, null],
    [null, null, 1, 1, 1, null, null]
];

export function criarTabuleiro() {
    return JSON.parse(JSON.stringify(layoutInicial));
}

export function podeMover(tabuleiro, x1, y1, x2, y2) {
    if (tabuleiro[y1][x1] !== 1) return false;
    if (tabuleiro[y2][x2] !== 0) return false;

    const dx = x2 - x1;
    const dy = y2 - y1;

    if (Math.abs(dx) === 2 && dy === 0) {
        const xm = Math.floor((x1 + x2) / 2);
        return tabuleiro[y1][xm] === 1;
    }

    if (Math.abs(dy) === 2 && dx === 0) {
        const ym = Math.floor((y1 + y2) / 2);
        return tabuleiro[ym][x1] === 1;
    }

    return false;
}

export function mover(tabuleiro, x1, y1, x2, y2) {
    if (podeMover(tabuleiro, x1, y1, x2, y2)) {
        tabuleiro[y1][x1] = 0;
        tabuleiro[y2][x2] = 1;
        const xm = Math.floor((x1 + x2) / 2);
        const ym = Math.floor((y1 + y2) / 2);
        tabuleiro[ym][xm] = 0;
        return true;
    }
    return false;
}
