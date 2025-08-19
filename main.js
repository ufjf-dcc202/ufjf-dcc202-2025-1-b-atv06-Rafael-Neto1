iniciar();
desenhar();

document.getElementById("restart-button").addEventListener("click", () => {
    iniciar();
    desenhar();
    messageDiv.textContent = "Novo jogo iniciado!";
});
