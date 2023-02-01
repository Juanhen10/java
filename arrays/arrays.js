// JAVASCRIPT - INTRODUÇÃO A ARRAY
// Add novos elementos
// Encontrar elementos
// Remover Elmentos
// Dividir elementos
// dividir Arrays
// Combinar Arrays
function Linha(nome='▬'){
    console.log('▬▬▬▬▬▬▬▬▬▬▬' +nome.toLocaleUpperCase()+'▬▬▬▬▬▬▬▬▬▬▬▬')
};

Linha('ADD NOVOS ELEMENTOS')
//////////////////////ADD NOVOS ELEMENTOS///////////////////////// 
const numero = [1,2,3];
const nomes = ['juan']

////////////// Inicio /////////////
numero.unshift(0);
console.log(numero)
/////////////// Meio /////////////
numero.splice(1,0,'a')
console.log(numero);
////////////// Final///////////
numero.push(5);
console.log(numero);
nomes.unshift('Victor')
console.log(nomes)
nomes.splice(0,0,'larissa')
console.log(nomes)
nomes.push('Pedro')
console.log(nomes)
/////////////////// Encontrar elementos//////////////////////////
Linha('Encontrar elementos')
const num = [1,2,3,4,1];

console.log(num.indexOf(3));
console.log(num.lastIndexOf(1));
console.log( num.indexOf(2) !== -1);
console.log(num.includes(2))
/////////////////// Encontrar elementos (TIPOS REFERÊNCIA)//////////////////////////
Linha('tipos referencia')

const marcas = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'b'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
})
console.log(marca)
/////////////// ARROW FUNCTIONS ///////////////////////
Linha('ARROW FUNCTIONS')

const marcas1 = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'b'},
];

console.log(marcas1.find(( marca ) => marca.nome === 'a' ))
////////////// REMOVENDO ELEMENTOS DO ARRAY ///////////
Linha('REMOVENDO ELEMENTOS')

const numeros2 = [1,2,3,4,5,6];
numeros2.push();
numeros2.unshift();
numeros2.slice();
console.log(numeros2);

//FINAL
const ultimos = numeros2.pop();
console.log(ultimos);
console.log(numeros2);

//Inicio
const inicio = numeros2.shift();
console.log(inicio);
console.log(numeros2);

// Meio
const meio = numeros2.splice(2,1);
console.log(meio);
console.log(numeros2);
/////////////////////////ESVAZIANDO UM ARRAY\\\\\\\\\\\\\\\\\\
Linha('esvaziando array')

let n1 = [1,2,3,4,5,6];
let outros = n1;
// Solução 1
n1 = []; 
console.log(outros);

// Solução 2
n1.length = 0;
console.log(n1)

// Solução 3
n1.splice(0, n1.length);
console.log(n1)

// solução 4
// while (n1.length > 0)
    // n1.pop();

/////////// Combinando um array /////////
Linha('Combinando Array')
const primeiro = [{id:1}];
const segundo = [4,5,6];
primeiro[0].id = 10;

console.log(primeiro)
console.log(segundo)

const combinado = primeiro.concat(segundo) ;
console.log(combinado);

/// Dividir ///
const dividir = combinado.slice();
console.log(dividir);

