/* Calculadora de média académica */

let nota1 = 5.7;
let nota2 = 10.0;
let nota3 = 7.6;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7.0) {
  console.log(`Aluno Aprovado! Média: ${media.toFixed(2)}`);
} else {
  console.log(`Aluno Reprovado! Média: ${media.toFixed(2)}`);
}
