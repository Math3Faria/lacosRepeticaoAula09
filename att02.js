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
    let tentativaNum = parseInt(prompt(` Digite um número de 1 a 10:`));
    
    if (numAleatorio === tentativaNum) {
        alert(`Parabéns! Você acertou o número ${numAleatorio}`);
        break;
    }
    else {
        // Adiciona dica se é maior ou menor
        if (tentativaNum < numAleatorio) {
            alert(`Errou! O número é MAIOR que  ${tentativaNum}`);
        } else {
            alert(`Errou! O número é MENOR que  ${tentativaNum}`);
        }
        
        tentativaAtual++;
        
        if (tentativaAtual > tentativaMaximo) {
            alert(`Suas tentativas acabaram! Era o número ${numAleatorio}.`);
        }
    }
}