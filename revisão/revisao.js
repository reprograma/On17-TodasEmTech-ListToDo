const aluna = new Object()
aluna.nome = "Nayara"
aluna.curso = "frontend"

//objeto ->  chave: valor

const monitora = {
  nome: "Thiele",
  curso: "frontend"
}

monitora.cidade = "Barueri"

// console.log(monitora.cidade)
// console.log(aluna.curso)

const { nome, cidade } = monitora

// console.log(cidade)
//Arrays -> [0, 1, 2, 3, 4, 5, 6, 7]

const alunas = Array.of('Julia', 'Celina', 'Bruna')
const cursos = ['frontend', 'backend']

const alfabeto = "ABCDE"

const arrayAlfabeto = alfabeto.split('')

const arrayPalavras = "oi minha gente".split('')

// console.log()

// function somar(numero) {
//   return console.log(numero + numero)
// }

// somar(2)

const frutas = ['🍎', '🍇', '🍎', '🍌', '🍎', '🥑']

// console.log(frutas.length) //length é propriedade, trás informações
// métodos possuem (), executam alguma coisa

// callback

const encontrarElemento = frutas.find((elemento) => elemento == '🍌')
const FiltrarPor = frutas.filter((elemento) => elemento == '🍎')
const executarEmTodos = frutas.map((fruta) => fruta = "🍇" )
const verTodos = frutas.forEach((fruta) => console.log(fruta)) 

console.log(verTodos)
console.log(frutas)


// function callbackFind(elemento) {
//   return elemento == "🍎"
// }



// const numeros = [1, 2, 3, 4]

// const nova = numeros.map(numero => numero * 2)

// console.log(nova)


.innerText

document.querySelector()