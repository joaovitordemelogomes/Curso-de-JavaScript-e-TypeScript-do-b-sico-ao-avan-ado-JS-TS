/*
! Operadores lógicos:
* && --> and/e
* || --> Or/Ou
* ! --> Not/Não
*/

const expressao1 = true && true && false && false && true;
console.log(expressao1);

const expressao2 = true || false;
console.log(expressao2);

const usuario = 'Luiz';
const senha = '7894'

const vailogar = usuario =='Luiz' && senha == '7894';
console.log(vailogar);

console.log(!false); 
console.log(!true);
// Duas negações retorna o valor original:
console.log(!!false);
console.log(!!true);