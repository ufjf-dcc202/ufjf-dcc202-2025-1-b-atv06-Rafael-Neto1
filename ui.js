const boardDiv = document.getElementById("board");
const messageDiv = document.getElementById("message");

let selecionado = null;

function desenhar() {
    boardDiv.innerHTML = "";

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            if (board[y][x] === null) {
                cell.classList.add("invalid");
            } else if (board[y][x] === 1) {
                const peg = document.createElement("div");
                peg.classList.add("peg");
                cell.appendChild(peg);

                cell.addEventListener("click", () => selecionar(x, y));
            } else if (board[y][x] === 0) {
                cell.classList.add("empty");
                cell.addEventListener("click", () => tentarMover(x, y));
            }

            boardDiv.appendChild(cell);
        }
    }
}

function selecionar(x, y) {
    selecionado = { x, y };
    messageDiv.textContent = `Peça selecionada em (${x}, ${y})`;
}

function tentarMover(x, y) {
    if (selecionado) {
        if (mover(selecionado.x, selecionado.y, x, y)) {
            desenhar();
            messageDiv.textContent = "Movimento realizado!";
        } else {
            messageDiv.textContent = "Movimento inválido!";
        }
        selecionado = null;
    }
}
