const carro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 2010,
    cor: "Prata",
    ligado: true
}
for(let property in carro){
    console.log(`${property}:${carro[property]}`);
}

carro.cambio = "Manual";

console.log("Propriedades atualizadas:");
for (let property in carro) {
  console.log(`${property}: ${carro[property]}`);
}

