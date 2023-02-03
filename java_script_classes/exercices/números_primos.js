// Criar função para mostrar os números primos

// Primos
// Composto 

//Ex: 10, 11
// 10 (1 ou por ele mesmo)

exibirNumeroPrimos(15)
function exibirNumeroPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero)
    }
}

function NumeroPrimo(numero){
    for (let divisor =2;divisor < numero; divisor++){
        if(numero % divisor === 0) {
            return false;
        
        }
    }
    return true;
}