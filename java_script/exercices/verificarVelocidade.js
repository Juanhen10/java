// Velocidade máxima de 70
// a cada 5km acima do limite você ganha 1 ponto
// math. florr
// caso pontos maior que 12 ->"carteira Suspendida"

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const Km = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok')
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima)/ Km);
        if (pontos >= 10)
            console.log('Carteira Suspensa');
        else
            console.log('levou pontos:', pontos);
    }


}

console.log(verificarVelocidade(130))