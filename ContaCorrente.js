import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;
    //#saldo deixa privado
    _saldo = 0;
    

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
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
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