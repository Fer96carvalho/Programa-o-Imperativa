// 1- Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com 
// apenas números ímpares.

const { reduce } = require("lodash");

let numerosPares =[0,2,4,6,8,10,12,14,16,18,20]

let numerosImpare = numerosPares.map(function(num){
    return num + 1
});

console.log(numerosImpare);

// 2- Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter 
// apenas esses dois índices com o nome Maria.

let nomes=['Maria','Paulo','Vivian','Sergio','Maria','Eduardo','Gustavo']

let marias= nomes.filter(function(nome){
    return nome =='Maria'
});

console.log(marias);

// 3= Crie um array de números e utilize a função .reduce() para devolver uma string com os
//números formatados.

let numeros= [15,48,96,2,72,31,62,8,4,5,465,]

let retorno = numeros.reduce(function( acumulador , numero ) {
    return  acumulador  +  "-"  +  numero ;

});

console.log(retorno);

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e
// imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais=['Golfinho','Aguia','Cobra','Vaca','Machorro','Macaco']

let QualOAnimal = animais.forEach(function(animal){
     console.log("O animal é ",animal)
});

console.log(QualOAnimal);



