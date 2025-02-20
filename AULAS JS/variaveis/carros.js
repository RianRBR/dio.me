class Carro {
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
carro1.calcularConsumo();