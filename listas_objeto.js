const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    telefones: ['558399999998', '558399999992'],
    endereço: [{
        rua: 'prof adalgisa',
        numero: '45',
        bairro: 'centro',
    }]
}


estudante.endereço.push({
    rua: 'Joao antonio',
    numero: '3',
    bairro: 'centro'
})
// console.log(estudante.endereço);
// console.log(estudante.endereço[1]);

const listaEnderecoComComplemento = estudante.endereço.filter((endereco) => endereco.bairro)

console.log(listaEnderecoComComplemento)