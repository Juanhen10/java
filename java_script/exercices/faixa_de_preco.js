// JavaScript Aula 47 - Faixa de Preço (exercicio)
// é que você crie um arry de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre

//priemira opcao
let faixa = [
    {tooltip: 'até R$700', minimo:0, maximo:700},
    {tooltip: 'de R$700 a R$1000', minimo:700, maximo:1000},
    {tooltip: 'de R$1000 ou mais ', minimo:1000, maximo:99999},
];

// segunda opção (factory function)
function criaFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criaFaixaPreco('a',10,1500),
    criaFaixaPreco('b',1500,2000),
    criaFaixaPreco('c',2000,2500)
]




// Terceira opcao (constructor Function)


function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo

}

let faixa3 = [
    new FaixaPreco('d', 10,20),
    new FaixaPreco('e', 30,40),
    new FaixaPreco('f', 50,60)
];

console.log(faixa)
console.log(faixa2)
console.log(faixa3)