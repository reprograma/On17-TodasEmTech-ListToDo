const novaTarefaInput = document.querySelector("#input_id");
const botaoAdd = document.querySelector("#botao_add_id");
const listaDeTarefas = document.getElementById("lista_id");
const modelo = document.getElementById("modelo_id");
const containerDeTarefas = document.getElementById("tarefas_id");
const form = document.getElementById("form_id");
const botaoLimpar = document.getElementById("botao_limpa_id");
const botaoMarcar = document.getElementById("botao_marca_id");

botaoAdd.addEventListener("click", (evento) => {
  evento.preventDefault();

  const elementoLista = document.createElement("li");
  const textoTarefa = document.createElement("p");
  const iconeDeleta = document.createElement("span");

  if (novaTarefaInput.value.trim() === "") {
    novaTarefaInput.classList.add("erro");
    novaTarefaInput.placeholder = "Digite alguma tarefa!";
    novaTarefaInput.addEventListener("animationend", (event) => {
      novaTarefaInput.classList.remove("erro");
    });
  } else {
    textoTarefa.innerText = novaTarefaInput.value;
    iconeDeleta.innerText = "🗑️";

    listaDeTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoTarefa);
    elementoLista.appendChild(iconeDeleta);

    modelo.style.display = "none";
    containerDeTarefas.style.display = "block";
    form.reset();
  }

  textoTarefa.addEventListener("click", () => {
    textoTarefa.classList.toggle("checked");
  });

  botaoMarcar.addEventListener("click", () => {
    textoTarefa.classList.toggle("checked")
      ? (botaoMarcar.textContent = "Desmarcar Todas")
      : (botaoMarcar.textContent = "Marcar Todas");
  });

  iconeDeleta.addEventListener("click", () => {
    elementoLista.remove();

    if (listaDeTarefas.innerText === "") {
      modelo.style.display = "flex";
      containerDeTarefas.style.display = "none";
    }
  });
});

botaoLimpar.addEventListener("click", () => {
  listaDeTarefas.innerHTML = "";
  modelo.style.display = "flex";
  containerDeTarefas.style.display = "none";
});
