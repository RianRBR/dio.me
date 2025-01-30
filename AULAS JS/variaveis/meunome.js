function escrevaMeuNome(nome) {
    //console.log(nome);
    return nome = "Rian";
}



function verificarIdade(idade) {
    if (idade <= 17)
        return escrevaMeuNome() + ' é menor de idade';
    else if (idade >= 18 && idade <= 119)
        return 'Maior de idade';
    else (idade < 0 && idade > 120)
    return 'Idade inválida';
}
console.log(verificarIdade(16));