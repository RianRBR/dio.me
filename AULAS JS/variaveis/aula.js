
/*Viagem de carro*/

/*
const preco_combustivel = 5.79;
const kmPorLitro = 12;
const valorUmLitro = kmPorLitro/preco_combustivel;
const distancia_percorrida = 1580;
const valor_da_viagem = distancia_percorrida/kmPorLitro*preco_combustivel;

console.log('O valor gasto em 1km é: ',valorUmLitro,'L/km')             
console.log('O valor gasto em toda a viagem é:','R$',valor_da_viagem.toFixed(2));
a*/

/*Par ou Impar*/

const numero = 27;
const numeroPar = (numero % 2) === 0;


if (numero === 0){
    console.log('Esse número é inválido')
}
else if (numeroPar) {
    console.log('Sou Par')
}
else{
    console.log('Sou Impar')
}