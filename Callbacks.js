function andar(){
    console.log('O carro está andando.');
};
function parar(){
    console.log('O carro parou.');
};

function acaoCarro(callback) {
    return callback();
};

acaoCarro(andar);
acaoCarro(parar);