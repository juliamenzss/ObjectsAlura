const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsita: true,
    telefones: ['558399999998', '558399999992']
    // endereços: [{
    //     rua: 'prof adalgisa',
    //     numero: '45',
    //     bairro: 'centro'},
    //     {
    //     rua: 'prof manoel costa',
    //     numero: '600',
    //     bairro: 'manaira'
    // }]
} ;
//mostra todas as chaves do objeto -- existe tbm o Object.value
const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

//ve se o objeto tem uma chave especifica
if (!chavesObjeto.includes('endereços')){
    console.error('é necessario ter um enderço cdastrado.')
}