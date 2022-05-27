// ------------ Objeto ------------

const usuario = {
  login: 'roxo',
  senha: 'senha',
  foto: 'foto',
  bio: 'andar()',
}

const aluna =  new Object()

aluna.nome = 'Mayara'

console.log(aluna);

console.log(usuario.login);

const monitora = {
  nome : 'Jaque',
  cidade : 'Bahia',
};

const { nome } = monitora;

console.log(nome);
// ------------Array--------------

// Dentre os tipos de dados no temos o array, que é uma lista, que é amplamente utilizada e de criação simples
// [1, 2, true, 'água']
const frutas = ['maça', 'banana', 'abacate', 'melão', 'amora'];//01234

console.log(frutas[3]);//qual a fruta da posição 3


const frutasEscolhida = frutas.find((elementoNoArray) => elementoNoArray  === 'banana')

console.log(frutasEscolhida);

const executarEmTodos = frutas.map((elemento) => console.log(elemento));

// O acesso de cada elemento dentro do array se da pelo index,sabendo qual a posição daquele elemento na lista
// Esse array pode ser com tipos de dados diferentes no javascript
// [1, 2, true, 'água']
//  0  1    3     4
const conta = [15, 10, 7, 35]
const initialValue = 0;
const sumWithInitial = conta.reduce(
  (previoisValue, currentValue) => previoisValue + currentValue, initialValue
);
console.log(sumWithInitial);

// Existem muitos Métodos já implementados para manipular os arrays
// push(), pop(), find(), filter(), map(), forEach()...



// ------------DOM--------------------
const titulo = document.querySelector('.titulo');

titulo.style.color = 'red';
console.log('O DOM é demais', titulo);


// -----------Eventos------------------


function cliquei(){
  console.log('Você clicou')
}
