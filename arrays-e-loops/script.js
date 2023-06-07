// ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'Xbox']

videoGames[0]; // Switch
videoGames[2]; // Xbox
/* Acesse um elemento da array utilizando [n] */


// MÉTODOS E PROPRIEDADES DE UMA ARRAY

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

/* Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente */


// FOR LOOP
// Fazem algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console

/* O for loop possui 3 partes, início, condição e incremento */


// WHILE LOOP

var i = 0;
while (i < 10) {
  console.log(i);
  i++; // tambem poderia ser i = i + 5, para mostrar de 5 em 5
}
// Retorna de 0 a 9 no console

/* O for loop é o mais comum */


// ARRAY E LOOPS

var videoGames1 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames1.length; i++) {
  console.log(videoGames1[i]);
}
/* mostra cada um dos items do array no console */


// BREAK
// O loop irá parar caso encontro e palavra break

var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames2.length; i++) {
  console.log(videoGames2[i]);
  if (videoGames2[i] === 'PS4') {
    break;
  }
}


// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var videoGames3 = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames3.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente

/* Podemos passar os seguintes parâmetros item, index e array */



// NÃO SE CONFUNDA COM A SINTAXE

var numero = 0;
var maximo = 50;
for (; numero < maximo;) {
  console.log(numero);
  numero++;
}
/* Não é aconselhado escrever da forma acima, mas funciona normalmente. */



// EXERCICIOS

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var campeao = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

campeao.forEach(function (item) {
  console.log(`O brasil ganhou a copa de ${item}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if (frutas[i] === 'Pera') {
    break
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var frutas1 = frutas[4]
console.log(frutas1)
