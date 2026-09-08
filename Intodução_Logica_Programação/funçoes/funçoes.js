// conceito de função
function soma(a, b) {
    return a + b;
}

torrar("pão de forma"); // chamando a função
torrar("pão francês"); // chamando a função 

function torrar(pao) { // função com parâmetro
    console.log(`torrada feita com ${pao}`); // template string
}

/*
interessante notar que a função torrar foi chamada antes de ser declarada, isso é possível porque o JavaScript 
faz o hoisting das funções, ou seja, ele "move" a declaração da função para o topo do escopo, permitindo que ela 
seja chamada antes de sua definição no código.
*/

// função com parâmetro e retorno
torrar("pão de forma", "João"); // chamando a função

function torrar(pao, nome) {
    return `torrada feita com ${pao} para ${nome}`;
}