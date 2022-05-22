//Capturar entrada/elementos em variáveis

const novaTarefaInput = document.querySelector('#input_id');
//capturando o input
const botaoAdd = document.querySelector('#botao_add_id')
//capturando o botao de add
const listaDeTarefas = document.querySelector('#lista_id')
//captura a lista que vai guardar as tarefas
const modelo = document.getElementById('modelo_id')
//captura o esqueleto verginho da tarefa
const containerDeTarefas = document.getElementById('tarefas_id')
//container principal que guarda a lista (ul) das tarefas


//função de adicionar a partir do click da usuária, um evento
//mostrar que com o formulário e o evento de submit a tareda tb seria criada
botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault()
    
    const elementoLista = document.createElement('li')
    //cria o item d alista que não existe no HTML
    const textoTarefa = document.createElement('p')
    // cria o parágrafo que não existe no HTML
    const iconeDeleta = document.createElement('span')

    textoTarefa.innerText = novaTarefaInput.value
    //iguala o valor do parágrafo criado para ser igual ao valor digitado no input
    iconeDeleta.innerText = "🗑️" 
    //adiciona dentro do spam criado esse icone de lixeiro

    listaDeTarefas.appendChild(elementoLista)
    //elemento ul do HTML adotando o item da lista criado mais em cima
    elementoLista.appendChild(textoTarefa)
    // o item da lista adotando o texto criado a cima
    elementoLista.appendChild(iconeDeleta)
    //adota o lixeiro junto com o texto

    modelo.style.display = 'none'
    containerDeTarefas.style.display = 'block' 
})