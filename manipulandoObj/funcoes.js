const estudante = {
  nome: "Jose Silva",
  idade: 32,
  cpf: "12345678912",
  turma: "JavaScript",
  telefones: ["558399999998", "558399999992"],
  media: 6.5,
  estaAprovado: function (mediaBase) {
    return this.media >= mediaBase ? true : false;
  },
};
console.log(estudante.estaAprovado(7));