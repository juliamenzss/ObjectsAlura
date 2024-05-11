const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript',
    bolsita: true,
    telefones: ['558399999998', '558399999992'],
    endereços: [{
        rua: 'prof adalgisa',
        numero: '45',
        bairro: 'centro'},
        {
        rua: 'prof manoel costa',
        numero: '600',
        bairro: 'manaira'
    }]
} ;

function exibirTelefones(tel1, tel2){
    console.log(`ligar para ${tel1}`);
    console.log(`ligar para ${tel2}`);
}

exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.endereços[0]
};

console.log(dadosEnvio);