// JavaScript Constructor Function

// Criar um objeto postagem
// titulo, mensagem, autor, visualização, comentarios, estaAovivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor
    this.visualizacoes = 0
    this.comentarios = []
    this.estaAovivo = false
}

let postagem = new Postagem('Telefone', 'Alo', 'Juan')
console.log(postagem)
postagem.visualizacoes