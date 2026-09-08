// APROFUNDANDO NO DEFAULT DO SWITCH CASE
// O case DEFAULT é essencial para tratar valores inesperados

// ============================================
// 1. FUNÇÃO BÁSICA DO DEFAULT
// ============================================

console.log("=== 1. FUNÇÃO BÁSICA DO DEFAULT ===\n");

let tipo = "inválido";

switch (tipo) {
  case "string":
    console.log("É uma string");
    break;
  case "número":
    console.log("É um número");
    break;
  case "booleano":
    console.log("É um booleano");
    break;
  default:
    console.log("Tipo não reconhecido!");
}
// Saída: "Tipo não reconhecido!"

// ============================================
// 2. DEFAULT SEMPRE DEVE SER O ÚLTIMO
// ============================================

console.log("\n=== 2. POSIÇÃO DO DEFAULT ===\n");

// CORRETO: default no final
let valor = 10;

switch (valor) {
  case 5:
    console.log("É cinco");
    break;
  case 10:
    console.log("É dez");
    break;
  default:
    console.log("Outro valor");
}
// Saída: "É dez"

// TECNICAMENTE FUNCIONA MAS É MÁ PRÁTICA:
console.log("\nVariação (não recomendada):");
switch (valor) {
  default:
    console.log("Outro valor");
    break;
  case 5:
    console.log("É cinco");
    break;
  case 10:
    console.log("É dez");
    break;
}
// Saída: "É dez" (funciona porque tem break, mas é confuso)

// ============================================
// 3. QUANDO NÃO USAR DEFAULT
// ============================================

console.log("\n=== 3. CASOS SEM DEFAULT ===\n");

let acao = "editar";

// Se nenhuma ação corresponder e não há default,
// nada acontece (sem erro)
switch (acao) {
  case "criar":
    console.log("Criando novo item");
    break;
  case "deletar":
    console.log("Deletando item");
    break;
}
// Não imprime nada para "editar"

// ============================================
// 4. DEFAULT COM VALIDAÇÃO
// ============================================

console.log("\n=== 4. DEFAULT PARA VALIDAÇÃO ===\n");

function processar_mes(numero_mes) {
  let nome_mes;

  switch (numero_mes) {
    case 1:
      nome_mes = "Janeiro";
      break;
    case 2:
      nome_mes = "Fevereiro";
      break;
    case 3:
      nome_mes = "Março";
      break;
    case 4:
      nome_mes = "Abril";
      break;
    case 5:
      nome_mes = "Maio";
      break;
    case 6:
      nome_mes = "Junho";
      break;
    case 7:
      nome_mes = "Julho";
      break;
    case 8:
      nome_mes = "Agosto";
      break;
    case 9:
      nome_mes = "Setembro";
      break;
    case 10:
      nome_mes = "Outubro";
      break;
    case 11:
      nome_mes = "Novembro";
      break;
    case 12:
      nome_mes = "Dezembro";
      break;
    default:
      nome_mes = "Mês inválido";
  }

  return nome_mes;
}

console.log(processar_mes(5));  // "Maio"
console.log(processar_mes(13)); // "Mês inválido"
console.log(processar_mes(0));  // "Mês inválido"
console.log(processar_mes(-1)); // "Mês inválido"

// ============================================
// 5. DEFAULT COM TRATAMENTO DE ERRO
// ============================================

console.log("\n=== 5. DEFAULT TRATANDO ERROS ===\n");

function autenticar(usuario, senha) {
  let acesso;

  switch (usuario) {
    case "admin":
      if (senha === "123456") {
        acesso = "Acesso total concedido";
      } else {
        acesso = "Senha incorreta";
      }
      break;
    case "user":
      if (senha === "senha123") {
        acesso = "Acesso limitado concedido";
      } else {
        acesso = "Senha incorreta";
      }
      break;
    default:
      acesso = "Usuário não encontrado";
  }

  return acesso;
}

console.log(autenticar("admin", "123456")); // "Acesso total concedido"
console.log(autenticar("admin", "errada")); // "Senha incorreta"
console.log(autenticar("invasor", "123"));  // "Usuário não encontrado"

// ============================================
// 6. DEFAULT COM MÚLTIPLOS CENÁRIOS
// ============================================

console.log("\n=== 6. DEFAULT AGRUPANDO CASOS ===\n");

function classificar_idade(idade) {
  let categoria;

  switch (true) {
    case idade < 0:
      categoria = "Idade inválida";
      break;
    case idade >= 0 && idade <= 12:
      categoria = "Criança";
      break;
    case idade > 12 && idade <= 17:
      categoria = "Adolescente";
      break;
    case idade >= 18 && idade <= 64:
      categoria = "Adulto";
      break;
    case idade > 64:
      categoria = "Idoso";
      break;
    default:
      categoria = "Não foi possível classificar";
  }

  return categoria;
}

