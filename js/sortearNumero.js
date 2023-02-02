// trasnforma o numero em um inteiro
// parseInt()

// cria numeros pseudoAleatórios entre 0 e 1 sem contar o 1
// Math.random();
const menorValor = 1;
const maiorValor = 1000;
const numeroAleatorio = gerarNumeroAleaorio();

console.log(numeroAleatorio)

const elementoMenorValor = document.querySelector("#menor-valor");
const elementoMaiorValor = document.querySelector("#maior-valor");
elementoMaiorValor.innerHTML = maiorValor;
elementoMenorValor.innerHTML = menorValor;

function gerarNumeroAleaorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

