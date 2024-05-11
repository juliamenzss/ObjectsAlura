const pessoa = {
  nome: "Julia",
  turma: "A",
  notas: [8, 9, 8.5],
  calcularMedia: function () {
    const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
    const media = somaNotas / this.notas.length;
    return media.toFixed(2);
  },
  classificarDesempenho: function () {
    const media = this.calcularMedia();

    if (media >= 9) {
      return "Desempenho excelente";
    } else if (media >= 7.5 && media < 9) {
      return "Bom desempenho";
    } else if (media >= 6 && media < 7.5) {
      return "Desempenho regular";
    } else {
      return "Desempenho insuficiente";
    }
  },
};

const categoriaDesempenho = pessoa.classificarDesempenho();

const mediaCalculada = pessoa.calcularMedia();
console.log(`${pessoa.nome} tem media de notas de ${mediaCalculada} e sua categoria de desempenho é de ${categoriaDesempenho}`);
