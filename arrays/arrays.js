// JAVASCRIPT - INTRODUÇÃO A ARRAY
// Add novos elementos
// Encontrar elementos
// Remover Elmentos
// Dividir elementos
// dividir Arrays
// Combinar Arrays


//////////////////////ADD NOVOS ELEMENTOS///////////////////////// 
const numero = [1,2,3];
const nomes = ['juan']

////////////// Inicio /////////////
numero.unshift(0);
// console.log(numero)
/////////////// Meio /////////////
numero.splice(1,0,'a')
// console.log(numero);
////////////// Final///////////
numero.push(5);
// console.log(numero);
nomes.unshift('Victor')
// console.log(nomes)
nomes.splice(0,0,'larissa')
// console.log(nomes)
nomes.push('Pedro')
// console.log(nomes)

/////////////////// Encontrar elementos//////////////////////////
const num = [1,2,3,4,1];

console.log(num.indexOf(3));
console.log(num.lastIndexOf(1));
console.log( num.indexOf(2) !== -1);
console.log(num.includes(2))