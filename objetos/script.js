// OBJETOS
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos

var pessoa = {
  nome: 'Gabriel',
  idade: 23,
  profissao: 'Desenvolvedor web',
  possuiFacul: false
}

console.log(pessoa.nome)
/* Propriedades e métodos consistem em nome (chave) e valor */



// MÉTODOS
// É uma propriedade que possui uma função no local do seu valor

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

/* Abreviação de area: function() {} para area() {}, no ES6+ */
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}


// ORGANIZAR O CÓDIGO
// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random() // numero aleatório

var pi = Math.PI
console.log(pi) // 3.14
/* Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método? */


// CRIAR UM OBJETO
// Um objeto é criado utilizando as chaves {}

var carro = {}
var pessoa = {}

console.log(typeof carro) // object


// DOT NOTATION GET
// Acesse propriedades de um objeto utilizando o ponto ( . )

var menu = {
  width: 800,
  height: 50,
  bgColor: '#84e',
}

var bg = menu.bgColor;


// DOT NOTATION SET
// Substitua o valor de uma propriedade utilizando ( . ) e o ( = ) após o nome da mesma

let menu1 = {
  width: 800,
  height: 50,
  bgColor: '#84e',
}

menu1.bgColor = '#000';
console.log(menu1.bgColor);  // '#000'


// ADICIONAR PROPRIEDADES E MÉTODOS
// Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';


// PALAVRA-CHAVE THIS
// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu3 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return console.log(height / 2);
  }
}


menu3.metadeHeight(); // 25
// sem o this, seria 60

/* this irá retornar o próprio objeto */


// PROTÓTIPO E HERANÇA
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
/* hasOwnProperty é um método de Object */



// EXERCICIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: 'Gabriel',
  sobrenome: 'Henrique',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto1 = function () {
  return `Meu nome completo é ${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latirAoVer(pessoa) {
    if (pessoa === 'homem') {
      return 'latir'
    } else {
      return 'Nada'
    }
  }
}