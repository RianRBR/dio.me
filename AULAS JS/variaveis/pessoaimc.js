class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc(peso, altura) {
        return peso / Math.pow(altura, 2);
    }
    classificarImc(imc) {
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


}


const Rian = new Pessoa('Rian', 1.70, 70);
console.log("O IMC de Rian é de", Rian.calcularImc(70, 1.70), 'e ele está', Rian.classificarImc(Rian.calcularImc(70, 1.70)));