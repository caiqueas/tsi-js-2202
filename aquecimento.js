/*
for (let i=1; i<=10; i++)  {
	console.log("linha " + i);
}
*/

/*
let i = 0;
while (i <= 10) {
    console.log("linha " + i);
    i++;
}
*/

/*
let i = 0;
do {
    console.log("linha " + i);
    i++;
  }
  while (i <= 10);
*/

/*
let a = 100;
let b = 50;
if (a > b){
    console.log(a + " é maior que " + b) ; 
}
else {
    console.log(b + " é maior que " + a);
}
*/

/*
var dia = 6
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1: 
        console.log("Segunda");
        break;
    case 2: 
        console.log("Terça");
        break; 
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break; 
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log('Dia inválido');
}
*/

/*
let dia = prompt("Digite o dia"); 

let resultado = dia % 2 ? 'é impar' : 'é par';

console.log(resultado)
*/

let coisa = null;
let variavel = coisa ?? "Não há";
console.log(variavel);