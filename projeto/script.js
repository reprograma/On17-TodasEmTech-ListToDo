// capturar as entradas/elelemntos em variáveis

const novaTarefaInput = document.querySelector("#input_id");
//capturando o input
const botaoAdd = document.querySelector("#botao_add_id");
//capturando o botao add
const listaDeTarefas = document.getElementById("lista_id");
// capturando a lista que vai guardar as tarefas
const modelo = document.querySelector("#modelo_id");
const containerDeTarefas = document.getElementById("tarefas_id");
const form = document.getElementById("form_id");
const botaoLimpa = document.getElementById("botao_limpa_id");
const botaoMarca = document.getElementById("botao_marca_id");
// capturando o formulário

//função de adicionar a partir do click da usuária, um evento
//mostrar que com o formulário e o evento de submit a tarefa tbm seria criado
botaoAdd.addEventListener("click", (evento) => {
  evento.preventDefault();
  const elementoLista = document.createElement("li"); // cria o item da lista que não existe no HTML
  const textoTarefa = document.createElement("p"); // cria o paragrafo que não existe
  const iconeDeleta = document.createElement("span"); // cria o nome da lista que não está no html

  if (novaTarefaInput.value.trim() === "") {
    novaTarefaInput.placeholder = "Digite alguma tarefa"
    novaTarefaInput.style.backgroundColor = "#f77272";
  } else {
    textoTarefa.innerText = novaTarefaInput.value;
    // adiciona dentro do paragrafo criado para ser igual ao valor digitado no input
    iconeDeleta.innerText = "🗑";
    //adiciona dentro do input criado esse icone de lixeira

    listaDeTarefas.appendChild(elementoLista); //elemento ul do html adotando o item lista criado mais em cima
    elementoLista.appendChild(textoTarefa);
    elementoLista.appendChild(iconeDeleta);

    modelo.style.display = "none";
    containerDeTarefas.style.display = "block"; // coloca div de tarefas com display block para elas aparecerem na tela por padrão tudo tem display block no html.

    form.reset(); // reserta o formulario após clicar no botão da lista
  }

  textoTarefa.addEventListener("click", () => {
    /* if (!textoTarefa.classList.contains("checked")) {
      //verifica se o paragrafo da tarefa criada não tem a classe checked e então adiciona
      textoTarefa.classList.add("checked");
    } else {
      textoTarefa.classList.remove("checked");
    }
    //*/ textoTarefa.classList.toggle("checked");
    //forma mais simples de fazer
  });

  iconeDeleta.addEventListener("click", () => {
    elementoLista.remove();

    if (listaDeTarefas.innerText === "") {
      // se o container de tarfeas estiver vazio
      modelo.style.display = "flex";
      containerDeTarefas.style.display = "none";
    }
  });
});

novaTarefaInput.addEventListener('keypress', () => {
  novaTarefaInput.style.backgroundColor = "#c8d6e5";
  novaTarefaInput.placeholder = "Adicione uma tarefa"
})

botaoLimpa.addEventListener("click", () => {
  listaDeTarefas.innerHTML = "";
  modelo.style.display = "flex";
  containerDeTarefas.style.display = "none";
});

botaoMarca.addEventListener("click", () => {
  const marcar = botaoMarca.innerText === "Marcar todas";
  if (marcar) {
    botaoMarca.innerText = "Desmarcar todas";
  } else {
    botaoMarca.innerText = "Marcar todas";
  }

  // pra cada texto tarefa, dar toggle
  const textoTarefas = document.querySelectorAll("#lista_id > li > p");

  textoTarefas.forEach((textoTarefa) => {
    if (marcar) {
      textoTarefa.classList.add("checked");
    } else {
      textoTarefa.classList.remove("checked");
    }
  })
})
