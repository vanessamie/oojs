//Execução

import { Cliente } from "./Cliente.js";
import { Conta } from "./conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


//Definição dos dados pessoais dos clientes
const cliente1 = new Cliente("Vanessa", 2658964505, 529786302);

const cliente2 = new Cliente("Anne", 98625785462, 658942665);


//Definição dos dados bancários dos clientes
const conta1 = new ContaCorrente(cliente1, 1001);

const contaPoupanca = new ContaPoupanca(500, cliente2, 102);

const conta2 = new Conta(0, cliente2, 102)
//Transações

conta1.depositar(500);

conta1.sacar(100);

//conta1.transferir(200, contaPoupanca);

contaPoupanca.sacar(100);

console.log(conta1, contaPoupanca, conta2);





