// Criar um objeto endereco que contem:
// Rua
// Cidade
// Cep
// ExibirEndereco

let Rua = 'Av.Brasil'
let Cidade = 'São Paulo'
let Cep = '54545'

function ExibirEndereco (nomeRua, nomeCidade, numCep) {
    console.log(`Rua =${nomeRua}
CIDADE = ${nomeCidade}
CEP = ${numCep}`);

};

ExibirEndereco(Rua, Cidade, Cep);

console.log('-------------')

let endereco = {
    rua: 'a',
    cidade1: 'b',
    cep1: 'c'
};

function exibirEndereco2(endereco) {
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}

exibirEndereco2(endereco)