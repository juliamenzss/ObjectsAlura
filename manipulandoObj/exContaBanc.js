const contaBancaria = {
    titular: "João",
    saldo: 100,
    depositar: function(valor) {
        this.saldo +=valor;
    },
    sacar: function(valor){
        if(valor <= this.salfo){
            this.saldo -= valor;
        } else {console.log("Saldo insuficiente.");}
    }
};

const cliente = {
    nome: "Carlos",
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo das conta: ${cliente.conta.saldo}`);
}

cliente.conta.depositar(500);
cliente.conta.sacar(200);

mostrarSaldo(cliente);