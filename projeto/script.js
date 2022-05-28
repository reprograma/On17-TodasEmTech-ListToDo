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
const form =  document.getElementById('form_id')
// capturando meu formulário
const botaoLimpa = document.getElementById('botao_limpa_id'); 
// botao de limpar tudo
const botaoMarca = document.getElementById('botao_marca_id'); 
// botao de marcar tudo


botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault()

    const elementoLista = document.createElement('li') 
    const textoTarefa = document.createElement('p') 
    const iconeDeleta = document.createElement('span')
 

    if(novaTarefaInput.value.trim() === '') {
        alert("digite seus jobs aqui :)") 

    
    novaTarefaInput.classList.add('erro');
    novaTarefaInput.setAttribute("placeholder", "Campo obrigatório"); 
    novaTarefaInput.placeholder = "Digite alguma tarefa!"; 

    novaTarefaInput.addEventListener('animationend', event => { 
      novaTarefaInput.classList.remove('erro');
    })

    } else {

        textoTarefa.innerText = novaTarefaInput.value 
        iconeDeleta.innerText = "🗑️"
    
        listaDeTarefas.appendChild(elementoLista) 
        elementoLista.appendChild(textoTarefa) 
        elementoLista.appendChild(iconeDeleta) 

        modelo.style.display = 'none'
        containerDeTarefas.style.display = "block" 

        form.reset() 
    }

    textoTarefa.addEventListener('click', () => {

         if(!textoTarefa.classList.contains('checked')) {
         textoTarefa.classList.add('checked')
         } else {
             textoTarefa.classList.remove('checked')
         } 

        textoTarefa.classList.toggle('checked') 

    })

    iconeDeleta.addEventListener('click', () => {
        elementoLista.remove()

        if(listaDeTarefas.innerText === '') {
        
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

  if(botaoMarca.innerText === "Marcar tudo ✅") { 
    todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.add("checked")
    })
    botaoMarca.innerText = "Desmarcar tudo ❌"
  } else {
    todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.remove("checked")
    })
    botaoMarca.innerText = "Marcar tudo ✅"
  }
}) 