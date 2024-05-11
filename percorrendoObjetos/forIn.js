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
}  

for(let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}` 
        console.log(texto);
    }
}
