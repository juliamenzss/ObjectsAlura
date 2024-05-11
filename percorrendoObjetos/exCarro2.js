const carro = {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 2010,
    cor: "Prata",
    ligado: true,
    ligar: function () {
        if(!this.ligado) {
            this.ligado = true;
            console.log("O carro esta ligado.");
        } else{
            console.log("O carro já esta ligado.");
        }
    },
    desligar:function(){
        if(this.ligado) {
            this.ligado = false;
            console.log("O carro está desligado.");
        } else{
            console.log("O carro já está desligado.");
        }
    },
    obterDetalhes: function(){
        const estado = this.ligado ? 'ligado' : 'desligado';
        return `Detalhes do carro: marca: ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}, cor ${this.cor}`
    }
}
carro.ligar(); 
carro.desligar(); 
carro.desligar(); 
carro.ligar(); 
console.log(carro.obterDetalhes());