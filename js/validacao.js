function verificaValidacaoDoChute(chute) {
    const numero = +chute;
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido, use apenas numeros. Obrigado!</div>'
    }


    if(numeroMaiorOuMenor(chute)){
        elementoChute.innerHTML += `<div>Valor não se encontra dentro do escopo solicitado, O chute precisa ser entre ${menorValor} e ${maiorValor}!</div>`
    }

    if(acertou(numero)){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era -> ${numeroAleatorio}</h3>

        <button id="jogar-novamente" Class="btn-jogar">Jogar Novamente</button>
        `
    }else if(maior(numero)){
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-long"></i></div>
        `
    }else if(menor(numero)){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-long"></i></div>
        `
    }
}



function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

function acertou(numero){
    return numero === numeroAleatorio
}

function maior(numero){
    return numero < numeroAleatorio;
}
function menor(numero){
    return numero > numeroAleatorio;
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})