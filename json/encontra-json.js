const estudante = require('./estudantes.json');

function buscaInfos(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}
const estudanteEncontrado = buscaInfos(estudante, 'nome', 'Juliet')
console.log(estudanteEncontrado);


const telefoneEstudante = buscaInfos(estudante, 'telefone', "51993301028")
console.log(telefoneEstudante);