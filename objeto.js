function Restaurante(nome, cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;
};

let outroRestaurante = new Restaurante('ConcorrenteA','CardapioRuim');

let meuRestaurante={
    nome: 'Cantina',
    cardapio: 'Pratos regionais',
    mensagem: function() {
        return 'Boas vindas '+ meuRestaurante.nome+' '+ meuRestaurante.cardapio;
    }
};


console.log(meuRestaurante.mensagem());
console.log(outroRestaurante.nome,outroRestaurante.cardapio);