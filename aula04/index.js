let nome = "Valdemar"
let idade = 32 
let eMaiorDeIdade = true

//Posso usar somente o atributo nome, pois ele tem o mesmo valor que uma variável declarada. Portanto atributo igual a variável,
//podemos simplificar deixando somente o nome, pois ao mesmo tempo será o atributo e o valor da variável
let pessoa = {
nome: nome,
idade: idade,
eMaiorDeIdade: eMaiorDeIdade,
}
//console.log(pessoa.nome)

let animais = ['Cachorro', 'Gato', 'Leão', 'Cobra']

let numero1 = 10
let numero2 = 5
let resultadoSomma = numero1 + numero2
let resultadosubtracao = numero1 - numero2
let resultadoDivisao = numero1 / numero2
let resultadoMultiplicacao = numero1 * numero2
console.log('O resultado da soma 10 + 5 é = ' + resultadoSomma)
console.log('O resultado da subtração 10 - 5 é = ' + resultadosubtracao)
console.log('O resultado da Divisão 10 / 5 é = ' + resultadoDivisao)
console.log('O resultado da Multiplicação 10 * 5 é = ' + resultadoMultiplicacao)

if (numero1 > numero2){
    console.log('O Número ' + numero1 + ' é maior que ' + numero2)
}else {
console.log('O Número ' + numero2 + ' é maior que ' + numero1)
}