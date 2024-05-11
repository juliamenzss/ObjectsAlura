// // infoPessoa.js
// const pessoa = {
//     nome: "Ana",
//     idade: 25,
//     solteiro: true,
//     hobbies: ["Leitura", "Caminhada", "Fotografia"]
// };

// function mostrarInfoPessoa(pessoa) {
//     console.log("Informações da Pessoa:");
//     console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
//     console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
//     console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
//     console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
// }

// // Chamada da função mostrarInfoPessoa
// mostrarInfoPessoa(pessoa);

// listaPessoas.js

//array de objetos
const listaPessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
];

function mostrarListaPessoas(pessoas){
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
        
    });
};
function filtrarPorCidade(pessoas,cidade){
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

listaPessoas.push({ nome: "Luana", idade: 40, cidade: "Salvador" })
mostrarListaPessoas(listaPessoas);

const pessoasSalvador = filtrarPorCidade(listaPessoas, "Salvador");
console.log("Pessoas em Salvador:");
console.log(pessoasSalvador);