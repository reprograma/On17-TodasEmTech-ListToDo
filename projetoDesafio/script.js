
novaTarefaInput = document.querySelector("#input_id");
botaoAdd = document.querySelector("#botao_add_id");
const listaTarefas = document.querySelector("#lista_id");
const modelo = document.getElementById('modelo_id') 
const containerDeTarefas = document.getElementById('tarefas_id') 
const form =  document.getElementById('form_id')

const botaoLimpa = document.getElementById('botao_limpa_id'); 
const botaoMarca = document.getElementById('botao_marca_id'); 

botaoAdd.addEventListener('click', (evento) => {
  evento.preventDefault();

  console.log(botaoAdd)

  const elementoLista = document.createElement('li');
  const textoTarefa = document.createElement('p');
  const iconeDeleta = document.createElement('excluir');
  
  if(novaTarefaInput.value.trim() === '') {
    novaTarefaInput.classList.add('erro');
    novaTarefaInput.placeholder = "Digite alguma tarefa!";
    novaTarefaInput.addEventListener('animationend', evento => {
      novaTarefaInput.classList.remove('erro');
  
    })
    
  } else {
      textoTarefa.innerText = novaTarefaInput.value;
      iconeDeleta.innerText = "🗑"
  
      listaTarefas.appendChild(elementoLista);
      elementoLista.appendChild(textoTarefa);
      elementoLista.appendChild(iconeDeleta);
  
      modelo.style.display= 'none';
      containerDeTarefas.style.display= 'block';
  
      form.reset();
  
  }

  textoTarefa.addEventListener('click', () => {
    if(!textoTarefa.classList.contains('checked')){
      textoTarefa.classList.add('checked')
    } else {
      textoTarefa.classList.remove('checked')
    }
  })
  iconeDeleta.addEventListener('click', () => {
    elementoLista.remove()
    if(listaTarefas.innerText === ''){
      modelo.style.display="flex"
      containerDeTarefas.style.display='none'
    }

})


});

botaoLimpa.addEventListener('click', () => {
  listaTarefas.innerHTML = ''
  modelo.style.display='block'
  containerDeTarefas.style.display='none'
})

botaoMarca.addEventListener('click', () => {
  let todasAsTarefas = document.querySelectorAll('p')

  if(botaoMarca.innerText === "Marcar todas"){
    todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.add('checked')
    })
    botaoMarca.innerText = 'Desmarcar todas'
  } else {
    todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.remove('checked')
    })
    botaoMarca.innerText = "Marcar todas"
  }

})

