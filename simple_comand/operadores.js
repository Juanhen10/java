//OPERADORES
//No javaScripts temos varios operadores logicos 
//nós temos variaveis e operadores que nos vão ajduar a criar expeções e com eles que vamos criar a logica para nossos aplicativos  
//
//Operadores Aritiméticos(matemáticos)
//Operadores Atribuição
//Operadores de Comparação
//Operadores de Lógicos
//Operadores Bitwise
//
//Operadores aritiméticos
// + , * , -, /, **
// ++ ,--(incremento)
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

let idade = 18;

//console.log(idade++);
//console.log(idade)
console.log(--idade)
console.log(idade)

console.log('-----2-----')

//operadores de atribuição
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer
console.log(valorTecladoGamer)

console.log('-----3-----')

//operadores de igualdade
// igualdade estrita
console.log(1 === 1);
console.log('1' === 1);
//Igualdade solta
console.log( 1 == 1);
console.log('1'== 1);

console.log('-----4-----')

//Operador ternario
//Tem um cliente, 100 premium, comum.
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'Comum';
console.log(tipo);

console.log('-----5-----')

//Operadores logicos
// operador Lógicos 'e' (&&)
// Returna TRUE se os dois operandos forem true
//console.log(true && true)

let mairoDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let e = mairoDeIdade && possuiCarteiraDeTrabalho;
console.log(e)

//Operador lógico ou (||)
//Retorna true se um dos operandos forem true
let ou = mairoDeIdade || possuiCarteiraDeTrabalho;
console.log(ou);

//Operador NOT (!)
let not = mairoDeIdade || possuiCarteiraDeTrabalho;
let candidatoRecusado = !not
console.log(candidatoRecusado)