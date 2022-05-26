
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

//funcao de add a partir do click o evento que mostrara o formulario 

novaTarefaInput.addEventListener('input', (evento)=> {
    evento.preventDefault()
    console.log(evento.target.value)

    if(evento.target.value != ''){
        botaoModificado.style.backgroundColor = '#c8d6e5'
        botaoModificado.placeholder = "Adicione uma tarefa";
    }

})

botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault()

    const elementoLista = document.createElement('li')
    const textoTarefa = document.createElement('p')
    const iconeDeleta = document.createElement('span')

    console.log(novaTarefaInput.value)
    if (novaTarefaInput.value.trim() === '') {
        novaTarefaInput.value = ""
        botaoModificado.placeholder = "digite apenas caracteres";
        botaoModificado.style.backgroundColor = '#d27171';
        
    } else {
        textoTarefa.innerText = novaTarefaInput.value
        iconeDeleta.innerText = "🗑️"
    
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
})