//JAvascript Aula 45 - Objeto Postagem de blog (exercicio)
// Eu quero que você crie neste exercício um objeto de postagem de blog que vai conter as seguintes propriedades

/*
titulo
mensagem
autor
visualizacoes
comentarios
    (autor, mensagem)
estarAoVivo
*/

let postagem = {
    titulo : 'carro',
    mensagem : 'autor',
    autor: 'juan',
    visualizacao : 456465,
    comentarios : [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estarAovivo : true
}

console.log(postagem)
