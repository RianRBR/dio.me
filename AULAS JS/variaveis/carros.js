/*class Carro {
    constructor(marca, cor, mediaKMporLitro) {
        this.marca = marca;
        this.cor = cor;
        this.mediaKMporLitro = mediaKMporLitro;
        this.valorLitroCombustivel = 15.29;
        this.distanciaViagem = 100;
    }

    calcularConsumo() {
        console.log(`Você consumirá com o carro ${this.marca} o valor de R$ ${(this.distanciaViagem / this.mediaKMporLitro * this.valorLitroCombustivel).toFixed(2)} nesta viagem de ${this.distanciaViagem} km`);
    }

}
const carro1 = new Carro('Fiat toro', 'Vermelho', 30);
carro1.calcularConsumo();*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.cor = cor;
        this.marca = marca;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoViagem(distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }

}
const carro1 = new Carro ('Fiat Toro', 'Vermelho', 1/12);
console.log("O valor gasto nesta viagem é de R$",carro1.calcularGastoViagem(70, 5));
const Palio = new Carro ('Fiat Palio', 'Vermelho', 1/10);
console.log("O valor gasto nesta viagem é de R$",Palio.calcularGastoViagem(70, 5));