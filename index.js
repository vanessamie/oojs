//Execução

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


//Definição dos dados pessoais dos clientes
const cliente1 = new Cliente("Vanessa", 2658964505, 529786302);

const cliente2 = new Cliente("Anne", 98625785462, 658942665);


//Definição dos dados bancários dos clientes
const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 1001;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;


//Transações

conta1.depositar(500);

conta1.transferir(200, conta2);


console.log(conta1, cliente2);