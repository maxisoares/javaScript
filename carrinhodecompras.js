const catalogo = [
  {
    nome: "Fio a Fio",
    preco: 100,
  },
  {
    nome: "Volume Brasileiro",
    preco: 130,
  },
  {
    nome: "Volume Russo",
    preco: 180,
  },
];


catalogo.forEach((item) => {
  console.log(`O serviço ${item.nome} custa R$${item.preco.toFixed(2)}`);
});

const servicosAcessiveis = catalogo.filter((item) => item.preco < 150);

let total = 0;

servicosAcessiveis.forEach((item) => {
  total += item.preco;
});

console.log(`Total do agendamento: R$${total.toFixed(2)}`);
