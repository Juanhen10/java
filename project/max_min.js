// Escreva uma função que usa 2 númeris e retorna o maior entre eles

function max(n1, n2){
    if (n1 > n2){
        console.log(n1,'é maior que o', n2)
    }
    else if(n1 == n2){
        console.log('São iguais')
    }
    else{
        console.log(n2,'é maior que o', n1)
    }
}

max(10,1)
max(4,5)
max(10,10)