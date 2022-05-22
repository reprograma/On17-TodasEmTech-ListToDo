# On17-TodasEmTech-ProjetoListToDo

Na nossa Aula!

- Breve Revisão:
  - DOM;
  - Objetos;
  - Arrays;
  - Eventos;
- Iniciaremos o Projeto ToDoList


<br>


## Acordos

- Manter atenção nas explicações e codar nos momentos definidos a cada passo do projeto;
- Enviar dúvidas no chat para as monitoras ajudarem;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível para cada aluna!

## Informações gerais sobre o projeto

- Criaremos uma `To Do List`: uma lista para organizar tarefas;
- Este projeto tem como objetivo exercitar os conceitos aprendidos até aqui: Lógica, HTML, CSS e JavaScript;
- Não é permitido o uso de nenhuma biblioteca/framework para construção do projeto;
- Temos um layout que deve ser seguido, mas é permitido incrementar seu projeto para entregar; 

### Instruções:

##### 1. Entre no [repositório da aula](https://github.com/reprograma/On17-TodasEmTech-ListToDo) e crie um __fork__; _(isso criará uma cópia do repositório original no seu github)_

##### 2. Clone o repositório forkado para a sua máquina

   ```
   git clone <link do repositório forkado>
   ```

##### 3. Crie uma `branch` com o seu nome

   ```
   git checkout -b "seu-nome"
   ```

##### 4. Faça uma cópia da pasta projeto e a altere para o seu nome

  ```
    ├── README.md
    ├── projeto
    ├── nome-sobrenome
    |  

   ```
##### 5. Mãos na massa! <3

## Plano de aula

### 1. Revisão:

#### 1.1. Objetos

  _Criando um objeto:_

  ```
  const aluna = new Object()
  aluna.nome = "Raissa"
  aluna.curso = "frontend"
  aluna.cidade = "Recife"

  const monitora = {
    nome: "Carol",
    curso: "frontend",
    cidade: "Brasília",
  }
  ```

  _Acessando o valor de uma propriedade do objeto:_

  ```
  console.log(aluna.curso)
  console.log(monitora.nome)

  ```

  _Desestruturando um objeto:_

  ```
  const { nome, curso, cidade } = aluna
  ```
#### 1.2. Arrays

  _Criando uma array:_

  ```
  const alunas = ["Raissa, Analu, Beatriz, Simara"]
  const cidades = new Array('Recife', 'São Paulo', 'Manaus')
  const cursos = "frontend backend".split(' ')
  const tecnologias = Array.of('HTML', 'CSS', JS)
  ```

  _Acessando o valor de um elemento da array:_
  
  ```
    console.log(alunas[1])
  ```

  _Desestruturando um objeto:_

  ```
  const [ frontend, backend ] = cursos
  ```

  _Interando uma array (Métodos)_

  arrays para exemplos:
  ```
  const frutas = ['🍎', '🍇', '🍎', '🍌', '🍎', '🥑']
  ```

  `find:`

  ```
  const encontrarPrimeiro = frutas.find(element => element == 🍇')
  console.log(encontrarPrimeiro) // retorno 🍇
  ```

 `filter:`

  ```
  const filtrarPor = frutas.filter(element => element == "🍎")
  console.log(filtrarPor) // retorno ['🍎', '🍎', '🍎']
  ```

 `map:` 

  ```
  const executarTodos = frutas.map(element => element = "🍇")
  console.log(executarTodos) // retorno  ['🍇', '🍇', '🍇', '🍇', '🍇', '🍇']
  ```

 `forEach:`

  ```
  const verTodos = frutas.forEach(element => console.log(element))
  console.log(verTodos) // retorno  🍎🍇🍎🍌🍎🥑
  ```

#### 1.3. DOM
  

  __>__ DOM é uma sigla que significa Document Object Model. Quando a página é carregada o browser cria um objeto que representa os elementos da página a partir do HTML. A forma mais fácil de acessar e manipular o DOM é usando JavaScript.

  - Document: representa o documento HTML
  - Element:  são todas as tags que estão no arquivo HTML e se transformam em elementos da árvore DOM
  - Text: é o conteúdo de texto que vai entre os elementos (tags).
  - Attribute: são os todos atributos para um nó específico. Exemplos de atributos são o class, o src, o id, entre outros.
  
  __>__ O DOM é a representação do objeto do documento HTML e atua como uma interface de programação que permite a manipulação de sua estrutura com o JavaScript ou outras linguagens. Podemos manipular o DOM para realizar alterações na estrutura do HTML, alterar estilos, modificar conteúdos e adicionar diversos eventos.


#### 1.4. Eventos

Um eventos é um conjunto de ações que são realizadas em um determinado elemento da página web, seja ele um texto, uma imagem, ou uma div, por exemplo. Grande parte dos eventos nascem na interação da usuária com a aplicação.

Para manipular podemos usar Event listener que adiciona ou remove um evento sobre qualquer elemento. O Event Listener disponibiliza duas funções principais, são elas:

- **addEvent** - Adiciona uma função que será disparada quando ocorrer determinado evento no objeto.
- **removeEvent** - Remove um listener previamente adicionado em um objeto e retorna true em caso de sucesso.

  ```
  elemento.addEventListener('click', function (evento) {
    //ação a ser executada no clique do elemento
    console.log(evento);
  });
  ```

Usamos o método preventDefault() para cancelar a ação padrão que pertence a um determinado evento.

---

### 2. Projeto ToDoList

#### 2.1. Etapas

- __1.__ HTML 
  - [x] Já vai prontinho pra vcs se preocuparem apenas com a lógica;
- __2.__ CSS
  - [x] Já vai prontinho pra vcs se preocuparem apenas com a lógica;
  - __3.__ JavaScript
  - [x] __3.1__ Capturar dados de __Entrada__ da usuária;
  - [x] __3.2__ Adicionar itens na lista;
  - [x] __3.3__ Validar campo de texto para não entrar itens vazios ou somente com espaços;
  - [x] __3.4__ Limpar input após adicionar item;
  - [x] __3.5__ Marcar item como realizado;
  - [x] __3.6__ Poder excluir itens da lista individualmente;
  - [x] __3.7__ Limpar lista, excluir todos os itens da lista;
    
    ##### Para usar no projeto: 🔘 🟢 🟣 🗑
#### 2.2. Desafio

- Quando a usuária tentar criar uma tarefa com uma string vazia ou somente com espaços, criar uma mudança visual em vermelho no input e informar o erro no placehoder;
- Marcar e desmarcar todos os itens como feito trocando o nome do botão 'desmarcar todos'.

## Referências 

| Conteúdo      | Fonte              | Link                                                                                |
| ------------- | ------------------ | ----------------------------------------------------------------------------------- |
| Font Family   | Google Fonts       | https://fonts.google.com/specimen/Poppins?preview.size=33&query=po                  |
| Paleta cores  | flat UI colors     | https://flatuicolors.com/palette/ca                                                 |
| Objetos       | MDN                | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics            |
| Arrays        | MDN                | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Arrays        |
| DOM           | MDN                | https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model              |
| Eventos       | MDN                | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events    |

## Agradecimento:  

- [Professora Liliti]de quem usei o repositório do projeto da turma 10 como referência;

E todas as minhas professoras e amigas do {reprograma} com quem sempre aprendo ♥️
