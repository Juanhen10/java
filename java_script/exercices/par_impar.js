// Receber uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar
function par_impar(num){
    for (let i = 0; i <= num; i++){
    if (i % 2 === 0)
        console.log(i,'Par')
    else
        console.log(i,'impar')}
}
par_impar(20)
