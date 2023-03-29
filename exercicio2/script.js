// # Exercício 2

// Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```
let numero = Number(prompt("Digite um número"))
let multiplicador = 0
let multiplicacao
while (multiplicador <= 9) {
    multiplicador++
    multiplicacao = multiplicador * numero
    console.log(multiplicacao)
}
// while(multiplicador <=9){
//     multiplicador++
//     numero = numero * multiplicador
//     console.log(numero)
// }
for (let i = 1; i <= 10; i++) {
    console.log(`${numero * i}`)
}
