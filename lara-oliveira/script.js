// capturar as entradas/elementos em variáveis

const novaTarefaInput = document.querySelector('#input_id');

//capturando o input
const botaoAdd = document.querySelector('#botao_add_id');

//capturando botão de add
const listaDeTarefas = document.getElementById('lista_id')

const containerDeTarefas = document.querySelector('#tarefas_id')

const form = document.getElementById('form_id');

const botaoLimpa = document.getElementById('botao_limpa_id');

//capturando a lista que vai guardar as tarefas


const modelo = document.querySelector('#modelo_id');
//função de adicionar a partir do click da usuária, um evento
// mostrar que com o formulário e o evento de submit a tarefa também seria criada.

botaoAdd.addEventListener('click', (evento) => {

    evento.preventDefault();

    const elementoDaLista = document.createElement('li');

    const textoTarefa = document.createElement('p');

    const iconeDeleta = document.createElement('span'); 

    //trim() - remove espaços em branco 

    if(novaTarefaInput.value.trim() === '') {
        alert("digite alguma tarefa")
    } else {
            

    textoTarefa.innerText = novaTarefaInput.value;

    iconeDeleta.innerText = "🗑️";

    listaDeTarefas.appendChild(elementoDaLista);

    elementoDaLista.appendChild(textoTarefa);
    elementoDaLista.appendChild(iconeDeleta);   

    modelo.style.display = 'none';

    containerDeTarefas.style.display = 'block';

    form.reset();
    }


    textoTarefa.addEventListener('click', () => {
        if(!textoTarefa.classList.contains('checked')) {
            textoTarefa.classList.add('checked')
        } else {
            textoTarefa.classList.remove('checked')
        }

        //textoTarefa.classList.toogle('checked')
    })

    iconeDeleta.addEventListener('click', () => {
        elementoDaLista.remove()

        if(listaDeTarefas.innerText === '') {
            modelo.style.display = 'flex'
            containerDeTarefas.style.display = 'none'
        }
    })

    botaoLimpa.addEventListener('click', () => {
        
        
        listaDeTarefas.innerHTML = ''

        modelo.style.display = 'flex'
        containerDeTarefas.style.display = 'none'
    })
});


