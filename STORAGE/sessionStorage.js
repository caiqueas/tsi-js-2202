localStorage.setItem('nome', 'Camila');
localStorage.setItem('sobrenome', 'Silva');

let btn = document.getElementById('botao');

//Estou pendurando o event listener no botao

btn.addEventListener('click', mostrar);

function mostrar(evento){

    evento.preventDefault();
        document.getElementById('entrada');  
        document.getElementById('mostrar');  
        let valor = entrada.value;
        mostrar.innerText = valor;

        entrada.value = '';

        //após obtermos o dado do usuário 
        //vamos guardá-lo no session storage

        localStorage.setItem('dadoDoUsuario', valor);
}
    //Para recuperar o dado do session storage 
    //usamos o localStorage.getItem()

    document.querySelector('#mostrar').innerText = 
        localStorage.getItem('dadoDoUsuario');

    //E para apagar no session storage?
    //removeItem()
    //localStorage.removeItem('dadoDoUsuario');