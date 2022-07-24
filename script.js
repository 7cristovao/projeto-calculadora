let visore = []

function desligar(){
    visor.innerHTML = ''
}
function limpar(){
    visor.innerHTML = ''
}
function ligar(){
    visor.innerHTML = ''
}

let num

function entrada(num){
    visor.innerHTML = visor.innerHTML + num
}

function enter(){
    num = ""
    visore.push(Number(parseFloat(visor.innerHTML = visor.innerHTML + num)))
    visor.innerHTML = ''
}

function somar(){
    let soma = 0
    for (i = 0; i < visore.length; i++){
        soma += visore[i]
    }
    visor.innerHTML = soma
    //return soma
}

function subtrair(){
    let subtracao = 0 //Inicializar subtração com algum valor
    if(visore.length > 0) subtracao = visore[0]; //Se o vetor tem length > 0, use o primeiro valor. Isso vai permitir que você lide com matrizes de comprimento único
    for(let i = 1; i < visore.length;i++){
        subtracao -= visore[i]; //subtraia para cada outro elemento
    }
    visor.innerHTML = subtracao;
     //return subtracao
}

function multiplicar(){
    let produto = 1;

    for (let i = 0; i < visore.length; i++) {
        produto *= visore[i];
    }

    visor.innerHTML = produto
    //return produto
}

/*
function dividir(){
    debugger
    let divisao = 0
    for (i = 0; i < visore.length; i++){
        divisao2 = divisao / visore[i]

    }
    visor.innerHTML = divisao2
    //return divisao
}
*/







