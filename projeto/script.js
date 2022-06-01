//Capturar entradas/elementos em variáveis

const novaTarefaInput = document.querySelector('#input_id')
// capturando o input
const botaoAdd = document.querySelector('#botao_add_id')
// capturando o botão de add
const listaDeTarefas = document.getElementById('lista_id'); 
// capturando  a lista que vai guardar as tarefas
const modelo = document.getElementById('modelo_id') // captura o esqueleto verdinho da tarefa 
const containerDeTarefas = document.getElementById('tarefas_id') 
// contianer principal que guarda a lista (ul) das tarefas
const form = document.getElementById('form_id')
//capturando formulário
const botaoLimpa = document.getElementById('botao_limpa_id'); // capturando o botão "marcar limpar lista"

const botaoMarca = document.getElementById('botao_marca_id'); // capturando o botão "marcar todas"

// função de adicionar a partir do click da usuária, um evento
//  mostrar que com o formulário e o evento de submit a tarefa tb seria criada
botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault()

    const elementoLista = document.createElement('li') // cria o item da lista que nao existe no HTML
    const textoTarefa = document.createElement('p') // cria o paragrafo que nao existe no HTML
    const iconeDeleta = document.createElement('span')
    // cria o item da lista que nao existe no HTML


if(novaTarefaInput.value.trim() === '') {
  // alert("digite alguma tarefa")


  novaTarefaInput.classList.add('erro');//adiciona classe erro ao elemento novaTarefa (input) - a classe está no css.
  novaTarefaInput.placeholder = "Digite Alguma Tarefa Senhora!"
  // novaTarefaInput.setAttribute("placeholder", "campo obrigatório"); ---- é outra forma de add no placeholder
  
  novaTarefaInput.addEventListener('animationend', evemt =>{
      novaTarefaInput.classList.remove ('erro');
  })

} else {
    

    textoTarefa.innerText = novaTarefaInput.value 
    // iguala dentro do parágrafo criado para ser igual ao valor digitado no input
    iconeDeleta.innerText = "🗑️"
    // adiciona dentro do spam criado esse icone de lixeiro


    listaDeTarefas.appendChild(elementoLista) //elemento ul do HTML adotando o item da lista craido mais em cima
    elementoLista.appendChild(textoTarefa) // o item da lista adotando o texto criado mais em cima 
    elementoLista.appendChild(iconeDeleta) // o item da lista tb adota o lixeiro junto com o texto

    modelo.style.display = 'none'
    containerDeTarefas.style.display = "block" // coloca  div de tarefas com display block para elas aprarecerem na tela por padrao tudo tem display block no html
     
    form.reset()// reseta o formulário para não aparecer no input o ultimo texto
}

textoTarefa.addEventListener('click', () => {

    if(!textoTarefa.classList.contains('checked')) {
      // verifica se o paragrafo da tarefa criada não tem a classe checked e então adiciona
     textoTarefa.classList.add('checked')
    } else {
        textoTarefa.classList.remove('checked')
    } 
   // textoTarefa.classList.toggle('checked') //forma mais simples de fazer 

})

iconeDeleta.addEventListener('click', () => {
    elementoLista.remove()

    if(listaDeTarefas.innerText === '') {
        // se o container de tarefas estiver vazio
    

     modelo.style.display = 'flex' // remove o display none do esquelo e coloca um flx para aparecer em tela
     containerDeTarefas.style.display = 'none' // remove o container de tarefas da tela
    }
})


})

botaoLimpa.addEventListener('click', () => {
 
   listaDeTarefas.innerHTML = ''
   // OUTRA OPÇÃO ListaDeTarefas.remove()
   modelo.style.display = 'flex'
   containerDeTarefas.style.display = 'none'
})

// função para marcar todas as tarefas:
botaoMarca.addEventListener('click', () =>{
  let todasAsTarefas = document.querySelectorAll('p')
  //pega todos os paragrafos do container de tarefas criadas.

  if(botaoMarca.innerText === "Marcar todos") {
      todasAsTarefas.forEach((tarefa) => {
          tarefa.classList.add("checked")
          
      })
      botaoMarca.innerText = 'Desmarcar todos'
    } else { 
        todasAsTarefas.forEach((tarefa)=>{
            tarefa.classList.remove("checked")
        })
        botaoMarca.innerText= "Marcar todos"
    }
})