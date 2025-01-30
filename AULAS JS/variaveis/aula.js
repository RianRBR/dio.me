
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

/*const numero = 27;
const isnumeroPar = (numero % 2) === 0;


if (numero === 0){
    console.log('Esse número é inválido')
}
else if (isnumeroPar) {
    console.log('Sou Par')
}
else{
    console.log('Sou Impar')
}*/


/*Gasto édio etanol e gasolina

const precoEtanol = 5.89;
const precoGasolina = 6.39;
const tipoCombustivel = 'gasolina';
const kmPorLitroEtanol = 12;
const kmPorLitroGasolina = 15;
const distanciaEmKmDaViagem = 987;
const valorGasto = 0;

if (tipoCombustivel === 'etanol') {
    const valorGasto = distanciaEmKmDaViagem / kmPorLitroEtanol * precoEtanol;
    console.log('O valor gasto é R$:', valorGasto.toFixed(2));
} else if (tipoCombustivel === 'gasolina') {
    const valorGasto = distanciaEmKmDaViagem / kmPorLitroGasolina * precoGasolina;
    console.log('O valor gasto é R$:', valorGasto.toFixed(2));
} else {
    console.log('Tipo de combustível inválido');
} */


/*Média de aluno
const nota1 = 10;
const nota2 = 8.7;
const nota3 = 9;
const media = (nota1 + nota2 + nota3) / 3;


if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
    console.log('Alguma nota inválida')
}
console.log('A média é:', media.toFixed(2));

if (media < 5) {
    console.log('Reprovado.')
} else if (media >= 5 && media < 7) {
    console.log('Recuperação')
} else  if(media >= 7){
    console.log('Aprovado')
} else if(media > 10){
    console.log('Nota inválida')
}*/



/*Calculo de desconto no pagamento */

/*
const valorProduto = 200;
const qtdParcelas = 3;
const formaPagamento = 'dinheiro';*/
/* Formas de pagamento: dinheiro, pix, credito, debito */
/*
if (formaPagamento === 'debito') {
    console.log('O valor a ser pago no débito é:', (valorProduto * 0.9).toFixed(2));
} 
else if (formaPagamento === 'dinheiro') {
    console.log('O valor a ser pago no dinheiro é:', (valorProduto * 0.85).toFixed(2));
} 
else if (formaPagamento === 'pix') {
    console.log('O valor a ser pago no PIX é:', (valorProduto * 0.85).toFixed(2));
} 
else if (formaPagamento === 'credito' && qtdParcelas <= 2) {
    console.log('O valor a ser pago no crédito é:', valorProduto.toFixed(2));
} 
else if (formaPagamento === 'credito' && qtdParcelas > 2) {
    console.log('O valor a ser pago é:', (valorProduto * 1.1).toFixed(2));
} else if (formaPagamento !== 'debito' && formaPagamento !== 'dinheiro' && formaPagamento !== 'pix' && formaPagamento !== 'credito') {
    console.log('Forma de pagamento inválida');
} 
*/

/*Calculo de desconto no pagamento */

/*function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(800, 12));*/

/*calcular imc*/

function calcularImc(peso, altura) {
    return  peso / Math.pow(altura, 2);
    
}
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.99) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.99) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 39.99) {
        return 'Obesidade';
    } else if (imc >= 40) {
        return 'Obesidade grave';
    }
}
function main() {
    const peso = 79;
    const altura = 1.76;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
main();
