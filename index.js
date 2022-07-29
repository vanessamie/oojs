//Execução

import { Cliente } from "./Cliente.js";
import { Conta } from "./conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


//Definição dos dados pessoais dos clientes
const cliente1 = new Cliente("Vanessa", 2658964505, 529786302);

const cliente2 = new Cliente("Anne", 98625785462, 658942665);


//Definição dos dados bancários dos clientes
const conta1 = new Conta(0, cliente1, 1001);

const conta2 = new Conta(0, cliente2, 102);

const contaPoupanca = new Conta(500, cliente1, 1001);


//Transações

conta1.depositar(500);

conta1.transferir(200, conta2);

console.log(contaPoupanca);

console.log(conta1, conta2);

