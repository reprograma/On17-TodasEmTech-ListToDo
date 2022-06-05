// ------------ Objeto ------------
// propriedades - chaves: valor.

// propriedades - chave: valor,
const usuario = {
    login: 'azul',
    senha: '',
    foto: '',
    bio: 'andar()',
}

const aluna = new Object()

aluna.nome = 'Raissa'

// console.log(aluna);


// console.log(usuario.login);

const monitora = {
    nome: 'Jaque',
    cidade: 'Bahia',
};

const { nome } = monitora;

// console.log(nome);





// ------------Array--------------

// Dentre os tipos de dados no temos o array, que é uma lista, que é amplamente utilizada e de criação simples
// [1, 2, true, 'água']

// Dentre os tipos de dados no temos o array, que é uma lista, que é amplamente utilizada e de criação simples
// [1, 2, true, 'água']

const frutas = ['🍎', '🍇', '🍎', '🍌', '🍎', '🥑'] // eu consigo iterar sobre esse array; oque é iterar; 

// console.log(frutas[4]); 

const frutaEscolhida = frutas.find((elementoNoArray) => elementoNoArray === '🍌')

////console.log(frutaEscolhida);

//const executarEmTodos = frutas.map((elemento) => elemento  ('corte cada fruta em 10')

//[mçanEm10, uvaEm10, maEm10, bananEM10, .....]




// O acesso de cada elemento dentro do array se da pelo index,sabendo qual a posição daquele elemento na lista
// Esse array pode ser com tipos de dados diferentes no javascript
// [1, 2, true, 'água']
//  0  1    3     4

const conta = [15, 10, 3, 19]
const initialValue = 0;
const sumWithInitial = conta.reduce(
  (previousValue, currentValue )=> previousValue + currentValue,
  initialValue
);
// console.log(sumWithInitial);



// Existem muitos Métodos já implementados para manipular os arrays
// push(), pop(), find(), filter(), map(), forEach()...



// ------------DOM--------------------

// HTML convertido num objeto java
// exemplo no mundo real da campainha 
// API DOM do tipo arvore criada pelo browser, o JS usa DOM para manipular o HTML
// Criar um elemento e capturar com as meninas mostrar no console
// getElementByClassName() - HTMLCollection - colecao de elemntos do HTML que possuem aquela classe 
// getElementByTagName() - HTMLCollection
// getElementById() - Element tras o elemento completo do HTML e com isso vc já consegue acessar as propriedades disponiveis daquele elemento como valor 
// querySelector() - Element pega o primeiro que ele achar e vc precisade clarar o tipo do seletor na hora de escrever
// querySelectorAll() - NodeList - coleção de nós, uma lista com todos os elementos que contem aquele seletor, e eu consigo utilizar os métodos de array nele
// 
// const elements = document.querySelectorAll('one')     elements.forEach(element => console.log(element))
// A necessidade do uso varia pela forma que vc precisa acessar o dado

const titulo = document.querySelectoraAll(".myclass")
    console.log('------', titulo);
const id = document.getElementById('lala')
console.log(id);

const botao = document.createElement('button')
botao.appendChild(id)





// -----------Eventos------------------
// Muito direcionada a eventos ,acoes realizadas do browser

//funtion clique() {
   // console.log('cliquei');

   function cliquei2() {
    console.log('cliquei');
  

}



