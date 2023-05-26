// NUMEROS

var idade = 23
var pi = 3.14 // ponto para decimal
var exp = 2e10 // 20000000000
// precisão para até 15 digitos


// OPERADORES ARITMETICOS

var soma = 100 + 50  // 150
var subtracao = 100 - 50 // 50
var multiplicacao = 100 * 2 // 200
var divisao = 100 / 2 // 50
var expoente = 2 ** 4 // 16
var modulo = 14 % 5 // 4

// OPERADORES ARITMÉTICOS (STRINGS)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// É possível verificar se uma variável é NaN ou não com a função isNaN()

console.log(isNaN(soma)) // false


// NAN = NOT A NUMBER

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

// A ORDEM IMPORTA

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// OPERADORES ARITMETICOS UNARIOS

var incremento = 5;
console.log(incremento++); // 5   -- PRIMEIRO ELE INCREMENTA O VALOR EM 1 MODIFICANTO A O VALOR, POREM NO CONSOLE RETORNA AINDA O VALOR ANTERIOR
console.log(incremento); // 6 -- E AQUI SIM ELE MOSTRA A MUDANÇA

var incremento2 = 5;
console.log(++incremento2); // 6  -- COM O INCREMENTO(++) ANTES DA VARIAVEL ELE JA LOGO MOSTRA O RESULTADO JA INCREMENTADO
console.log(incremento2); // 6
/* SE FOR USADO COM CONST IRÁ DAR ERRO, POIS NAO SE PODE MUDAR O VALOR DA CONSTANTE */


// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var teste = +'28'; // colocando o + direto no valor da variavel o torna um numero tambem



var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
/* O (-) ANTES DE UM NUMERO TORNA ELE NEGATIVO */



// EXERCICIOS

// Qual o resultado da seguinte expressão?

var total = 10 + 5 * 2 / 2 + 20; // 35

// Crie duas expressões que retornem NaN

var numero1 = '28s'
var numero2 = 28
console.log(+numero1 + numero2) // NaN

var numero2 = '28t';
console.log(+numero2)

// Somar a string '200' com o número 50 e retornar 250

var numero3 = +'200';
console.log(numero3 + 50) // 250

// Incremente o número 5 e retorne o seu valor incrementado

var numero5 = 5
console.log(++numero5)

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso)




