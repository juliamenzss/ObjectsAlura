const gatoMaisVelho = {
    nome: 'Apollo',
    classe: 'gato',
    cor: 'Preto e Branco',
    idade: 2,
    irmãoMaisNovo: {
        nome: 'Chico',
        idade: '10 meses',
    },
    status: 'dormindo'
}
delete gatoMaisVelho.irmãoMaisNovo
console.log(gatoMaisVelho);

delete gatoMaisVelho['status'];
console.log(gatoMaisVelho);
console.log(gatoMaisVelho.status);