const servicos = [50, 150, 80, 200, 90, 120];

const premiuns = [];
const comuns = [];

servicos.forEach((servico) => {
  if (servico > 100) {
    premiuns.push(servico);
  } else {
    comuns.push(servico);
  }
});

const servicosAcessiveis = servicos.filter((barato) => barato < 80);

console.log("Serviços Premium:", premiuns);
console.log("Serviços Comum:", comuns);
console.log("Serviços em conta:", servicosAcessiveis);
