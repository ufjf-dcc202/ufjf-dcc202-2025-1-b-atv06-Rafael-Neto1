const boardDiv = document.getElementById("board");
const messageDiv = document.getElementById("message");

let selecionado = null;

export function desenhar(tabuleiro) {
    boardDiv.innerHTML = "";

    for (let y = 0; y < tabuleiro.length; y++) {
        for (let x = 0; x < tabuleiro[y].length; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if (tabuleiro[y][x] === null) {
                cell.classList.add("invalid");
            } else if (tabuleiro[y][x] === 1) {
                const peg = document.createElement("div");
                peg.classList.add("peg");
                cell.appendChild(peg);

                cell.addEventListener("click", () => selecionarPeca(x, y));
            } else if (tabuleiro[y][x] === 0) {
                cell.classList.add("empty");
                cell.addEventListener("click", () => tentarMoverPeca(x, y));
            }

            boardDiv.appendChild(cell);
        }
    }
}

let tabuleiroAtual;
let moverFunc;

export function configurar(tabuleiro, moverFunction) {
    tabuleiroAtual = tabuleiro;
    moverFunc = moverFunction;
}

function selecionarPeca(x, y) {
    selecionado = { x, y };
    messageDiv.textContent = `Peça selecionada em (${x}, ${y})`;
}

function tentarMoverPeca(x, y) {
    if (selecionado && moverFunc) {
        if (moverFunc(tabuleiroAtual, selecionado.x, selecionado.y, x, y)) {
            desenhar(tabuleiroAtual);
            messageDiv.textContent = "Movimento realizado!";
        } else {
            messageDiv.textContent = "Movimento inválido!";
        }
        selecionado = null;
    }
}
