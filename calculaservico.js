/*
Construir uma matriz serviço e prazo. serviço feito em 24h, 48h, 72h. 
Quanto mais rápido o serviço, mais caro ele fica
*/

let tabela = [  ['$$$','$$', '$'],
                ['$$$$', '$$$', '$$'],
                ['Não faz', 'Não faz', '$$$']];

let servico = prompt("Entre com o serviço :\n 0 - Troca de óleo \n 1 - Balanceamento\n 2 - Cambagem");
let prazo = prompt("Entre com o prazo :\n 0 - Um dia \n 1 - Dois dias\n 2 - Três dias")

if( validaEntrada(servico) && validaEntrada(prazo)){
    alert("O serviço ficará em: " + tabela[servico][prazo]);
}else{
    alert("ERRO: Verifique os valores inseridos e tente novamente");
}

function validaEntrada(dadoUsuario){
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;

}