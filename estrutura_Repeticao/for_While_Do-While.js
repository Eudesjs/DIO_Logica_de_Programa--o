/*
ESTRUTURA DE REPETIÇÃO FOR, WHILE E DO-WHILE

Estas estruturas permitem repetir instruções enquanto uma condição for atendida.
*/
console.log("Estruturas de repetição em JavaScript\n");

// FOR: ideal quando sabemos quantas vezes a repetição deve ocorrer.
console.log("FOR");
for (let i = 1; i <= 5; i++) {
  console.log("Valor do contador: " + i);
}

console.log("\n");

// WHILE: repete enquanto a condição for verdadeira.
console.log("WHILE");
let contador = 1;
while (contador <= 5) {
  console.log("Contador do while: " + contador);
  contador++;
}

console.log("\n");

// DO WHILE: executa pelo menos uma vez antes de testar a condição.
console.log("DO WHILE");
let numero = 0;
do {
  console.log("Número do do while: " + numero);
  numero++;
} while (numero < 3);

console.log("\n");

// Exemplo de uso com soma em FOR.
console.log("Soma dos números de 1 a 10 com FOR");
let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log("Resultado da soma: " + soma);

console.log("\n");

// Exemplo de uso com contador em WHILE.
console.log("Contagem regressiva com WHILE");
let tempo = 5;
while (tempo > 0) {
  console.log("Tempo restante: " + tempo);
  tempo--;
}
console.log("Fim da contagem!");
