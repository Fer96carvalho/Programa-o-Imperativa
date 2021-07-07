

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
    else if (tempo>=padrao && tempo<9padrao*2)){
        console.log('Prato pronto, bom apetite!!!')
    }
    else if (tempo>=(padrao*2) && tempo<(padrão*3)){
        console.log('A comida queimou')
    }
    else if (tempo>=(padrao*3)){
        console.log('Kabum!!!')
    }
}

Microondas("Pipoca",10);
Microondas("Macarrao",22);
Microondas("Feijao",22);
