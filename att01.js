let numInicial = parseInt(prompt("Digite um número inteiro inicial"));
let numFinal = parseInt(prompt("Digite um número inteiro final"));
if (numFinal < numInicial) {
    let temp = numInicial
    numInicial = numFinal
    numFinal = temp
    for (let incremento = numInicial; incremento <= numFinal; incremento++) {
        if (incremento % 2 === 0) {
            console.log(`Numero: ${incremento}`);
        }
    }
}