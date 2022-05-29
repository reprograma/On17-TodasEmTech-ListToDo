const novaTarefa = document.querySelector('.input_add');
const botaoAdd = document.querySelector('.button_add');
const listaDeTarefas = document.querySelector('.lista_tarefas');
const containerTarefas = document.querySelector('.container_tarefas');
const modeloDeTarefas = document.querySelector('.modelo')
const formulario = document.querySelector('.form_add')
const botaoMarcarTodas = document.getElementById('botao_marca_id');
const botaoLimparLista = document.getElementById('botao_limpa_id');


botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemListaTarefa = document.createElement('li');
    const descricaoTarefa = document.createElement('p');
    const iconDeletar = document.createElement('span');
    
    if(novaTarefa.value == '') {
        novaTarefa.classList.add('aviso');
        novaTarefa.placeholder = "Por favor, digite uma tarefa.";
        novaTarefa.addEventListener('animationend', () => {
            novaTarefa.classList.remove('aviso');
        })
    } else {
        descricaoTarefa.innerHTML = novaTarefa.value;
        iconDeletar.innerHTML = '🗑';

        listaDeTarefas.appendChild(itemListaTarefa)
        itemListaTarefa.appendChild(descricaoTarefa);
        itemListaTarefa.appendChild(iconDeletar);

        modeloDeTarefas.style.display = 'none';
        containerTarefas.style.display = 'block';

        formulario.reset();   
    }

    descricaoTarefa.addEventListener('click', () => {
        descricaoTarefa.classList.toggle('checked');
    });

    iconDeletar.addEventListener('click', () => {
        itemListaTarefa.remove();

        if(listaDeTarefas.innerText == '') {
            modeloDeTarefas.style.display = 'flex';
            containerTarefas.style.display = 'none';
        }
    });
});

botaoLimparLista.addEventListener('click', () => {
    listaDeTarefas.innerHTML = '';
    modeloDeTarefas.style.display = 'flex';
    containerTarefas.style.display = 'none';
});

botaoMarcarTodas.addEventListener('click', () => {
    /*Adicionando validação para o usuário não conseguir ativar a funcionalidade "Marcar todas" sem haver uma lista de tarefas.*/
    if(containerTarefas !== null ) {
        alert('Não há elementos a serem marcados. Adicione-os.')
    } else {
        let listaCompletaTarefas = document.querySelectorAll('p');
    
        if(botaoMarcarTodas.innerText == 'Marcar todas') {
            listaCompletaTarefas.forEach((tarefa) => {
                tarefa.classList.add('checked')
            });
            botaoMarcarTodas.innerText = 'Desmarcar todas' 
        } else {
            listaCompletaTarefas.forEach((tarefa) => {
                tarefa.classList.remove('checked')
            });
            botaoMarcarTodas.innerText = 'Marcar todas'
        }
    }
});

