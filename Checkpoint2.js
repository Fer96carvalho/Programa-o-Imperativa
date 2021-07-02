

function Microondas(prato,tempo){
    switch (prato) {
        case "Pipoca":
           padrao=10
            break;
        case "Macarrao":
            padrao=8
            break;
        case "Carne":
            padrao=15
            break;
        case "Feijao":
            padrao=12
            break;
        case "Brigadeiro":
            padrao=8
            break;
        default:
            console.log('Prato não existente')
    }
    if (tempo<padrao) {
        console.log('Tempo insuficiente!!')
    }
    else if (tempo=padrao){
        console.log('Prato pronto, bom apetite!!!')
    }
    else if (tempo=2*padrao){
        console.log('A comida queimou')
    }
    else if (tempo=3*padrao){
        console.log('Kabum!!!')
    }
}

Microondas("Pipoca",10)