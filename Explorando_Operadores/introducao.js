
/*
INTRODUÇÃO AOS OPERADORES
// CONCEITOS:

Operadores são símbolos usados para realizar operações com valores ou variáveis. Em JavaScript, eles ajudam a:

calcular valores
comparar dados
tomar decisões
modificar variáveis
Principais tipos de operadores:

Operadores aritméticos
Usados para fazer contas matemáticas.
Exemplos:

adição
subtração
multiplicação
/ divisão
% resto da divisão
** potenciação

/* ENTENDENDO OPERADORES E EXPRESSÃO
O QUE SÃO OPERADORES DE EXPRESSÃO?

*/

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

/*
Operadores de atribuição
Usados para guardar valores em variáveis.
Exemplos:

= atribui valor
+= soma e atribui
-= subtrai e atribui
*= multiplica e atribui
/= divide e atribui

*/

let x = 5;

x += 2; // x = x + 2
console.log(x); // 7

x *= 3; // x = x * 3
console.log(x); // 21

/*
Operadores de comparação
Comparam valores e retornam verdadeiro ou falso.
Exemplos:

== igual em valor
=== igual em valor e tipo
!= diferente em valor
!== diferente em valor e tipo
maior que

< menor que
= maior ou igual

<= menor ou igual
*/

let idade = 18;

console.log(idade == 18); // true
console.log(idade === "18"); // false
console.log(idade >= 18); // true
console.log(idade < 21); // true

/*
Importante: use === e !== quando possível, porque eles são mais seguros e evitam erros de tipo.

Operadores lógicos
Usados para combinar condições.
Exemplos:

&& (E) → verdadeiro se todas forem verdadeiras
|| (OU) → verdadeiro se pelo menos uma for verdadeira
! (NÃO) → inverte o valor booleano
*/

let idadeLogica = 20;
let temCarteira = true;

console.log(idadeLogica >= 18 && temCarteira); // true
console.log(idadeLogica >= 18 || temCarteira); // true
console.log(!(idadeLogica >= 18)); // false

/*
Operadores unários
Operam sobre um único valor.
Exemplos:

++ incremento
-- decremento
typeof verifica o tipo da variável
*/

let contador = 0;

contador++;
console.log(contador); // 1

contador--;
console.log(contador); // 0

console.log(typeof contador); // "number"

/*
Operador ternário
É uma forma curta de escrever condição.
Estrutura:
condicao ? valor1 : valor2
*/

let idadeTernaria = 18;

let resposta = idadeTernaria >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resposta); // Maior de idade

/*
Precedência de operadores
Em JavaScript, alguns operadores são avaliados antes de outros, assim como na matemática.

Exemplo:
*/
let resultado = 2 + 3 * 4;
console.log(resultado); // 14

/*
Aqui a multiplicação é resolvida antes da soma.

Resumo rápido:

Aritméticos: calculam valores
Atribuição: guardam valores
Comparação: verificam igualdade/ordem
Lógicos: combinam condições
Unários: atuam sobre um único valor
Ternário: decide entre dois valores com base em uma condição
Se quiser, posso também te entregar esse conteúdo em formato de:

resumo em tópicos para anotações
exercícios práticos
versão em linguagem mais simples para estudo iniciante
*/