// capturar as entradas/elelemntos em variáveis

const novaTarefaInput = document.querySelector("#input_id");
//capturando o input
const botaoAdd = document.querySelector("#botao_add_id");
//capturando o botao add
const listaDeTarefas = document.getElementById("lista_id");
// capturando a lista que vai guardar as tarefas
const modelo = document.querySelector('#modelo_id')

//função de adicionar a partir do click da usuária, um evento
//mostrar que com o formulário e o evento de submit a tarefa tbm seria criado
botaoAdd.addEventListener("click", (evento) => {
  evento.preventDefault();

  const elementoLista = document.createElement("li"); // cria o item da lista que não existe no HTML
  const textoTarefa = document.createElement("p"); // cria o paragrafo que não existe
  const iconeDeleta = document.createElement("span"); // cria o nome da lista que não está no html

  textoTarefa.innerText = novaTarefaInput.value;
  iconeDeleta.innerText = "🗑";

  listaDeTarefas.appendChild(elementoLista);
  elementoLista.appendChild(textoTarefa);
  elementoLista.appendChild(iconeDeleta);

  modelo.style.display='none'
  contai
});
