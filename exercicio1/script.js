// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.
//let coxinha = prompt("Deseja comer mais coxinhas? S para sim e N para não").toLowerCase()
let preco = 2.5

while (prompt("Deseja comer mais coxinhas? S para sim e N para não").toLowerCase() === "s") {
    //coxinha = prompt("Deseja comer mais coxinhas? S para sim e N para não").toLowerCase()
    preco = preco + 2.5
}
console.log(`O preço foi de ${preco} reais`)

