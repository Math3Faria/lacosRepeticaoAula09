alert("Gerando número aleatório, tente acertá-lo, você terá três tentativas:");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let numAleatorio = getRandomInt(1, 10);
let tentativaAtual = 1;
let tentativaMaximo = 3;
console.log(numAleatorio);

while (tentativaAtual <= tentativaMaximo) {
    let tentativaNum = parseInt(prompt(`Digite um número de 1 a 10:`));

    if (numAleatorio == tentativaNum) {
        alert(`Parabéns! Você acertou o número ${numAleatorio}`);
        tentativaAtual = tentativaMaximo + 1;
    }
    else {
        alert(`Número ta errado. Tente novamente.`);
        tentativaAtual++;

        if (tentativaAtual > tentativaMaximo) {
            alert(`Acabaram suas tentativas kkkk era:  ${numAleatorio}.`);
        }
    }
}