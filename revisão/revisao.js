// ------------ Objeto ------------


// propriedade  - chave: valor,
const usuário = {
    login: 'azul',
    senha: '',
    foto: '',
    bio: 'andar',
    
};

const aluna = new Object()

aluna.nome = 'Catharine'

console.log(aluna);

console.log(usuário.login);

const monitora = {
    nome: 'jaque',
    cidade: 'bahia',
};

// metodo desentruturado: qual propriedade voce quer? "nome" puxa o nome e depois pergunta "da onde?" é monitora
const { nome } = monitora

console.log(nome);



// ------------Array--------------

// Dentre os tipos de dados no temos o array, que é uma lista, que é amplamente utilizada e de criação simples
// [1, 2, true, 'água']

const frutas = ['maça', 'uva', 'banana', 'abacate'] // eu consigo iterar sobre esse array.

// console.log(frutas[3]);

const frutaEscolhida = frutas.find((elementoNoArray) => elementoNoArray === 'banana')

console.log(frutaEscolhida);

//const executarEmTodos = frutas.map((elemento) ==> console.log(elemento))

//[maçaEm10, uvaEm10, bananaEm10, abacateEm10]



// O acesso de cada elemento dentro do array se da pelo index,sabendo qual a posição daquele elemento na lista
// Esse array pode ser com tipos de dados diferentes no javascript
// [1, 2, true, 'água']
//  0  1    3     4

// a conta no bar
//const conta = [15, 10, 3, 19]
//const valorInial = 0;
//const valorApagar = conta.reduce {
//    (previousValue, currentValue) => previousValue + currentValue, initialValue)
//}

// Existem muitos Métodos já implementados para manipular os arrays
// push(), pop(), find(), filter(), map(), forEach()...



// ------------DOM--------------------


const titulo = document.querySelectorAll('.titulo')
console.log(titulo);
const id = document.getElementById('lala')
console.log(id)

// um meio que uso para criar um elemento no html
const botao = document.createElement('button')
botao.appendChild(id)

// -----------Eventos------------------

// muito direcionada a eventos, ações realizadas do brownser

function clique() {
    console.log('cliquei');
}

//function duploClique() {
//    console.log('cliquei2');
//}

