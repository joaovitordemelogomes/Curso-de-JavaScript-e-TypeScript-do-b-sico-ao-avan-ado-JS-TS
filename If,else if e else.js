/*
entre 0 - 11 - bom dia
entre 12 - 17 - Boa tarde
entre 18 - 23 - boa noite
*/

const hora = 18

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12  && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}

//* If pode ser usado sozinho 
//* else if não pode ser exercutado sozinho e precisa iniciar em if
//* pode ter vários else if
//* Só pode ter um else

const tenhoGrana = false

if (tenhoGrana) {
    console.log ('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}

//* Podemos utilizar condições sem else if, utilizando apenas if e else