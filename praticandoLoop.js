// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console
// a mensagem “Olá mundo”.
console.log("1- Repetir como um papagaio")
for (let papagaio=1 ; papagaio<=5; ++papagaio){
    console.log("Olá mundo")
}

//Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares.
//Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das 
// repetições no console.

console.log("2- Contando números ímpares")

for (let i=1; i<=10; i++){
    if (i%2 !== 0) { // Tive que ver um video sobre operadores para relembrar como faz para destacar os numeros impares.
        console.log(i)
    }
}

console.log("3- Criando a Tabuada")

for (let i= 1; i<11; i++){
    console.log("Tabuada do", i);
    for (let j = 1; j < 11; j++){
        console.log(i+'x'+j+"="+(i*j)) //Tive que pesquisar para saber como seria feita a sintaxe da calculadora nessa ultima impressão
    }
}