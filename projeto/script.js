const novaTarefaInput = document.querySelector('#input_id')
const botaoAdd = document.querySelector('#botao_add_id')
const listaDeTarefas = document.getElementById('lista_id');
const modelo = document.getElementById('modelo_id')
const containerDeTarefas = document.getElementById('tarefas_id')
const form = document.getElementById('form_id')
const botaoLimpa = document.getElementById('botao_limpa_id');
const botaoMarca = document.getElementById('botao_marca_id');


botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault()

    const elementoLista = document.createElement('li')
    const textoTarefa = document.createElement('p')
    const iconeDeleta = document.createElement('span')


    if (novaTarefaInput.value.trim() === '') {

        novaTarefaInput.classList.add('erro');
        novaTarefaInput.placeholder = "Digite alguma tarefa!";

        novaTarefaInput.addEventListener('animationend', event => {
            novaTarefaInput.classList.remove('erro');
        })

    } else {

        textoTarefa.innerText = novaTarefaInput.value

        iconeDeleta.innerText = "🗑"


        listaDeTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)

        modelo.style.display = 'none'
        containerDeTarefas.style.display = "block"

        form.reset()
    }

    textoTarefa.addEventListener('click', () => {

        textoTarefa.classList.toggle('checked')
    })

    iconeDeleta.addEventListener('click', () => {
        elementoLista.remove()

        if (listaDeTarefas.innerText === '') {

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

botaoMarca.addEventListener('click', () => {
    let todasAsTarefas = document.querySelectorAll('p')

    if (botaoMarca.innerText === "Marcar todos") {
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.add("checked")
        })
        botaoMarca.innerText = "Desmarcar todos"
    } else {
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.remove("checked")
        })
        botaoMarca.innerText = "Marcar todos"
    }
})
