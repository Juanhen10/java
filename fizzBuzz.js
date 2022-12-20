// Divisível por 3 ==> Fizz
// Divisível por 5 ==> Buzz
// Divisivel por 5 e 3 ==> FizzBuzz
// Não divisível por 3 ou 5 ==> entrada
// Não é um número ==>'Não é um  número' 
function fizzBuzz(n1){
    if (typeof n1 !== 'number')
    return 'Não é um número';
    if (n1 % 3 === 0 && n1 % 5 === 0)
        return 'FizzBuzz';
    if (n1 %  3 === 0)
        return 'Fizz';
    if (n1 % 5 === 0)
        return 'Buzz';
    return n1;
}

const resultado = fizzBuzz(15)
console.log(resultado)