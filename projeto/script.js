
const botaoModificado = document.querySelector('.input_add');
//capturar entradas/elementos em variáveis
const novaTarefaInput = document.getElementById('input_id');
//capturando o input
const botaoAdd = document.querySelector('#botao_add_id');
//capturando o botao de add
const listaDeTarefas = document.getElementById('lista_id');
//capturando a lista que vai guardar as tarefas
const modelo = document.getElementById('modelo_id');

const containerDeTarefas = document.getElementById('tarefas_id');

const form = document.getElementById('form_id');

const botaoLimpa = document.getElementById('botao_limpa_id');

const botaoMarca = document.getElementById('botao_marca_id')

novaTarefaInput.addEventListener('input', (evento) => {
    evento.preventDefault()
    novaTarefaInput.placeholder = "Adicione uma tarefa"
    novaTarefaInput.style.backgroundColor = "#f3f3f3"
})


botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault()

    const elementoLista = document.createElement('li')
    const textoTarefa = document.createElement('p')
    const iconeDeleta = document.createElement('span')

   
    if (novaTarefaInput.value.trim() === '') {
        novaTarefaInput.value = ""
        novaTarefaInput.placeholder = "digite algo"
        novaTarefaInput.style.backgroundColor = "#ac494970"
    } else {
        textoTarefa.innerText = novaTarefaInput.value
        iconeDeleta.innerText = "🗑️"
        iconeDeleta.style.cursor = "pointer"
       
        listaDeTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)
    
        modelo.style.display = 'none'
        containerDeTarefas.style.display = 'block'
    
        form.reset()
    }

    textoTarefa.addEventListener('click',() => {
        
        // if(!textoTarefa.classList.contains('checked')){

        // textoTarefa.classList.add('checked')    
        // } else {
        //     textoTarefa.classList.remove('checked')

        // }
        textoTarefa.classList.toggle('checked')

    })

    iconeDeleta.addEventListener('click', ()=> {
        elementoLista.remove()

        if(listaDeTarefas.innerText === ''){
            modelo.style.display = "flex"
            containerDeTarefas.style.display = "none" 
        }
    })
})

botaoLimpa.addEventListener('click', () => {
    listaDeTarefas.innerHTML = ''
    modelo.style.display = 'flex'
    containerDeTarefas.style.display = 'none'
    botaoMarca.innerText = "Marcar todos"
}) 

botaoMarca.addEventListener('click', () => {
    if (listaDeTarefas.innerText === '') return
    let todasAsTarefas = document.querySelectorAll('p')
    if(botaoMarca.innerText === 'Marcar todos'){
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.add('checked')
        })  
        botaoMarca.innerText = "desmarcar todos"
    } else {
        todasAsTarefas.forEach((tarefa) =>{
            tarefa.classList.remove('checked')
        })
        botaoMarca.innerText = "Marcar todos"
    }
})

