class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }
    classificarImc() {
        const imc = this.calcularImc();
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


const Rian = new Pessoa('Rian', 1.76, 80);
console.log("O IMC de Rian é de", Rian.calcularImc(70, 1.70), 'e ele está', Rian.classificarImc(Rian.calcularImc(70, 1.70)));




class Pessoa { nome; idade; constructor(nome, idade) { 
    this.nome = nome; this.idade = idade; } 
    descrever() 
    { console.log(`Nome: ${this.nome}; Idade: ${this.idade};`); 
} } new Pessoa('Renan', 30).descrever(); 