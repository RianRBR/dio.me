class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade} `);
    }
}

const rian = new Pessoa('Rian', 24);
console.log(rian);  // Exibe o objeto no console
rian.descrever();   // Agora o método é chamado e exibe a mensagem
