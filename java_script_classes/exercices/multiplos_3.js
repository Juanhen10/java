// Criar função somar que retorna a 
// soma dew todos os múltiplos de 3 e 5

// multiplos de 3
// 3,6,9
// multiplos de 5
// 5,10

// somando os multiplos 
// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os dois

somar(10)
function somar(limite){
    let multiplode3 = 0;
    let multiplode5 = 0;
    for(i = 0; i<= limite; i++){
        if(i % 3 == 0)
        multiplode3 += i;
        if( i % 5 == 0)
        multiplode5 += i;

    }
    console.log(multiplode3 + multiplode5)
}
