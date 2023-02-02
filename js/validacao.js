function verificaValidacaoDoChute(chute) {
    const numero = +chute;
    if(chuteForInvalido(numero)){

        if(fimDeJogo(chute)){
            document.body.innerHTML = `
            <h1>Fim De Jogo</h1>
            <h3>Recarregue a pagina para começar</h3>
            <button id="jogar-novamente" Class="btn-fim-de-jogo">Jogar Novamente</button> 
            `;
            document.body.classList.toggle('fim-de-jogo');            
        }else{
            elementoChute.innerHTML += '<div>Valor invalido, use apenas numeros. Obrigado!</div>'
        }
        
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

function fimDeJogo(chute){
    return chute ==='Fim de jogo'

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