// ESTRUTURA DE DECISÃO SWITCH CASE
// O switch é uma estrutura de controle que executa código diferente
// baseado em diferentes condições. É útil quando você tem múltiplas opções.

// ============================================
// 1. SINTAXE BÁSICA DO SWITCH CASE
// ============================================

let dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda-feira");// 
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia inválido");
}
// Saída: "Quarta-feira"

// ============================================
// 2. ENTENDENDO O BREAK
// ============================================

console.log("\n--- Exemplo SEM break (Fall-through) ---");
let fruta = "maçã";

switch (fruta) {
  case "maçã":
    console.log("Fruta vermelha");
    // sem break - continua executando o próximo case
  case "morango":
    console.log("Fruta doce");
    // sem break - continua executando o próximo case
  case "amora":
    console.log("Fruta com sementes pequenas");
    break;
  case "banana":
    console.log("Fruta amarela");
    break;
  default:
    console.log("Fruta desconhecida");
}
// Saída:
// "Fruta vermelha"
// "Fruta doce"
// "Fruta com sementes pequenas"

console.log("\n--- Exemplo COM break ---");
let fruta2 = "maçã";

switch (fruta2) {
  case "maçã":
    console.log("Fruta vermelha");
    break;
  case "morango":
    console.log("Fruta doce");
    break;
  case "amora":
    console.log("Fruta com sementes pequenas");
    break;
  case "banana":
    console.log("Fruta amarela");
    break;
  default:
    console.log("Fruta desconhecida");
}
// Saída: "Fruta vermelha"

// ============================================
// 3. CASES COM MÚLTIPLAS CONDIÇÕES
// ============================================

console.log("\n--- Múltiplas condições agrupadas ---");
let estacao = "verão";

switch (estacao) {
  case "verão":
  case "inverno":
    console.log("Épocas populares para viagens");
    break;
  case "primavera":
  case "outono":
    console.log("Épocas de clima agradável");
    break;
  default:
    console.log("Estação desconhecida");
}
// Saída: "Épocas populares para viagens"

// ============================================
// 4. SWITCH COM TIPOS DIFERENTES
// ============================================

console.log("\n--- Switch com tipos diferentes ---");
let opcao = "2";

switch (opcao) {
  case 1:
    console.log("Case numérico 1");
    break;
  case "1":
    console.log("Case string '1'");
    break;
  case "2":
    console.log("Case string '2'");
    break;
  case 2:
    console.log("Case numérico 2");
    break;
  default:
    console.log("Padrão");
}
// Saída: "Case string '2'"
// Nota: O switch usa comparação estrita (===)

// ============================================
// 5. SWITCH COM EXPRESSÕES COMPLEXAS
// ============================================

console.log("\n--- Switch com expressões ---");
let idade = 25;

switch (true) {
  case idade < 13:
    console.log("Criança");
    break;
  case idade >= 13 && idade < 18:
    console.log("Adolescente");
    break;
  case idade >= 18 && idade < 60:
    console.log("Adulto");
    break;
  default:
    console.log("Idoso");
}
// Saída: "Adulto"

// ============================================
// 6. SWITCH COM STRINGS
// ============================================

console.log("\n--- Switch com strings ---");
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("Cor quente - Energia");
    break;
  case "azul":
    console.log("Cor fria - Calma");
    break;
  case "amarelo":
    console.log("Cor quente - Alegria");
    break;
  case "verde":
    console.log("Cor fria - Natureza");
    break;
  default:
    console.log("Cor não reconhecida");
}
// Saída: "Cor fria - Calma"

// ============================================
// 7. COMPARAÇÃO: IF/ELSE vs SWITCH
// ============================================

console.log("\n--- Usando IF/ELSE ---");
let nota = "A";

if (nota === "A") {
  console.log("Excelente!");
} else if (nota === "B") {
  console.log("Bom!");
} else if (nota === "C") {
  console.log("Satisfatório!");
} else if (nota === "D") {
  console.log("Insuficiente!");
} else {
  console.log("Nota inválida!");
}

console.log("\n--- Usando SWITCH ---");
switch (nota) {
  case "A":
    console.log("Excelente!");
    break;
  case "B":
    console.log("Bom!");
    break;
  case "C":
    console.log("Satisfatório!");
    break;
  case "D":
    console.log("Insuficiente!");
    break;
  default:
    console.log("Nota inválida!");
}

// ============================================
// 8. EXEMPLO PRÁTICO: CALCULADORA
// ============================================

console.log("\n--- Exemplo Prático: Calculadora ---");

function calculadora(a, b, operacao) {
  let resultado = 10;

  switch (operacao) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = b !== 0 ? a / b : "Erro: divisão por zero";
      break;
    default:
      resultado = "Operação não reconhecida";
  }

  return resultado;
}

console.log(calculadora(10, 5, "+")); // 15
console.log(calculadora(10, 5, "-")); // 5
console.log(calculadora(10, 5, "*")); // 50
console.log(calculadora(10, 5, "/")); // 2
console.log(calculadora(10, 0, "/")); // "Erro: divisão por zero"

// ============================================
// RESUMO - QUANDO USAR SWITCH VS IF/ELSE
// ============================================

/*
USE SWITCH QUANDO:
- Você testa a mesma variável contra múltiplos valores específicos
- Você tem muitas condições diferentes (3 ou mais)
- Os valores são valores simples (números, strings, booleanos)
- O código fica mais legível e fácil de manter

USE IF/ELSE QUANDO:
- Você precisa testar condições complexas
- As condições envolvem operadores lógicos (&&, ||)
- Você testa intervalos de valores
- Você tem poucas condições (1 ou 2)
*/

