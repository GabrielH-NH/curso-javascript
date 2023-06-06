// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'Gabriel'

nome.length; // 7
console.log(nome.charAt(1)); // Puxa a letra do nome que esta no indice 1, no caso então mostra 'a', se fosse (0), seria 'G'
nome.replace('el', 'ela') // irá trocar o 'el' que tem no nome, para 'ela'
console.log(nome.replace('el', 'ela')) // Gabriela
/* Uma string herda propriedades e métodos do construtor String() */


// NÚMEROS

var altura = 1.55555;

altura.toString(); // '1.8' transforma o numero em string
altura.toFixed(4); // 1.5555  a propriedade toFixed() é usada para formatar um número com uma quantidade específica de casas decimais e retorna uma string que representa o número formatado
console.log(altura.toFixed(3)) // 1.556 quando necessario arredonda o numero para manter o numero de casas decimais que foi pedido

/* Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos */



// FUNÇÕES

function areaQuadrado(lado) {
  return lado * lado
}

areaQuadrado.toString(); // retorna a function escrita, em formato de string

// "function areaQuadrado(lado) {
//    return lado * lado"
//}"

areaQuadrado.length;  // retorna o total de parâmetros ou argumentos que tem a function, neste caso 1
addEventListener.length; // aqui irá ter o resultado 2, pois passamos dois argumentos nela para que funcione, o 'click'(keyboard, scroll, e por ai vai) e em seguida a função callback


// ELEMENTOS DO DOM

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'  <-- retorna o valor do texto que esta dentro do btn
btn.addEventListener('click', function () {
  console.log('Clicou')
})

/* Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM. */


/*

  OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO

  Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

*/



// EXERCICIOS

// nomeie 3 propriedades ou métodos de strings

var nome1 = 'Gabriel'

nome1.toLowerCase();
nome1.length;
nome1.charAt(2);

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn1 = document.querySelector('.test')

btn1.innerText;
btn1.classList.add('vermelho')
btn1.classList.remove('vermelho')
btn1.innerHTML;
btn1.addEventListener('click', function () {
  console.log('Funcionou')
})


// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}