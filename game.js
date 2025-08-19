let board = [];
const layoutInicial = [
    [null, null, 1, 1, 1, null, null],
    [null, null, 1, 1, 1, null, null],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [null, null, 1, 1, 1, null, null],
    [null, null, 1, 1, 1, null, null]
];

function iniciar() {
    board = JSON.parse(JSON.stringify(layoutInicial));
}

function podeMover(x1, y1, x2, y2) {
    if (board[y1][x1] !== 1) return false;
    if (board[y2][x2] !== 0) return false;

    let dx = x2 - x1;
    let dy = y2 - y1;

    if (Math.abs(dx) === 2 && dy === 0) {
        let xm = (x1 + x2) / 2;
        if (board[y1][xm] === 1) return true;
    }
    if (Math.abs(dy) === 2 && dx === 0) {
        let ym = (y1 + y2) / 2;
        if (board[ym][x1] === 1) return true;
    }

    return false;
}

function mover(x1, y1, x2, y2) {
    if (podeMover(x1, y1, x2, y2)) {
        board[y1][x1] = 0;
        board[y2][x2] = 1;
        let xm = (x1 + x2) / 2;
        let ym = (y1 + y2) / 2;
        board[ym][xm] = 0;
        return true;
    }
    return false;
}
