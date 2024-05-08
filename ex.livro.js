// const livro = {
//     titulo: 'O menino Maluquinho',
//     autor: 'Ziraldo',
//     anoPublicacao: 1995,
//     genero: 'Infanto Juvenil'
// }

// function idadePublicacao(anoPublicacao){
// const anoAtual = new Date().getFullYear();
// return anoAtual - anoPublicacao;
// }
// console.log(idadePublicacao(livro.anoPublicacao));

// livro.idadePublicacao = idadePublicacao(livro.anoPublicacao);
// console.log(livro);

// const livro2 = {
//     titulo: 'O menino Maluquinho',
//     autor: 'Ziraldo',
//     anoPublicacao: 1995,
//     genero: 'Infanto Juvenil'
// }
// console.log(livro2['titulo']);
// console.log(livro2['genero']);


const livro3 = {
  titulo: "O menino Maluquinho",
  autor: "Ziraldo",
  anoPublicacao: 1995,
  genero: "Infanto Juvenil",
  idadePublicacao: 29,
};
livro3.avaliacao = null;

// livro.js
const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: null, // Nova propriedade para armazenar a avaliação
};

// Adicionando uma avaliação fictícia ao objeto livro
const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro.avaliacao === null) {
    livro.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
}

// Exibindo detalhes do livro, incluindo a avaliação
console.log("Detalhes do Livro:");
console.log("Título: " + livro.titulo);
console.log("Autor: " + livro.autor);
console.log("Ano de Publicação: " + livro.anoPublicacao);
console.log("Gênero: " + livro.genero);
console.log("Idade de Publicação: " + livro.idadePublicacao + " anos");
console.log("Avaliação: " + (livro.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro.avaliacao.nota + ", Comentário: \"" + livro.avaliacao.comentario + "\""));

function subirAvaliacao() {
  let nota = 4.9;
  if (livro3.avaliacao === null) {
    livro3.avaliacao = nota;
    return 'Avaliação dada com sucesso.'
  } else {
    console.log("O livro já tem uma avaliação.");
  }
}
console.log(subirAvaliacao());
console.log(livro3);

const livro4 = {
    titulo: "O menino Maluquinho",
    autor: "Ziraldo",
    anoPublicacao: 1995,
    genero: "Infanto Juvenil",
    idadePublicacao: 29,
  };
  livro4.genero = 'Aventura';
  console.log(livro4.genero);

  delete livro4.idadePublicacao;
  console.log(livro4);