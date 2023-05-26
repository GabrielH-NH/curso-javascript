var nome = 'Gabriel'  // String
var idade = 23        // Number
var time;             // Undefined
var possuiFaculdade = false  // Boolean
var comida = null            // Null
var novoObject = {}          // Object
var simbolo = Symbol()       // Symbol


// VERIFICAR TIPO DE DADO

console.log(typeof nome) // String
console.log(typeof idade) // Number
console.log(typeof null)  // Retorna Object

// CONCATENANDO STRINGS
var sobrenome = 'Henrique'
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto)

// SOMANDO NUMERO COM STRINGS, RESULTADO FINAL É SEMPRE STRING

var gols = 1000
var frase = 'Romário fez ' + gols + ' gols'
console.log(frase)
console.log(typeof frase)  // String

// NUMERO COM NUMERO

var ano = 2008
var mes = 8
var data = ano + mes
console.log(data) // 2016
console.log(typeof data) // Number

// ASPAS SIMPLES, DUPLAS E TEMPLATE STRING

"Javascript é 'super' fácil";
'Javascript é "super" fácil';
"Javascript é \"super\" fácil";
`Javascript é "super" fácil`;
//"Javascript é "super" fácil"; // INVÁLIDO

// TEMPLATE STRING

var cachorro = 'Mel'
var idadeCachorro = 7
var frase2 = `${cachorro} tem ${idadeCachorro} anos`

console.log(frase2)

// EXERCICIOS 

// Declare uma variável contendo uma string
var comida = 'Pizza'
// Declare uma variável contendo um número dentro de uma string
var numero = '20'
// Declare uma variável com a sua idade
var minhaIdade = 23
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Gabriel'
var sobrenome = 'Henrique'
var nomCompleto = nome + ' ' + sobrenome
// Coloque a seguinte frase em uma variável: It's time
var frase3 = `It's time`
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome)
