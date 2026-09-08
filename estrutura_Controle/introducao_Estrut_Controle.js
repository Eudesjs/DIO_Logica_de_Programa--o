/*
INTRODUÇÃO A ESTRUTURA DE CONTROLE
// Conceito: Estruturas de controle
// As estruturas de controle determinam o fluxo de execução do programa.
// Elas permitem tomar decisões, repetir ações e controlar o comportamento do código.

*/
console.log('--- Condicionais ---');

const idade = 18;

if (idade >= 18) {
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}

const nota = 7;

if (nota >= 9) {
  console.log('Conceito A');
} else if (nota >= 7) {
  console.log('Conceito B');
} else if (nota >= 5) {
  console.log('Conceito C');
} else {
  console.log('Conceito D');
}

const status = idade >= 18 ? 'Permitido' : 'Bloqueado';
console.log(`Status do acesso: ${status}`);

console.log('\n--- Switch ---');

const dia = 3;
let nomeDia;

switch (dia) {
  case 1:
    nomeDia = 'Domingo';
    break;
  case 2:
    nomeDia = 'Segunda-feira';
    break;
  case 3:
    nomeDia = 'Terça-feira';
    break;
  case 4:
    nomeDia = 'Quarta-feira';
    break;
  case 5:
    nomeDia = 'Quinta-feira';
    break;
  case 6:
    nomeDia = 'Sexta-feira';
    break;
  case 7:
    nomeDia = 'Sábado';
    break;
  default:
    nomeDia = 'Dia inválido';
}

console.log(`Hoje é ${nomeDia}.`);

console.log('\n--- Laços de repetição ---');

for (let i = 1; i <= 5; i++) {
  console.log(`Loop for: ${i}`);
}

let contador = 0;
while (contador < 3) {
  console.log(`Loop while: ${contador}`);
  contador++;
}

let numero = 1;
do {
  console.log(`Loop do...while: ${numero}`);
  numero++;
} while (numero <= 2);

console.log('\n--- Break e continue ---');

for (let i = 0; i <= 5; i++) {
  if (i === 2) {
    continue;
  }

  if (i === 4) {
    break;
  }

  console.log(`Valor processado: ${i}`);
}

console.log('\n--- Exemplo prático ---');

const listaDeProdutos = ['Notebook', 'Mouse', 'Teclado', 'Monitor'];

for (const produto of listaDeProdutos) {
  console.log(`Produto em estoque: ${produto}`);
}

console.log('\nEstruturas de controle permitem organizar decisões e repetições no código.');
