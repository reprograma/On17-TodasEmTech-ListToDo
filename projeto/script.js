//capturar entradas/elementos em variaveis

const novaTarefaInput = document.querySelector('#input_id')
console.log(novaTarefaInput);
//capturando o input
const botaoAdd = document.querySelector('#botao_add_id');
console.log(botaoAdd);
//capturando o botão de add
const listaDeTarefas = document.getElementById('lista_id');
// capturando a lista que vai guardar as tarefas
const modelo = document.getElementById('modelo_id')
//captura o esqueleto verdinho do tarefa
const containerDeTarefas = document.getElementById('tarefas_id')
// container principal que guarda a lista (ul) das tarefas
const form = document.getElementById('form_id')
//capturando meu formulario
const botaoLimpa = document.getElementById('botao_limpa_id');
//capturando o botao 'marcar limpar lista'
const botaoMarcar = document.getElementById('botao_marca_id');
//capturando o botão 'marcar todos'
//const containerPrincipal = document.getElementById('.container')


//funçao add a partir do click do usuario
// mostrar que com o fomulario e o evento de submit a tarefa tb seria criada
botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault()

   // const fields = [...document.querySelectorAll(".container_principal")];
    //fields.forEach(field =>{
      //  if (field.value === "") form.classList.add("validate-error");
    //});

   // const formError = document.querySelector(".validate-error");
      //  if (formError) {
         //   formError.addEventListener("animationend", event => {
          //      if(event.animationName === "nono") {
                   // formError.classList.remove("validate-error");
           //     }
           // })
        //}

    const elementoLista = document.createElement('li')
    // cria o item da lista que não existe no html
    const textoTarefa = document.createElement('p') 
    // cria o paragrafo que não existe no html
    const iconeDeleta = document.createElement('span') 
    //cria o itm da lista que não existe no html

    if(novaTarefaInput.value.trim() === '') {
        

   
            //---------DESAFIO 1----------------//
//mudar a tela para vermelho e tremer quando adicionar vazio ou com espaço

    novaTarefaInput.classList.add('erro')
    novaTarefaInput.style.background = 'red'
    novaTarefaInput.setAttribute('placeholder', 'campo obrigatório')
    novaTarefaInput.style.animationName = "nono"

} else {

    novaTarefaInput.classList.remove('erro')
    novaTarefaInput.style.background = 'white'
    novaTarefaInput.setAttribute('placeholder', 'adicione uma tarefa')
        
    textoTarefa.innerText = novaTarefaInput.value
    //iguala dentro do paragrafo criado para ser igual ao vaor digitado no input
    iconeDeleta.innerText = "🗑"
    //adiciona dentro do spam criado esse icone de lixeira
    
    listaDeTarefas.appendChild(elementoLista)
    //elemento ul do HTML adotando item da lista criado mais em cima
    elementoLista.appendChild(textoTarefa)
    //o item da lista adotando o texto criado mais em cima
    elementoLista.appendChild(iconeDeleta)
    // o item da lista tb adota a lixeira junto com o texto

    modelo.style.display = 'none'
    containerDeTarefas.style.display = "block"
    //coloca div de tarefas com display blockpara elas aparecerem no padrao tudo tem display block no html

    form.reset() 
    //reseta o formulario para não aparecer o ultimo texto

    }

    textoTarefa.addEventListener('click', () => {
        
        //if(!textoTarefa.classList.contains('checked')) {
            //verifica se o paragrafo não tem a classe checked e então adiciona
        //textoTarefa.classList.add('checked')    
        //} else { 
        //    textoTarefa.classList.remove('checked')
        //    }

        textoTarefa.classList.toggle('checked')
        //forma mais simples de fazer
    
    })

    iconeDeleta.addEventListener('click', () => {
        elementoLista.remove()

        if(listaDeTarefas.innerText === '') {
            // se o container de tarefasestiver vazio

            modelo.style.display = "flex"
            //remove o display none do esquueleto e coloca um flx para aparecer em tela
            containerDeTarefas.style.display = 'none'
            //remove o caontiane de tarefas da tela
        }
    })
})

botaoLimpa.addEventListener('click', () => {
    listaDeTarefas.remove()
    listaDeTarefas.innerHTML = ''
    modelo.style.display = "flex"
    containerDeTarefas.style.display = 'none'
    location.reload()
})
    



    
    //------------DESAFIO 2 -----------------//
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
  })


  