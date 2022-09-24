//como criar elementos

//Criando o elemento <li>

let novoItemNaLista = document.createElement('li');
novoItemNaLista.id = 'novo-intem';

//define a class css donovo elemento 

novoItemNaLista.className = 'collection-item';

//adicionar um aributo

novoItemNaLista.setAttribute('title', 'novoItemNaLista');

//novoItemNaLista.setAttribute('id', 'valor-qualquer');

//adicionar node filho
novoItemNaLista.appendChild(
document.createTextNode('Fazer exercício físico'));

//Criar elemento a

let elementoAncora = document.createElement('a');
elementoAncora.className ="delete-item secondary-content";
elementoAncora.setAttribute('href', '#');

//Criar sub elento <i> 

let elementoIcone = document.createElement('i');
elementoIcone.className = 'fa fa-remove';

//adicionar o <i> em <a>
elementoAncora.appendChild(elementoIcone);

//adicionar o <a> em <li>
novoItemNaLista.appendChild(elementoAncora);

//Como capturar o <ul> com querySelector
//let elementoUele = document.querySelector('ul.collection')
//elementoUele.appendChild(novoItemNaLista);

//Como capturar o <ul> pela classe
let elementoUele = document.getElementsByClassName('collection');
elementoUele[0].appendChild(novoItemNaLista);













