/*Calculo de desconto no pagamento */


function aplicarDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}

function aplicarJuros(valor, juros) {
    return valor + (valor * juros / 100);
}

const valorProduto = 200;
const qtdParcelas = 3;
const formaPagamento = 'credito';
/* Formas de pagamento: dinheiro, pix, credito, debito */

if (formaPagamento === 'debito') {
    console.log('O valor a ser pago no débito é:', aplicarDesconto(valorProduto, 10));
}
else if (formaPagamento === 'dinheiro') {
    console.log('O valor a ser pago no dinheiro é:', aplicarDesconto(valorProduto, 15));
}
else if (formaPagamento === 'pix') {
    console.log('O valor a ser pago no PIX é:', aplicarDesconto(valorProduto, 15));
}
else if (formaPagamento === 'credito' && qtdParcelas <= 2) {
    console.log('O valor a ser pago no crédito é:', valorProduto.toFixed(2));
}
else if (formaPagamento === 'credito' && qtdParcelas > 2) {
    console.log('O valor a ser pago é:', aplicarJuros(valorProduto, 10).toFixed(2));
}
else if (formaPagamento !== 'debito' && formaPagamento !== 'dinheiro' && formaPagamento !== 'pix' && formaPagamento !== 'credito') {
    console.log('Forma de pagamento inválida');
}


/*Calculo de desconto no pagamento */

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}  