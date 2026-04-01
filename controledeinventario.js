function gerenciarEstoque(nomeProduto, quantidadeEmEstoque) {
  let statusMaquina = false;

  let entradaEstoque = 15;
  let novaQuantidade = quantidadeEmEstoque + entradaEstoque;

  let perdaEstoque = novaQuantidade * 0.1;
  let quantidadeFinal = novaQuantidade - perdaEstoque;

  if (quantidadeFinal < 20) {
    statusMaquina = true;
    return `Alerta: Estoque baixo para o produto ${nomeProduto}, produção iniciada para reabastecer o estoque.`;
  } else if (quantidadeFinal >= 20 && quantidadeFinal <= 50) {
    statusMaquina = false;
    return `Estoque adequado para o produto ${nomeProduto}`;
  } else {
    statusMaquina = false;
    return `Estoque alto para o produto ${nomeProduto}, Desligando a produção para evitar excesso de estoque.`;
  }
}

console.log(gerenciarEstoque("NTC", 10));
console.log(gerenciarEstoque("Sensor de Movimento", 30));
console.log(gerenciarEstoque("Sensor de Temperatura", 60));