console.log(classificar_idade(-5));  // "Idade inválida"
console.log(classificar_idade(8));   // "Criança"
console.log(classificar_idade(15));  // "Adolescente"
console.log(classificar_idade(30));  // "Adulto"
console.log(classificar_idade(70));  // "Idoso"

// ============================================
// 7. EXEMPLO PRÁTICO: CALCULADORA COM VALIDAÇÃO
// ============================================

console.log("\n=== 7. CALCULADORA COM VALIDAÇÃO ===\n");

function calcular(num1, num2, operacao) {
  let resultado;

  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultado = "Erro: Divisão por zero não permitida";
      } else {
        resultado = num1 / num2;
      }
      break;
    case "%":
      if (num2 === 0) {
        resultado = "Erro: Módulo por zero não permitido";
      } else {
        resultado = num1 % num2;
      }
      break;
    default:
      resultado = `Erro: Operação '${operacao}' não reconhecida. Use: +, -, *, /, %`;
  }

  return resultado;
}

console.log(calcular(10, 5, "+")); // 15
console.log(calcular(10, 5, "-")); // 5
console.log(calcular(10, 5, "*")); // 50
console.log(calcular(10, 5, "/")); // 2
console.log(calcular(10, 3, "%")); // 1
console.log(calcular(10, 0, "/")); // "Erro: Divisão por zero não permitida"
console.log(calcular(10, 5, "^")); // "Erro: Operação '^' não reconhecida..."

// ============================================
// 8. MENSAGENS DESCRITIVAS NO DEFAULT
// ============================================

console.log("\n=== 8. MENSAGENS DESCRITIVAS ===\n");

function processar_pagamento(metodo) {
  let mensagem;

  switch (metodo) {
    case "credito":
      mensagem = "Processando pagamento com cartão de crédito...";
      break;
    case "debito":
      mensagem = "Processando pagamento com cartão de débito...";
      break;
    case "boleto":
      mensagem = "Gerando boleto...";
      break;
    case "pix":
      mensagem = "Gerando chave PIX...";
      break;
    default:
      mensagem = `Erro: Método de pagamento '${metodo}' não disponível.\n` +
                 `Métodos aceitos: credito, debito, boleto, pix`;
  }

  return mensagem;
}

console.log(processar_pagamento("credito")); // "Processando pagamento com cartão de crédito..."
console.log(processar_pagamento("bitcoin")); // Erro com métodos aceitos

// ============================================
// 9. BOAS PRÁTICAS COM DEFAULT
// ============================================

console.log("\n=== 9. BOAS PRÁTICAS ===\n");

/*
BOAS PRÁTICAS COM DEFAULT:

1. ✅ Sempre inclua um default quando apropriado
   - Protege contra valores inesperados
   - Facilita depuração
   - Melhora a robustez do código

2. ✅ Use mensagens descritivas no default
   - Ajude o desenvolvedor a entender o que aconteceu
   - Inclua exemplos de valores válidos

3. ✅ Trate o default como caso importante
   - Não o deixe vazio ou com console.log genérico
   - Retorne valores significativos

4. ✅ Posicione o default no final
   - Melhora a legibilidade
   - Segue convenções da linguagem

5. ✅ Considere logging no default
   - Registre valores inesperados para análise
   - Útil para identificar bugs

6. ❌ NÃO use default apenas para "não fazer nada"
   - Se nenhuma ação é necessária, não há problema
   - Mas considere se um log ou erro seria útil

7. ❌ NÃO deixe código crítico somente no default
   - O default deve ser um "último recurso"
   - Código importante deve ter seus próprios cases
*/

// ============================================
// 10. EXEMPLO REAL: SISTEMA DE STATUS
// ============================================

console.log("\n=== 10. EXEMPLO REAL: STATUS DE PEDIDO ===\n");

function obter_status_pedido(codigo_status) {
  let descricao;
  let acao_recomendada;

  switch (codigo_status) {
    case 1:
      descricao = "Pedido recebido";
      acao_recomendada = "Aguardando processamento";
      break;
    case 2:
      descricao = "Pedido processado";
      acao_recomendada = "Enviado para transportadora";
      break;
    case 3:
      descricao = "Em trânsito";
      acao_recomendada = "Pode rastrear com a transportadora";
      break;
    case 4:
      descricao = "Entregue";
      acao_recomendada = "Pedido finalizado";
      break;
    case 5:
      descricao = "Cancelado";
      acao_recomendada = "Reembolso em processamento";
      break;
    default:
      descricao = "Status desconhecido";
      acao_recomendada = "Entre em contato com o suporte";
  }

  return {
    status: descricao,
    acao: acao_recomendada
  };
}

console.log(obter_status_pedido(1));
// { status: 'Pedido recebido', acao: 'Aguardando processamento' }

console.log(obter_status_pedido(3));
// { status: 'Em trânsito', acao: 'Pode rastrear com a transportadora' }

console.log(obter_status_pedido(99));
// { status: 'Status desconhecido', acao: 'Entre em contato com o suporte' }
