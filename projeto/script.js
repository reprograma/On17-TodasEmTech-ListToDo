    //Aqui em cima estão capturadas as entradas dos elemento e variáveis:


    //capturando o input
    const novaTarefaInput = document.querySelector('#input_id')

    //capturando o botão de Add
    const botaoAdd = document.querySelector('#botao_add_id')

    //capturando a lista que vai guardar as terefas
    const listaDeTarefa = document.getElementById('lista_id')

    //capturando o esqueleto verdinho da tarefa
    const modelo = document.getElementById('modelo_id')

    //container principal que guarda a lista (ul) das tarefas
    const containerDetarefas = document.getElementById('tarefas_id')

    //capturando meu Formulario
    const form = document.getElementById('form_id')

    //captura o botão 'marcar limpar lista'
    const botaoLimpa = document.getElementById('botao_limpa_id')

    //captura o botão 'marcar todos'
    const botaoMarca = document.getElementById('botao_marca_id')

    //cria o paragrafo que não existe no HTML
    // const textoTarefa = document.createElement('p')
    
    
    
    //função de adicionar a partir do click da usuário, um evento
    //mostrar que com o formulário e o evento de submit a tarefa tbm seria criada
    botaoAdd.addEventListener('click', (evento) => {
        evento.preventDefault()
        //cria o item da lista que não existe no HTML
        const elementoLista = document.createElement('li')

        // cria o paragrafo que não existe no HTML
        const textoTarefa = document.createElement('p')

        //cria o item da lista que não existe no HTML
        const iconeDeleta = document.createElement('span')


        //SOLUÇÃO FEITA PELA PROFESSORA
        if (novaTarefaInput.value.trim() === '') {
            //  alert("digite uma tarefa")

            novaTarefaInput.classList.add('erro'); //adiciona classe erro ao elemento novaTarefa (input) - a classe está no css
            // novaTarefaInput.setAttribute("placeholder", "Campo obrigatório"); 
            novaTarefaInput.placeholder = "Digite alguma tarefa!"; 
        
            novaTarefaInput.addEventListener('animationend', event => { 
              novaTarefaInput.classList.remove('erro');
            })

            // MINHA SOLUÇÃO NÃO DEU MUITO CERTO. 
            // 2.2. Desafio
            // Quando a usuária tentar criar uma tarefa com uma string vazia ou somente com espaços, 
            // criar uma mudança visual em vermelho no input e informar o erro no placehoder;

             // RESPOSTAS 
            // novaTarefaInput.style.backgroundColor = 'red'
            // novaTarefaInput.addEventListener('click', (evento) =>{
            //         novaTarefaInput.style.backgroundColor.remove('red');
            // })

            //Como retirar o vermelho após add uma tarefa?
            //No caso do alert, ele executa a função após clicar em "ok". 
            // Então por que o backgroundColor se mantem estático?
            // (novo problema)
            
            //SOLUÇÃO DO PROBLEMA: 
            
        } else {
            
            //iguala dentro do parágrafo criado para ser igual ao valor digitado no input
            textoTarefa.innerText = novaTarefaInput.value  

            //adiciona dentro do spam criado esse icone de lixeiro
            iconeDeleta.innerText = "🗑" 
            
            //elemento ul do HTML adotando o item da lista criado mais em cima
            listaDeTarefa.appendChild(elementoLista)
            //o item da lista adota o texto ('p') 
            elementoLista.appendChild(textoTarefa)
            //o item da lista também adota o lixeiro junto com o texto
            elementoLista.appendChild(iconeDeleta)

            modelo.style.display = 'none'
            //coloca div de tarefa com display block para elas aparecerem na tela por padrão tudo tem display block no html
            containerDetarefas.style.display = 'block'
            
            //reseta o formulário para não aparecer no input o ultimo texto
            form.reset()
        }

        textoTarefa.addEventListener('click', () => {

            if(!textoTarefa.classList.contains('checked')) {
            //verifica se o paragrafo da tarefa criada não tem a classe checked e então adiciona
                textoTarefa.classList.add('checked')

            } else {
                textoTarefa.classList.remove('checked')
            }
            //forma mais simples de fazer
            //textoTarefa.classList.toggle('checked')
        })

        iconeDeleta.addEventListener('click', () => {
            elementoLista.remove()

            //Se o container de tarefas estiver vazio

            if(listaDeTarefa.innerText === '') {
                //remove o display none do esqueleto e coloca um flex para aparecer em tela
                modelo.style.display = "flex"
                //remove o container de tarefas da tela
                containerDetarefas.style.display = "none"
            }

        })


    })

botaoLimpa.addEventListener('click', () => {
    listaDeTarefa.innerHTML = ''
    modelo.style.display = "flex"
    containerDetarefas.style.display = "none"
    //opção alternativa
    //listaDeTarefa.remove()

})
//SOLUÇÃO FEITA PELA PROFESSORA
// função para marcar todas as tarefas:

botaoMarca.addEventListener('click', () => {
    let todasAsTarefas = document.querySelectorAll('p')
  //   // pega todos os paragrafos do container de tarefas criadas
  
    if(botaoMarca.innerText === "Marcar todos") { 
        // verifica se o botào é marcar todos adicionando uma classe
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









