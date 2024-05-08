const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript'
}

// atraves da notação de colchete conseguimos passar o dado como uma variável ou parametro

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));