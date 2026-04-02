let produtoInput = document.getElementById("produto");
let resultado = document.getElementById("resultado");
let bntVerificar = document.getElementById("bntVerificar");

function verificarEstoque() {
    let produto = produtoInput.value.toLowerCase();
    let estoque = {
        "notebook": 10,
        "smartphone": 5,
        "tablet": 3,
        "monitor": 7
    };
    if (estoque[produto] !== undefined) {
        resultado.textContent = `O produto ${produto} está em estoque com ${estoque[produto]} unidades.`;
    } else {
        resultado.textContent = `O produto ${produto} não está em estoque.`;
    }
}