//json - JavaScript Object Notation.
// Chaves e valores com o objetivo de transferir dados.

let name = "Eudes";
let age = 43;
let product = ["mouse", "keyboard", "monitor"];
let productsvalue = [100, 200, 300];

generateInvoice(name, age, product, productsvalue);

function generateInvoice(name, age, product, productsvalue){
    console.log("O comprador é: " + name);
    console.log("A idade do comprador é: " + age);
    console.log("Os produtos comprados são: " + product);
    console.log("Os valores dos produtos são: " + productsvalue);   
}

//JSON é uma forma de armazenar e transmitir dados entre sistemas, sendo muito utilizado em APIs e aplicações web. 
// Ele é baseado em texto e é fácil de ler e escrever para humanos, além de ser fácil de analisar e gerar para máquinas.

//JSON NA PRÁTICA

let jsonData = {
    "name": "Eudes",
    "age": 43,
    "products": [
        {
            "name": "mouse",
            "value": 100
        },
        {
            "name": "keyboard",
            "value": 200
        },
        {
            "name": "monitor",
            "value": 300
        }
    ]
};  

console.log("O comprador é: " + jsonData.name);
console.log("A idade do comprador é: " + jsonData.age);

for (let i = 0; i < jsonData.products.length; i++) {
    console.log("Produto: " + jsonData.products[i].name + ", Valor: " + jsonData.products[i].value);
}
