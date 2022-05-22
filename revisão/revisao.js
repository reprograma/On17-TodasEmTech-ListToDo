// ------------ Objeto ------------
// propriedades - chave: valor,
const usuario = {
    login:'azul',
    senha: '',
    foto:'',
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
const frutas = ['🍎', '🍇', '🍎', '🍌', '🍎', '🥑'] // eu consigo iterar sobre esse array; oque é iterar; 

// console.log(frutas[4]); 

const frutaEscolhida = frutas.find((elementoNoArray) => elementoNoArray  === '🍌' )

console.log(frutaEscolhida);

const executarEmTodos = frutas.map((elemento) => console.log(elemento))

[mçanEm10, uvaEm10,maEm10, bananEM10]


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
console.log(sumWithInitial);


// Existem muitos Métodos já implementados para manipular os arrays
// push(), pop(), find(), filter(), map(), forEach()...



// ------------DOM--------------------
const titulo =  document.querySelectorAll(".myclass");
console.log('--------', titulo);
const id = document.getElementById('lala')
console.log(id);

const botao = document.createElement('button')
botao.appendChild(id)



// -----------Eventos------------------
function cliquei2() {
    console.log('cliquei');
  
  }


