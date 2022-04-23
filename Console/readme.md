# Introdução a Lógica de Programação com `JavaScript` [ PT-BR ] 
(English below)

### [ Introdução ]

Antes de mais nada, é necessário se esclarecer uma diferença entre as linguagens de programação: linguagens `typadas` e linguagens `não typadas`.
</br></br>

Linguagens `typadas` são linguagens onde é necessário declarar o **tipo** da variável ao se declarar a mesma.

- se você dizer ao C# por exemplo, que uma variável é do tipo `int` e em seguida der a ela um valor `"A"` a linguagem vai ficar _"Opa amigo, assim não dá"_
</br>

Já linguagens `não typadas` são linguagens que não há a necessidade de se declarar seu tipo, você não define que `há uma variável do tipo INT`, você apenas diz `há uma variável`. 
- se você dizer ao JavaScript que existe uma `var` que inicializa com um valor `"A"` e em seguida você diz que o valor dela se torna `5` o JS vai te dizer _"Ta certo companheiro, pode continuar"_

-----
### [ Tipos Primários de Variáveis ]

Em qualquer linguagem temos os tipos `primários` de variáveis (onde em linguagens **typadas**, são obrigatóriamente declaradas junto)

```C#
String  Var = "";       // Representa todo caracter (não é possível fazer operações matemáticas)
Int     Var = 5;        // Representa números inteiros
Float   Var = 0.5;      // Representa números decimais menores
Double  Var = 0.5;      // Representa números decimais maiores
Boolean Var = true;     // Tem apenas dois estados, true(1) ou false(0)
Array[] Var = { 1, 2 }; // Lista, guarda diversos valores
```

Como o javascript é uma linguagem não tipada, nós não precisamos definir seu tipo `primário` ao inicializarmos elas, contudo, elas podem ter uma espécie de `estado`

```javascript
var   A = 3; // mutável (não precisa ser declarada)
let   A = 3; // mutável (precisa ser declarada antes)
const A = 3; // vem de 'constante', o valor não muda 
```
**Curiosidade:** o tipo `var` surgiu praticamente junto à linguagem, e somente após os tipos `let` e `const` foram criados. Atualmente, o tipo `var` é pouco utilizado (e por isso utilizaremos ele raramente).

-----
### [ Operadores Lógicos ou Booleanos ]

Ao nos depararmos a primeira vez com a operação `IF`, é nos aberto um mar de possibilidades para gestão de informações e caminhos que o nosso código pode percorrer, e para isso é essencial conhecer todas as **Operações Booleanas** muito bem!

```javascript 
if (A || B) -> OU (ou um, ou outro)
if (A && B) -> E (é um E outro)
if (A > B ) -> Maior que
if (A < B ) -> Menor que
if (A >= B) -> Maior OU igual
if (A <= B) -> Menor OU igual
if (A == B) -> Igualdade (o valor)
if (A != B) -> Diferente
```
E no JavaScript nós temos a noss disposição mais um vaeirifcador lógico! Já ouviu falar do `===`? Ele compara o `valor` e o `tipo` ao mesmo tempo! 

```javascript
if (A === B) 
```
- _"Mas espera, você me falou que o JS é **não typado**, que tipo que ele compara??"_ O tipo não é declarado, mas a linguagem internamente ainda reconhece o tipo da variável! A única diferença, é que podemos mudar o *"tipo da variável"* quando quisermos. Se ele ver que a variável está entre "" ele ainda sim reconhece que é uma `string` mesmo sem você dizer :)

-----
### [ Operadores Aritméticos ]
Vamos às continhas hehe

```javascript
A + B   -> Adição
A - B   -> Substração
A * B   -> Multiplicação
A / B   -> Divisão c/ resultado decimal (se tiver)
A % B   -> Módulo/Resto da divisão
A ** B  -> Potenciação (A^B)
A **0.5 -> Raiz quadrada
```

--------------------------

--------------------------
# Introduction to Logic Programming with `JavaScript` [ ENG ]

### [ Introduction ]

First of all, it is necessary to clarify a difference between programming languages: `typed` and `untyped` languages.
</br></br>

`Typed` languages are languages where it is necessary to declare the **type** of the variable when declaring it.

- if you tell C#, for example, that a variable is of type `int` and then give it a value of `"A"` the language will be _"Oh my friend, that's not possible"_
</br>

On the other hand, `untyped` languages are languages that don't need to declare their type, you don't define that `there is a variable of type INT`, you just say `there is a variable`.
- if you tell JavaScript that there is a `var` that initializes with a value `"A"` and then you say that its value becomes `5` the JS will tell you _"Alright my little friend, go ahead" _

-----
### [ Primary Types of Variables ]

In any language we have the `primary` types of variables (where in **typed** languages, they are mandatory declared together)

```C#
String Var = "";        // Represents every character (it is not possible to do math operations)
Int Var = 5;            // Represents integers
Float Var = 0.5;        // Represents smaller decimal numbers
Double Var = 0.5;       // Represents larger decimal numbers
Boolean Var = true;     // Has only two states, true(1) or false(0)
Array[] Var = { 1, 2 }; // List, store multiple values
```

As JavaScript is an untyped language, we don't need to define their `primary` type when initializing them, however they can have a kind of `state`

```javascript
var A = 3;   // mutable (doesn't need to be declared)
let A = 3;   // mutable (needs to be declared first)
const A = 3; // comes from 'constant', value doesn't change
```
**Fun fact:** the `var` type appeared practically with the language, and only after the `let` and `const` types were created. Currently, the `var` type is rarely used (so we will rarely use it).

-----
### [ Logical or Boolean Operators ]

When we come across the `IF` operation for the first time, it opens up a sea of possibilities for information management and paths that our code can go through, and for that it is essential to know all the **Boolean Operations** very well!

```javascript
if (A || B) -> OR (or one, or the other)
if (A && B) -> AND (is one AND another)
if (A > B ) -> Greater than
if (A < B ) -> Less than
if (A >= B) -> Greater OR equal
if (A <= B) -> Less than OR equal
if (A == B) -> Equality (the value)
if (A != B) -> Different
```
And in JavaScript we have at our disposal one more logical server! Ever heard of `===`? It compares `value` and `type` at the same time!

```javascript
if (A === B)
```
- _"But wait, you told me that JS is **not typed**, what type does't compare??"_ The type is not declared, but the language internally still recognizes the type of the variable! The only difference is that we can change the *"variable type"* whenever we want. If it sees that the variable is between "" it still recognizes that it's a `string` even without you saying :)

-----
### [ Arithmetic Operators ]
Let's go to the math part hehe

```javascript
A + B   -> Addition
A - B   -> Subtraction
A * B   -> Multiplication
A / B   -> Division with decimal result (if any)
A % B   -> Module/Remainder of division
A ** B  -> Potentiation (A^B)
A **0.5 -> Square root
```
