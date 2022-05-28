const novaTarefaInput = document.getElementById("input_id");
const botaoAdd = document.querySelector("#botao_add_id");
const listaDeTarefas = document.getElementById("lista_id");
const modelo = document.getElementById("modelo_id");
const containerDeTarefas = document.getElementById("tarefas_id");
const form = document.getElementById("form_id");
const botaoLimpar = document.getElementById("botao_limpa_id");
const botaoMarcar = document.getElementById("botao_marca_id");

botaoAdd.addEventListener("click", (event) => {
  event.preventDefault();
  if(novaTarefaInput.value.trim() === ""){ //O método trim() remove espaços desnecessários
    novaTarefaInput.classList.add("espaco");
    novaTarefaInput.setAttribute("placeholder", "Campo obrigatório");
  }else{
    const elementoLista = document.createElement("li");
    const textoTarefa = document.createElement("p");
    const iconeDeleta = document.createElement("span");

    textoTarefa.innerText = novaTarefaInput.value;
    iconeDeleta.innerText = "🗑️";

    listaDeTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoTarefa);
    elementoLista.appendChild(iconeDeleta);
    iconeDeleta.style.cursor = "pointer";  

    modelo.style.display = "none";
    containerDeTarefas.style.display = "block";

    form.reset(); 

    /*Evento de clique para marcar tarefa concluída*/
    textoTarefa.addEventListener("click", () => {
      textoTarefa.classList.toggle("checked");
    })

    /*Evento de clique para remover uma tarefa clicando no 'iconeDeleta'*/
    iconeDeleta.addEventListener("click", () => {
      elementoLista.remove();
      if(listaDeTarefas.innerText === ""){
        modelo.style.display = "flex";
        containerDeTarefas.style.display = "none";
      };
    });

    botaoMarcar.addEventListener("click", () => {
      if(!textoTarefa.classList.contains("checked")){
        textoTarefa.classList.add("checked");
        botaoMarcar.innerText = "Desmarcar todas";
      }else{
        textoTarefa.classList.remove("checked");
        botaoMarcar.innerText = "Marcar todas";
      }
    })

  };
});

botaoLimpar.addEventListener("click", () => {
  listaDeTarefas.innerHTML = "";
  modelo.style.display = "flex";
  containerDeTarefas.style.display = "none";
});