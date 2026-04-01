const precos = [10, 20 ,30, 40, 50]

let soma = 0;

for(let i = 0; i < precos.length; i++){
    soma = soma + precos[i]
    console.log(`Somando: ${precos[i]} | Total parcial: ${soma}`);
}

console.log(`\n0 valor final da soma é: ${soma}`);

const mensagemMeta = (soma > 100) ? "Meta de vendas batida!" : "Ainda falta um pouco para a meta.";

console.log(mensagemMeta);