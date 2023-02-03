// Exercício 43 - Igualdade de Objetos (exercícios=)

function endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new endereco('a','b','c')
const endereco2 = new endereco('a','b','c')

function saoiguais(endereco1, endereco2) {
    if (endereco1 === endereco2){
        console.log('endereco iguais')
    return true
    }
}

let sao = saoiguais(endereco1, endereco2)
console.log(sao)

