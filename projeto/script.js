const novaTarefaInput = document.querySelector("#input_id");
const botaoAdd = document.querySelector("#botao_add_id");
const listaDeTarefas = document.getElementById("lista_id");
const modelo = document.getElementById("modelo_id");
const containerDeTarefas = document.getElementById("tarefas_id");
const form = document.getElementById("form_id");
const botaoLimpa = document.getElementById("botao_limpa_id");

botaoAdd.addEventListener("click", (evento) => {
  evento.preventDefault();

  const elementoLista = document.createElement("li");
  const textoTarefa = document.createElement("p");
  const iconeDeleta = document.createElement("span");

  if (novaTarefaInput.value.trim() === "") {
    alert("digite alguma tarefa");
  } else {
    textoTarefa.innerText = novaTarefaInput.value;
    iconeDeleta.innerText = "";

    listaDeTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoTarefa);
    elementoLista.appendChild(iconeDeleta);

    modelo.style.display = "none";
    containerDeTarefas.style.display = "block";
    form.reset();
  }

  textoTarefa.addEventListener("click", () => {
    // if(!textoTarefa.classList.contains('checked')) {
    //    // verifica se o paragrafo da tarefa criada não tem a classe checked e então adiciona
    // textoTarefa.classList.add('checked')
    // } else {
    //     textoTarefa.classList.remove('checked')
    // }
    textoTarefa.classList.toggle("checked");
  });

  iconeDeleta.addEventListener("click", () => {
    elementoLista.remove();

    if (listaDeTarefas.innerText === "") {
      modelo.style.display = "flex";
      containerDeTarefas.style.display = "none";
    }
  });
});

botaoLimpa.addEventListener("click", () => {
  listaDeTarefas.innerHTML = "";
  modelo.style.display = "flex";
  containerDeTarefas.style.display = "none";
});
