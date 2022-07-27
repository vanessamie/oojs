/*
console.log("Trabalhando com variáveis");

const idade = 35;

console.log(idade);
*/

// Operadores Aritméticos
/*
console.log('Operações Aritméticas');

let a = 50;

let b = 2;

let somaNumeros = a + b;

let subtraiNumeros = a - b;

let multiplicaNumeros = a * b;

let divideNumeros = a / b;

console.log(somaNumeros);
console.log(subtraiNumeros);
console.log(multiplicaNumeros);
console.log(divideNumeros);

*/
/*
console.log('Concatenando informações ' + 2022);

*/
/*
console.log('Conversão de Tipos');

console.log('2' + '2');

console.log(parseInt('2') + 2);

*/

/*
console.log('Atribuição de Variáveis');

let nome;
nome = 'Vanessa';
const sobrenome = 'Nishda';

console.log(nome, sobrenome);
//==
console.log(nome + " " + sobrenome);
//==
console.log(`${nome} ${sobrenome}`);
//== (reatribuindo a variável nome)
nome = nome + sobrenome;

console.log(nome);

*/

// console.log(`Trabalhando com listas`);


// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos possíveis:`);
// console.log(salvador, saoPaulo, rioDeJaneiro);
// ==

const destinosPossiveis = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// destinosPossiveis.push(`Curitiba`); //adicionando destinos de forma dinâmica
// destinosPossiveis.push(`Belo Horizonte`);
// destinosPossiveis.push(`Manaus`);

// destinosPossiveis.splice(1,1) //remove um item específico - segunda posição, 1 elemento

// console.log(destinosPossiveis);

// retorno
// [
//   'Salvador',
//   'Rio de Janeiro',
//   'Curitiba',
//   'Belo Horizonte',
//   'Manaus'
// ]


// console.log(destinosPossiveis.includes(`Rio de Janeiro`));

// retorno
//true

console.log(`Condicionais`)

const idadeComprador = parseInt(Math.random() * 100);
console.log(`A idade do comprador é ${idadeComprador}`);

let estaAcompanhada = false;

let temPassagemComprada = false;

const destino = `Curitiba`;

// if(
//     idadeComprador >= 18 || 
//     estaAcompanhada
//     ) {
    //     console.log(`Boa Viagem`)
    //     destinosPossiveis.splice(2,1);
    //     console.log(destinosPossiveis)
    // }else {
        //     console.log(`Comprador não é maior de idade e não está acompanhado, não posso vender`)
        // }
        
console.log(`Loops`)
        
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

// let contador = 0;
let destinoExiste = false;

// while(contador < 3) {
//     if(destinosPossiveis[contador] == destino) {
//         console.log(`O destino existe`);
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }

// console.log(`Destino existe? ${destinoExiste}`)

for(let cont = 0; cont < destinosPossiveis.length; cont++) {
    if(destinosPossiveis[cont] == destino) {
        destinoExiste = true;
    }
    console.log(`Pode viajar!`)
}