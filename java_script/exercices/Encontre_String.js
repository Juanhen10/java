// criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto
const filme = {
    titulo: 'vingadores',
    anos: 2018,
    diretor: 'Robin',
    personagem: 'thor'

};
exibirPropriedade(filme)
function exibirPropriedade(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
        console.log(prop, obj[prop])
}