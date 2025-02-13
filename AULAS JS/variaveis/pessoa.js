class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = new Date().getFullYear() - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade} e nasci em ${this.anoDeNascimento}`);
    }
}


const rian = new Pessoa('Rian', 24);
//console.log(rian);  // Exibe o objeto
rian.descrever();   // Chama o método para exibir a mensagem
