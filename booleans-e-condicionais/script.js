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


// OPERADORES LÓGICOS ||
// || Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
/* RETORNA O PRIMEIRO VALOR TRUE */


// OPERADORES LOGICOS &&
// && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
/* Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos */


// SWITCH
// Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}


// EXERCICIOS

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 23;
let idadeIrmao = 30;

if (minhaIdade < idadeIrmao) {
  console.log('É menor')
} else if (idadeIrmao == minhaIdade) {
  console.log('É igual')
} else {
  console.log('É maior')
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
/* todas sao verdadeiras, entao ele retorna o ultimo verdadeiro, no caso o resultado da expressao 5 - 2 */


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log('China tem mais habitantes')
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

/* Irá aparecer Falso no console, pois a primeira expressao ja é false, entao ele só ignora e ja vai direto para o else */

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

/* Retorna Cão no console, pois as duas expressões sao true, porem tem outra detro de console, onde ele esta retornando o ultimo true, no caso Cão */









