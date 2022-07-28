
//Verifica número primo!
// Números primos são números divisíveis por 1 e ele mesmo.

let numeroTeste = parseInt(Math.random() * 100);

function verificaNumeroPrimo(numero) {
    let ehPrimo = `${numero} é número primo!`;
    for(let i = 2; i < numero; i++){
        if(numero % i === 0) {
            ehPrimo = `${numero} não é um número primo`;
        }
    }
    return ehPrimo;
}

console.log(`Número sorteado: ${numeroTeste}`);
console.log(verificaNumeroPrimo(997));
