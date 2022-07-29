import { Cliente } from "./Cliente.js";
import { Conta } from "./conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    //#saldo deixa privado

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0
        ContaCorrente.numeroDeContas += 1;
    }

}