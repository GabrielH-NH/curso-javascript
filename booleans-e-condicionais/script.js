// BOOLEAN
// Existem dois valores booleanos false ou true.
var possuiFacul = true;
var possuiDoutorado = false;

// CONDICIONAIS IF E ELSE

var maiorDeIdade = true;

if (maiorDeIdade) {
  console.log('Tem mais de 18 anos')
} else {
  console.log('Tem menos de 18 anos')
}
/* Irá retornar 'Tem mais de 18 anos', e não executa o else */

// CONDICIONAIS ELSE IF
// Se o if não for verdadeiro, ele testa o else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
/* retorna Possui Graduação, mas não possui doutorado */

// TRUTHY E FALSY
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if (false);
if (0); // ou -0
if (NaN);
if (null);
if (undefined);
if (''); // ou "" ou ``

// Truthy
if (true);
if (1);
if (' ');
if ('andre');
if (-5);
if ({});


// OPERADOR LÓGICO DE NEGAÇÃO  '!'
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

if (!true); // false
if (!1); // false
if (!''); // true
if (!undefined); // true
if (!!' '); // true
if (!!''); // false
/* Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy */
console.log(!!''); // false
console.log(!!' '); // true

// OPERADOR DE COMPARAÇÃO
// Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

/* O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos === */

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true









