//camelCase - umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('fazendo ligação...')
        }
    }
}


//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("fazendo lugação...")
    }
}

const celular = new Celular('asus', 5.5,5000);
console.log(celular)


function Game(nome, genero, preco, duracao){
    this.genero = nome,
    this.preco = genero,
    this.preco = preco,
    this.duracao = duracao,
    this.gaming = function(){
        console.log('SEU JOGO')
    }
};

const game = new Game('the last of us', 'ação', 300, 90)
console.log(game)