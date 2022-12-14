export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata!");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }
    
    get cliente(){
        return this._cliente;
    }
    
    //com get consegue visualizar o valor, mas não alterá-lo
    get saldo(){
        return this._saldo;
    }
    
    sacar(valor){
        throw new Error("O método sacar da conta é abstrato!")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return "Operação Inválida";
    }

    depositar(valor){
        if(valor <= 0)
        {
            return `Operação inválida`;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}