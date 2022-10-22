const entradaTarefa = document.querySelector('#tarefa'); 
const btnAddTarefa = document.querySelector('.btn'); 
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');


function carregaMonitoresDeEventos(){

    //evento para adicionar tarefa
    btnAddTarefa.addEventListener('click', adicioneTarefa);
    //evento para fazer o x funcionar (apagar uma unica tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);
    //evento para limpar toda a lista
    btnLimpaTudo.addEventListener('click', apagarTudo);
    //evento para filtrar as tarefas
    filtroDeTarefa.addEventListener('keypress', filtroTarefa )
}
carregaMonitoresDeEventos();

function filtroTarefa(evento){

    //capturamos o que o usurário está digitando
    //passando tudo para minusculo
    const procurado = evento.target.value.toLowerCase();
    //capturamos todos os elementos lá existentes
    const tarefas = document.querySelectorAll('collection-item');

    //para cada tarefa existente, busque a string desejada
    tarefas.forEach(function(tarefa){

        //Recuperamos apenas o texto do elemento <li> onde está a tarefa
        textoTarefa = tarefa.innerText;

        //Procuramos a string digitada no filtro no text que está no <li>
        if(textoTarefa.toLowerCase().indexOf(procurado) != -1){

            tarefa.style.display = 'block';
        }else{
            tarefa.style.display = 'none';
        }
    })
}


function apagarTudo(evento){

    //RETIRA O COMPORTAMENTO PADRÃO DO BOTÃO
    evento.preventDefault();

    listaDeTarefas.innerHTML = '';


}

function apagarTarefa(evento){
    
    //se o elemento pai tiver a classe apaga-tarefa,
    //ou seja, for o elemento "a", apague li, ou seja,
    //a tarefa
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){

        //apaga o elemento pai do "a", ou seja, o li, pois
        //o elemento alvo do evento foi o ihf
        evento.target.parentElement.parentElement.remove();
    }
}

function adicioneTarefa(evento){
    evento.preventDefault();

    //verifica se o usuário entrou com uma tarefa
    if(entradaTarefa.value === ''){

        alert('Entre com uma tarefa');
        return false;

    }

    //Cria li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //cria aonde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //cria ícone com x para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

    //gravar a tarefa no localStorage
    gravarTarefa(entradaTarefa.value);

    //apaga o input para entrada
    entradaTarefa.value = '';

}

function gravarTarefa(tarefa){
    
    let tarefas = [];

    let tarefaDoStorage = localStorage.getItem('tarefas');

    if( tarefaDoStorage != null){

        tarefas = JSON.parse(tarefaDoStorage);
    }

    tarefas.push(tarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}





