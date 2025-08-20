import { criarTabuleiro, mover } from "./game.js";
import { desenhar, configurar } from "./ui.js";

const tabuleiro = criarTabuleiro();
configurar(tabuleiro, mover);
desenhar(tabuleiro);

document.getElementById("restart-button").addEventListener("click", () => {
    const novoTabuleiro = criarTabuleiro();
    configurar(novoTabuleiro, mover);
    desenhar(novoTabuleiro);
    document.getElementById("message").textContent = "Novo jogo iniciado!";
});
