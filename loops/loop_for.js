// laço for/loop for
//estutura de repetição
//conosle.log('estou aprendendo")
//conosle.log('estou aprendendo")
//conosle.log('estou aprendendo")

// 1 -  for
// 2 -  while
// 3 -  do..while
// 4 -  For in
// 5 -  For..of

//1, for
for(let i = 1; i < 5; i++){
    if (i%2 != 0){
        console.log(i)
    }
}

//while loop
let i = 5;

while (i >=1){
    if(i % 2 !==0){
        console.log(i);
    }
    i --;
}

//do...while
let a = 0;
do {
    console.log('digitando!');
    i ++;
}   while (a < 10)

//for..in
const pessoa = {
    nome: 'Juan',
    idade: 20
};

//key-value
for(let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['vermelho', 'azul']
for (let indice in cores){
    console.log(indice, cores[indice]);
}
//for..of
for (let cor of cores){
    console.log(cor);
}