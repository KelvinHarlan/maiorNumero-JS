//ça um Programa que leia três números e mostre o maior deles.
let maior = 0
function MaiorNumero() {
    for (numero in numeros) {
        let comparacao = (numeros[numero])
        if (comparacao > maior) {
            maior = comparacao
        }
    }
    console.log(`você escolheu os número '${numeros}', o maior entre eles é: O número ${maior}`)
}

MaiorNumero(numeros = [5,1,2,10,2])