let numerosPrimos=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];

 let numeros=[0,1,4,6,8,9,10,12,14,15,16,18,20,21,22,24,25, ...numerosPrimos];

function maiorNumeros(...numeros) {
    return Math.max(...numeros);    
};

console.log(maiorNumeros(15,4,7,96,57));