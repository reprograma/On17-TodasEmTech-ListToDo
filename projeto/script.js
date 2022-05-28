// Capturara entradas/elemntos em variaveis

const novaTarefaInput = document.querySelector('#input_id');
// capturando o input
const botaoAdd = document.querySelector('#botao_add_id');
//capturando o botao
const listaDeTarefas = document.getElementById('lista_id');
//capturando a lista que vai guardar as tarefas
const modelo = document.getElementById('modelo_id');
//captura o esqueleto verdinho da tarefa
const containerDeTarefas = document.getElementById('tarefas_id');
//container principal que guarda a lista (ul) das tarefas
const form = document.getElementById('form_id');
// capturando meu formulário
const botaoLimpa = document.getElementById('botao_limpa_id');
//captura o botão 'marcar limpar lista'
const botaoMarcar = document.getElementById('botao_marca_id')
// captura o botão 'Marcar todos'
//const naoMarcados = document.getElementsByClassName('non-checked');


// função de adicionar a partir de click da usuária, um evento 
// Mostrar que com o formulário e o evento de submit a tarefa tb seria criada

botaoAdd.addEventListener( 'click', (evento) =>{
  evento.preventDefault()

   const elementoLista = document.createElement('li')
  //cria o item da lista que não existe no HTML
  const textoTarefa = document.createElement('p')
  //cria o paragrafo que não existe no HTML
  const iconeDeleta = document.createElement('span')
  //cria o item da lista que não existe no HTML



  if(novaTarefaInput.value.trim() === ''){

//------------------DESAFIO 1 -----------
 /*Quando a usuária tentar criar uma tarefa com uma string vazia ou somente com espaços, criar uma mudança visual em vermelho no input e informar o erro no placehoder*/
 novaTarefaInput.classList.add('erro');
 novaTarefaInput.style.backgroundColor = 'rgb(185, 103, 103)';
 novaTarefaInput.setAttribute("placeholder" , "Campo Obrigatorio")


  } else {

    novaTarefaInput.classList.remove('erro');
    novaTarefaInput.style.backgroundColor = 'white';
    novaTarefaInput.setAttribute("placeholder", "Adicione uma tarefa")

    textoTarefa.innerText = novaTarefaInput.value
  //iguala dentro do parágrafo criado para ser igual ao valor digitado no input
  iconeDeleta.innerText = "🗑️"
  // adiciona dentro do spam criado esse icone de lixeiro

  listaDeTarefas.appendChild(elementoLista)
  // elemento ul do HTML adotando o item da lista criada mais em cima
  elementoLista.appendChild(textoTarefa)
  // o item da lista adota o texto criado mais em cima
  elementoLista.appendChild(iconeDeleta)
  // o item da lista também adota o emoticom lixo junto com o texto

  modelo.style.display = "none"
  containerDeTarefas.style.display = "block"
  //coloca div de tarefas com display block para elas aparecerem na tela por padrão tudo tem display block no HTML

  form.reset()
  // Reseta o formulário para não aparacer no input o ultimo texto

 }

  textoTarefa.addEventListener( 'click', () => {

    if(!textoTarefa.classList.contains('checked')){
      //verifico se o paragrafo da tarefa criada não tem a classe checked e então adiciona
      textoTarefa.classList.add('checked')
    } else {
        textoTarefa.classList.remove('checked')
    }

   // textoTarefa.classList.toggle('checked') //forma simples de fazer 

  })

   iconeDeleta.addEventListener( 'click', ()=>{
     elementoLista.remove()

     if(listaDeTarefas.innerText === ''){
       // se o container de tarefas estiver vazio
       modelo.style.display = "flex" 
       //remove o display none do esqueleto e coloca um flex para aparecer em tela
       containerDeTarefas.style.display = "none"
       // remove o container de tarefas da tela 
     }
   })

})
botaoLimpa.addEventListener( 'click', ()=>{
  listaDeTarefas.innerHTML = ''
  modelo.style.display = "flex"
  containerDeTarefas.style.display = "none"
})  
//------------DESAFIO 2 -----------------
//Marcar e desmarcar todos os itens como feito trocando o nome do botão 'desmarcar todos'.
  botaoMarcar.addEventListener( 'click', ()=>{
    const todasAsTarefas  = document.querySelectorAll('li > p')
   if(botaoMarcar.innerText === "Desmarcar todos"){

    todasAsTarefas.forEach((item)=>{
      item.classList.remove('checked')
    })
    botaoMarcar.innerText = "Marcar todas"
   } else {
    todasAsTarefas.forEach((item)=>{
      item.classList.add('checked')
    })
    botaoMarcar.innerText = "Desmarcar todos"
   }



   // naoMarcados.classList.replace('non-checked', 'checked')
    //  novaTarefaInput.classList.toggle('checked')*/

  })