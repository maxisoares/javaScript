const produto = "Mouse";
const precoUnitario = 100;

let quantidade = 2;
let precoTotal = quantidade * precoUnitario;

let valorComDesconto = precoTotal - precoTotal * 0.1;

console.log(`O ${produto} custa R$${precoUnitario.toFixed(2)}.`);
console.log(
  `O valor total de sua compra é de R$${precoTotal.toFixed(2)}, com o desconto de 10% o valor será de R$${valorComDesconto.toFixed(2)}.`,
);
