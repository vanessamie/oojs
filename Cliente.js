export class Cliente{

    get cpf(){
        return this._cpf;
    }

    get rg(){
        return this._rg;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
}