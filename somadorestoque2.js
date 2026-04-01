const precos = [10, 20, 30, 40, 50];

let soma = 0;

precos.forEach((preco) => {
  soma += preco;
  console.log(`Somando: ${preco} | Total parcial: ${soma}`);
});

console.log(`\n0 valor final da soma é: ${soma}`);

const mensagemMeta =
  soma > 100 ? "Meta de vendas batida!" : "Ainda falta um pouco para a meta.";

console.log(mensagemMeta);
