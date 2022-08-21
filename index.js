//Execução

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


//Definição dos dados pessoais dos clientes
const cliente1 = new Cliente("Vanessa", 2658964505, "987654");

const cliente2 = new Cliente("Anne", 98625785462);


//Definição de gerente e diretor

const diretor = new Diretor("Rodrigo", 10000, 32684597260);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 26859482620);
gerente.cadastrarSenha("321654");


//Sistema de autenticação

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "321654");

const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, "987654")


//Definição dos dados bancários dos clientes
const conta1 = new ContaCorrente(cliente1, 1001);

const contaPoupanca = new ContaPoupanca(500, cliente2, 102);


const contaSalario = new ContaSalario(100, cliente1, 1001);
//Transações

// conta1.depositar(500);

// conta1.sacar(100);

//conta1.transferir(200, contaPoupanca);

// contaPoupanca.sacar(100);

// console.log(conta1, contaPoupanca);

// contaSalario.sacar(10)

// console.log(contaSalario)



console.log(diretorEstaLogado, gerenteEstaLogado);