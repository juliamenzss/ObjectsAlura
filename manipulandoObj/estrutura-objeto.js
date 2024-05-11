const estudante = {
    nome: 'Jose Silva',
    idade: 32,
    cpf: '12345678912',
    turma: 'JavaScript'
}
// propriedade é conjunto de chave e valor, e o objeto é smp composto por isso
// notação de ponto, o nome é a propriedade
console.log(estudante.nome);
console.log(`O nome do aluno é ${estudante.nome} e os trÊs primeiros números do CPF dele é ${estudante.cpf.substring(0, 3)}`);