// ===========================

/*  Cálculo de Média de 4 notas
    -----------
    Calculating the average of 4 grades */

// ===========================

/* 
    Como o javascript é uma linguagem não tipada, nós não 
      precisamos definir seu tipo ao inicializarmos elas 
      (estarei criando outros códigos posteriormente para 
      falar de estados que essas variaveis podem ter)
    -----------
    As javascript is an untyped language, we don't need 
      to define its type when initializing them (I'll be 
      creating other code later to talk about states 
      these variables can have) 
*/

var Nota01 = 8;
var Nota02 = 7;
var Nota03 = 10;
var Nota04 = 9;

var Soma = 0;
var Media = 0;
//---------------------------

/*
    [ Dicionário de funções ] / [ Function dictionary ]

    : Console.log() 
      -> Tudo que estiver entre parênteses será mostrado ao usuário
      -> Everything in parentheses will be shown to the user
    __________________________________

    O JS é uma linguagem web, então nós estaremos 
      utilizando o node para poder utilizá-la através 
      do console (e por conta disso, não estaremos 
      captando valores digitados pelo usuário por enquanto)
    -----------
    JS is a web language, so we will be using node 
      to be able to use it through the console 
      (and because of that, we will not be capturing 
      values ​​typed by the user for now)
 */
//---------------------------

/*  Fazemos a soma e o cáculo da média
    -----------
    We add and calculate the average */
    
Soma = Nota01 + Nota02 + Nota03 + Nota04;
Media = Soma / 4;
//----------------------------

/*  Mostramos ao usuário se ele repetiu por conta da nota ou não
    -----------
    We show the user if he repeated because of the grade or not */

if(Media > 5) {
    console.log("Você não reprovou :)"); // You didn't flunked :)
}
else {
    console.log("Você reprovou >:("); // You flunked >:(
}


