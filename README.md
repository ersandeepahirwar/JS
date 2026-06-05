## Introduction to JavaScript
- JavaScript is a high-level programming language developed by Brendan Eich at Netscape Communications Corporation.
- JavaScript was introduced in 1995 as a frontend programming language to make web pages interactive.
- After 2009, JavaScript could also be used as a backend programming language using Node.js.
- JavaScript is one of the core technologies of web development, along with HTML and CSS.

## Key Features of JavaScript

### 1. Interpreted Language
JavaScript is an interpreted language, which means it is executed directly by the browser without the need for prior compilation.  
However, interpreters are generally slower in nature, so modern web browsers use JIT ( Just-In-Time ) compilers to enhance execution speed.

### 2. Dynamic Typing
JavaScript is a dynamically typed programming language, which means there is no need to provide data types during variable declaration.  
A variable can hold different types of values during the execution of a program.  
This provides flexibility but may also lead to runtime errors if not handled carefully.

### 3. Event-Driven Approach
JavaScript follows an event-driven model, where code execution is triggered by user actions such as clicks, keyboard input, or mouse movements.  
This makes it ideal for creating interactive web applications.

### 4. Asynchronous Programming
JavaScript supports asynchronous programming using callbacks, promises, and async/await.  
This allows multiple operations to run without blocking the main thread, which improves performance and responsiveness.

### 5. Object-Oriented Programming ( OOPs )
JavaScript supports object-oriented programming concepts such as objects, classes, inheritance, and encapsulation.

### 6. Platform Independent
JavaScript can run on any platform such as Windows, Linux, Macintosh, Android, etc.  
This makes it highly portable and widely used.

### 7. Integration with HTML and CSS
JavaScript works seamlessly with HTML and CSS, allowing developers to manipulate the DOM and dynamically update the content, structure, and styles of web pages.

### 8. Functional Programming Support
JavaScript supports functional programming concepts such as higher-order functions, closures, and pure functions.  
This makes it flexible and suitable for different programming styles.

### 9. Rich Ecosystem and Library Support
Over 3.1 million libraries and packages are registered on NPM ( Node Package Manager ), from where developers can easily install them into their projects and enhance the functionality of their applications.

## JavaScript Applications

### 1. Web Development
JavaScript is the most popular programming language in the web development sector because it is primarily used for frontend web development to create interactive and dynamic user interfaces.  
It enhances user experience by enabling real-time updates without reloading the page.

### 2. SPA ( Single Page Application ) Development
JavaScript is the most important programming language for SPA ( Single Page Application ) development.  
Developers can use JavaScript libraries and frameworks such as React, Vue, Next.js, and Angular to build modern web applications.

### 3. Server-Side Development
JavaScript was originally designed as a frontend programming language, but nowadays it can also be used as a backend programming language using technologies such as Node.js, Express.js, NestJS, Deno, and Bun.  
Using these frameworks and libraries, developers can build backend APIs, controllers, and RESTful APIs.

### 4. Hybrid Mobile Application Development
JavaScript can be used to develop hybrid mobile applications for both iOS and Android platforms, as well as wearable devices, using frameworks such as React Native and Ionic.  
Using these frameworks, developers can build hybrid mobile applications with a single codebase, so there is no need to develop applications separately for different platforms.

### 5. Desktop Applications
With the help of the Electron.js framework, developers can build hybrid desktop applications using JavaScript, HTML, and CSS with a single codebase.  
The famous code editor VS Code is also built using Electron.js.

### 6. Game Development
JavaScript can be used in the game development sector using libraries such as Phaser and Babylon.js.  
Developers can create both 2D and 3D online games using JavaScript.

### 7. Data Visualization and Analytics
JavaScript is gaining popularity day by day in the data visualization and analytics sector.  
Using libraries such as Chart.js and D3.js, developers can create line charts, pie charts, bar charts, and many other types of visualizations.

### 8. IoT ( Internet of Things ) Sector
JavaScript can be used to control IoT devices using libraries such as Johnny-Five and IoT.js.

### 9. Artificial Intelligence and Machine Learning
We can use JavaScript to train AI models using the TensorFlow.js library.  
With the help of this library, developers can train AI models in a client-side architecture.

> [!Note]
> JavaScript is not generally used in system software development, such as device driver development and operating system development.

## ECMAScript
- ECMAScript is a standardized scripting language specification developed by Ecma International.  
- ECMAScript defines the rules, syntax, and features of JavaScript and other similar languages such as JScript and ActionScript.  
- It ensures that JavaScript and related languages behave consistently across different browsers and runtime environments.  
- JavaScript is an implementation of ECMAScript, and new features in JavaScript are introduced through the ECMAScript specification.

> ECMA stands for European Computer Manufacturers Association.

## JavaScript Engine
A JavaScript engine is a program that executes JavaScript code by converting it into machine code so that it can run on a computer or browser.  
It reads, interprets, compiles, and optimizes JavaScript code to improve performance.

### Popular JavaScript Engines

#### 1. V8

- Developed by Google
- JIT-based engine
- Used by Google Chrome, new version of Microsoft Edge, Node.js, Brave, etc.

#### 2. Chakra

- Developed by Microsoft
- Interpreter-based JavaScript engine
- Used by Microsoft Internet Explorer and legacy Microsoft Edge

#### 3. JavaScriptCore

- Developed by Apple
- JIT-based JavaScript engine
- Used by Safari browser

#### 4. SpiderMonkey

- Developed by Mozilla
- First JavaScript engine ever created
- Used by Firefox ( and earlier versions of Netscape Navigator )

#### 5. Hermes

- Developed by Meta ( Facebook )
- Used primarily in React Native environment
- Designed to improve startup time and reduce memory usage on mobile applications

## JavaScript Keywords
JavaScript keywords are reserved words that have special meaning in the language and cannot be used as identifiers.

`await*`, `break`, `case`, `catch`, `class*`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export*`, `extends*`, `false`, `finally`, `for`, `function`, `if`, `import*`, `in`, `instanceof`, `new`, `null`, `return`, `super*`, `switch`, `this`, `throw`, `true`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`, `let*`, `static`, `enum*`, `implements`, `interface`, `package`, `private`, `protected`, `public`

## JavaScript Identifier
An identifier in JavaScript is the name used to identify programming entities such as variables, functions, objects, and classes.

### Rules for Identifiers
- We cannot use JavaScript keywords as identifiers.
- We cannot use a digit as the first character of an identifier.
- Digits can be used after the first character ( postfix ).
- Special characters are not allowed, except the underscore ( _ ).
- We cannot use the same identifier name more than once within the same statement block.

## JavaScript Data Types

#### 1. Number: 
Any whole or fractional number, such as `10`, `25.36`, `-25.35`, `-50`, `+25.36`.

#### 2. String
A collection of characters, such as `'a'`, `"apple"`, `` `a for apple` ``.

#### 3. Boolean
Represents logical values `true` or `false`.

#### 4. Undefined
Represents a variable that has been declared but not assigned a value.

#### 5. Null
Represents the intentional absence of a value.

#### 6. BigInt
Used to represent very large integers.

#### 7. Symbol
Represents unique and immutable values

#### 8. Object
A collection of key–value pairs.

#### 9. Array
An ordered collection of values.

#### 10. Function
A reusable block of code

#### 11. Set
A collection of unique values.

#### 12. Map
A collection of key–value pairs where keys can be of any type.

## Data Representation

### 1. Variable

- A variable is used when data is not fixed.  
- Variables are names of memory locations in RAM that contain information, or they can be described as placeholders for data in memory.  
- In simple terms, variables are data containers.

#### Syntax :

```
var variableName = value;    // function-level scope  
let variableName = value;    // block-level scope  
const variableName = value;  // block-level scope and read-only
```

### 2. Constant / Literals

Constants ( literals ) are used when data is fixed and does not change.

#### Boolean
`true`, `false`

#### Number
`10`, `+20`, `-25`, `15.36`, `+25.25`, `-65.25`

#### String
`'a'`, `"apple"`, `` `a for apple` ``

## Tokens in JavaScript

Tokens are the smallest entities of a JavaScript program, such as identifiers, constants ( literals ), keywords, operators, and punctuators like `,`, `:`, `;`, `()`, `{}`, `[]`, and space.

```
var A = 10;

var => Keyword
A   => Identifier ( Variable )
=   => Operator
10  => Constant ( Literal )
;   => Punctuator
```

## Output Instructions in JavaScript

`console.log()` is used as output instruction to display data in console.

```
var A = 10;
var B = 20;
var sum = A + B;

console.log(A, "+", B, "=", sum);
console.log(A + " + " + B + " = " + sum);
console.log(`${A} + ${B} = ${sum}`); // String Template Literal Style
```

## Input Instructions in JavaScript

### `prompt()`
`prompt()` is used to take input from the user through the keyboard.  
It returns the input value in string format.

```
const number = prompt("What is your favourite number?");
console.log(number, typeof number);
```

### `Number()`
`Number()` converts the input value ( argument ) into a number type.

```
const number = Number(prompt("What is your favourite number?"));
console.log(number, typeof number);
```

### `parseInt()`
`parseInt()` converts the input value ( argument ) into an integer number type.

```
const number = parseInt(prompt("What is your favourite number?"));
console.log(number, typeof number);
```

### `parseFloat()`
`parseFloat()` converts the input value ( argument ) into a floating-point number type.

```
const number = parseFloat(prompt("What is your favourite number?"));
console.log(number, typeof number);
```

## Operators in JavaScript

Operators are special symbols used to perform predefined operations on operands ( variables, constants, or values ).

### Types of Operators ( Based on Operands )

#### 1. Unary Operator
Requires only one operand
#### 2. Binary Operator
Requires two operands
#### 3. Ternary Operator
Requires three operands

## Types of Operators in JavaScript

- Arithmetic Operators
- Assignment Operator
- Composite / Compound / Shorthand Operators
- Relational / Comparison Operators
- Logical Operators
- Bitwise Operators
- Conditional / Ternary Operator
- Increment Operators
- Decrement Operators
- Miscellaneous Operators

### 1. Arithmetic Operators

```
+  →  Addition
-  →  Subtraction
*  →  Multiplication
/  →  Division ( Quotient )
%  →  Modulus ( Remainder )
** →  Exponentiation

Category:   Binary
Precedence: Left to Right

Priority:   1. Brackets
            2. **
            3. * / %
            4. + -
```

```
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);
console.log(10 ** 5);
```

```
console.log(
  ((((15 * 4) % 55) * 4) / 10) * 9 -
    (((34 / 10) * 5) % 20) +
    ((9 * 10) % 83) * ((((((10 * 5) % 37) * 2) % 20) * 2 ** 5) % 100),
);
```

### 2. Assignment Operator

Assignment operator is used to assign the value of the RHS ( Right-Hand Side ) operand to the LHS ( Left-Hand Side ) operand.

```
sum = A + B; // Valid
A + B = sum; // Invalid
A = B = C;   // Valid

Category: Binary
Associativity: Right to Left
```

```
var A = 10;
var B = 5;
var sum = A + B;

console.log(`${A} + ${B} = ${sum}`);
```

### 3. Composite / Compound / Shorthand Operators

Composite / Compound / Shorthand operators are formed by combining assignment operator with other operators.

```
A = A + B    →   A += B
A = A - B    →   A -= B
A = A * B    →   A *= B
A = A / B    →   A /= B
A = A % B    →   A %= B
A = A ** B   →   A **= B
```

```
var A = 10;
var B = 5;
A += B;
console.log(A);

var C = 10;
var D = 5;
C -= D;
console.log(C);

var E = 10;
var F = 5;
E *= F;
console.log(E);

var G = 10;
var H = 5;
G /= H;
console.log(G);

var I = 10;
var J = 5;
I %= J;
console.log(I);

var K = 10;
var L = 5;
K **= L;
console.log(K);
```

### 4. Relational Operators

Relational operators are used to compare two operands.

```
<     →  Less than
<=    →  Less than or equal to
>     →  Greater than
>=    →  Greater than or equal to
==    →  Equal to ( checks value only )
!=    →  Not equal to ( checks value only )
===   →  Identical ( checks both value and data type )
!==   →  Not identical ( checks both value and data type )
```

```
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 > 5);
console.log(10 >= 5);
console.log(10 == 5);
console.log(10 !== 5);
console.log(10 === 5);
console.log(10 !== 5);
```

### 5. Logical Operators

Logical operators are used to make compound conditions.

| Operator    | Symbol | Operation                                      | Category | Associativity |
| ----------- | ------ | ---------------------------------------------- | -------- | ------------- |
| Logical AND | `&&`   | Returns true if both conditions are true       | Binary   | Left to Right |
| Logical OR  | `\|\|` | Returns true if at least one condition is true | Binary   | Left to Right |
| Logical NOT | `!`    | Reverses the boolean value                     | Unary    | Right to Left |

```
console.log(10 && 100);    // 100
console.log(0 && 10);      // 0
console.log(10 && 0);      // 0
console.log(0 && 0);       // 0
console.log(false && 0);   // false
console.log(0 && false);   // 0

console.log(10 || 100);    // 10
console.log(0 || 10);      // 10
console.log(10 || 0);      // 10
console.log(0 || 0);       // 0
console.log(false || 0);   // 0
console.log(0 || false);   // false

console.log(!10);          // false
console.log(!0);           // true
```
> Falsy values in JavaScript are `0`, `false`, `undefined`, `null`, and `""` ( empty string ); all remaining values are treated as truthy values.

### 6. Bitwise Operators

| Operator             | Symbol | Category | Associativity |
| -------------------- | ------ | -------- | ------------- |
| Bitwise AND          | `&`    | Binary   | Left to Right |
| Bitwise OR           | `\|`   | Binary   | Left to Right |
| Bitwise XOR          | `^`    | Binary   | Left to Right |
| Left Shift           | `<<`   | Binary   | Left to Right |
| Right Shift          | `>>`   | Binary   | Left to Right |
| Bitwise NOT          | `~`    | Unary    | Right to Left |

```
-------------------------------------------------------------
|  A  |  B  |  A & B  |  A | B  |  A ^ B ( A | B - A & B )  |
|-----------------------------------------------------------|
|  0  |  0  |    0    |    0    |    0                      |
|  0  |  1  |    0    |    1    |    1                      |
|  1  |  0  |    0    |    1    |    1                      |
|  1  |  1  |    1    |    1    |    0                      |
-------------------------------------------------------------
```

```
var A = 77;
var B = 153;

var C = A & B;
var D = A | B;
var E = A ^ B;

A = 77      →     0     1     0     0     1     1     0     1
B = 153     →     1     0     0     1     1     0     0     1
-------------------------------------------------------------------
C = A & B   →     0     0     0     0     1     0     0     1
               x 128    64    32    16    8     4     2     1
               ----------------------------------------------------
                  0  +  0  +  0  +  0  +  8  +  0  +  0  +  1 = 9
               ----------------------------------------------------
D = A | B   →     1     1     0     1     1     1     0     1
               x 128    64    32    16    8     4     2     1
               ----------------------------------------------------
                 128  + 64  + 0  +  16 +  8  +  4  +  0  +  1 = 221
               ----------------------------------------------------
E = A ^ B   →     1     1     0     1     0     1     0     0
               x 128    64    32    16    8     4     2     1
               ----------------------------------------------------
                 128  + 64 +  0  +  16 +  0  +  4  +  0  +  0 = 212
               ----------------------------------------------------
```

`m << n` → `m × 2ⁿ`

`m >> n` → `m / 2ⁿ`

`~n` → `-m-1`

```
var A = 77;
var B = 153;

var C = A & B;
var D = A | B;
var E = A ^ B;

console.log(C, D, E);

var F = 100;
var G = 5;
var H = F << G;
console.log(H);

var I = 100;
var J = 5;
var K = I >> J;
console.log(K);

var L = 100;
var M = -100;
var N = ~L;
var O = ~M;
console.log(N, O);
```

### 7. Conditional ( Ternary ) Operator

The conditional ( ternary ) operator is used when we have to execute one statement out of two statements according to a condition.

#### Syntax

```
condition ? statement1 : statement2;
               True         False
```

```
const number = 11;

console.log(
  number % 2 === 0
    ? `${number} is an even number`
    : `${number} is an odd number`,
);
```

### 8. Increment Operator

The increment operator (`++`) is used to increase the value of a variable by `1`.

```
Pre-Increment       Post-Increment
( ++Operand )       ( Operand++ )

First Increment     First Assignment
then Assignment     then Increment
```

```
var A = 10;
var B = A++;
var C = ++A;

console.log(A, B, C);
```

### 9. Decrement Operator

The decrement operator (`--`) is used to decrease the value of a variable by `1`.

```
Pre-Decrement       Post-Decrement
( --Operand )       ( Operand-- )

First Decrement     First Assignment
then Assignment     then Decrement
```

```
var A = 10;
var B = A--;
var C = --A;

console.log(A, B, C);
```

## Flow Control Statements or Decision Making Statements

### 1. Conditional Statements or Selection Statements

- `if` Statement
- `if else` Statement
- Nested `if else` Statement
- `if else if` Ladder Statement
- `switch case` Statement

### 2. Iteration Statements or Loops

- `for` Loop
- `for in` Loop
- `for of` Loop
- `while` Loop
- `do while` Loop
- Nested Loops

### 3. Jump Statements

- `break` Statement
- `continue` Statement

## Conditional Statements or Selection Statements

### `if` Statement

The `if` statement is used when the execution of a statement block depends on a condition.

#### Syntax

```
if(condition){
    // statement block
}
```

```
if (true) {
  console.log("JavaScript is a High-Level Programming Language");
}
```
> [!Note]
> `{}` are optional if there is only one statement in the statement block.

### `if else` Statement

The `if else` statement is used when the execution of one statement block out of two blocks depends on a condition.

#### Syntax

```
if (condition) {
    // statement block
} else {
    // statement block
}
```

```
if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
```

### Nested `if else` Statement

A nested `if else` statement is an `if else` statement written inside another `if else` statement.

#### Syntax

```
if (condition1) {
    // statement block
} else {
    if (condition2) {
        // statement block
    } else {
        // statement block
    }
}
```

```
const number = 11;

if (number % 2 === 0) {
  if (number % 3 === 0) {
    console.log(`${number} is divisible by both 2 and 3`);
  } else {
    console.log(`${number} is divisible by 2 but not 3`);
  }
} else {
  if (number % 3 === 0) {
    console.log(`${number} is divisible by 3 but not 2`);
  } else {
    console.log(`${number} is divisible by neither 2 nor 3`);
  }
}
```

### `if else if` Ladder Statement

The `if else if` ladder statement is used when we have `n` number of conditions.

#### Syntax

```
if (condition1) {
    // statement block
} else if (condition2) {
    // statement block
} else if (condition3) {
    // statement block
} else {
    // statement block
}
```

```
var A = 10;
var B = 20;
var C = 30;
var D = 40;
var E = 50;

if (A >= B && A >= C && A >= D && A >= E) {
  console.log(`${A} is greater then ${B}, ${C}, ${D} and ${E}`);
} else if (B >= C && B >= D && B >= E) {
  console.log(`${B} is greater then ${A}, ${C}, ${D} and ${E}`);
} else if (C >= D && C >= E) {
  console.log(`${C} is greater then ${A}, ${B}, ${D} and ${E}`);
} else if (D >= E) {
  console.log(`${D} is greater then ${A}, ${B}, ${C} and ${E}`);
} else {
  console.log(`${E} is greater then ${A}, ${B}, ${C} and ${D}`);
}
```

### `switch case` Statement

The `switch case` statement is used to make menu-based programs.

#### Syntax

```
switch(expression) {
    case value1:
        // statement block
        break;

    case value2:
        // statement block
        break;

    default:
        // statement block
}
```

```
const dayNumber = 6;

switch (dayNumber) {
  case 0:
    console.log(`${dayNumber} is Sunday`);
    break;
  case 1:
    console.log(`${dayNumber} is Monday`);
    break;
  case 2:
    console.log(`${dayNumber} is Tuesday`);
    break;
  case 3:
    console.log(`${dayNumber} is Wednesday`);
    break;
  case 4:
    console.log(`${dayNumber} is Thursday`);
    break;
  case 5:
    console.log(`${dayNumber} is Friday`);
    break;
  case 6:
    console.log(`${dayNumber} is Saturday`);
    break;
  default:
    console.log("Invalid Day Number");
}
```

## Iteration Statements or Loops

Iteration statements or loops are used to iterate or repeat a statement block `n` times.

### `for` Loop

The `for` loop is used when we know the number of iterations.

#### Syntax

```
for(initialization; condition; increment/decrement) {
    // statement block
}
```

```
for (var number = 1; number <= 10; number++) {
  console.log(number);
}
```

### `while` Loop

The `while` loop is used when we do not have a fixed idea of the number of iterations.

#### Syntax

```
initialization;

while(condition){
    // statements
    updation;
}
```

```
var number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}
```

### `do while` Loop

The `do while` loop is used when we have to execute a statement block at least one time whether the condition is false.

#### Syntax

```
initialization;

do{
    // statements
    updation;
}while(condition);
```

```
var number = 1;

do {
  console.log(number);
  number++;
} while (number <= 10);

```

> [!Note]
> - `for` and `while` loops are entry-controlled loops.
> - `do while` loop is an exit-controlled loop.

### Nested Loops

Nested loops are loops written inside another loop.

#### Syntax

```
for(initialization; condition; updation){
    for(initialization; condition; updation){
        // statements
    }
}
```

```
for (let row = 1; row <= 5; row++) {
  let pattern = "";
  for (let column = 1; column <= row; column++) {
    pattern += "*";
  }
  console.log(pattern);
}
```

 ## Functions in JavaScript

### `function`

A `function` is a building block of any program by which we can divide a large program into small parts.

or

A `function` is a group of statements.

or

A `function` is a self-contained statement block.

#### Syntax

```
function functionName(parameters){
    // statements
}
```

```
function test() {
  console.log("Inside test function");
}

console.log("Inside main outer scope");
test();
console.log("Back to main outer scope");
```

### Space Complexity

#### Data Space
Memory required to store variables and constants.

#### Instruction Space
Memory required to store program instructions.

#### Environment Space
Memory required to store arguments and the return value of a function.

### Advantages of Functions

- Functions provide the feature of code reusability.
- Functions decrease the instruction space of a program.
- Functions decrease the data space of a program.
- Functions increase code readability and maintainability.

> [!Note]
> - A `function` cannot access variables defined inside another `function` directly. To do so, we use the concept of arguments and `return` values.
> - A `function` can access variables defined in the global scope, but the global scope cannot directly access variables defined inside a `function`.

### Types of Functions ( Based on Parameters and Return Value )

- `function` without `return` value and without parameters
```
  function addition() {
  var A = 10;
  var B = 20;
  var sum = A + B;
  console.log(`Sum of ${A} and ${B} is ${sum}`);
}

function test() {
  addition();
}

test();
```

- `function` with `return` value and without parameters
```
function addition() {
  var A = 10;
  var B = 20;
  var sum = A + B;
  return sum;
}

function test() {
  console.log(`Sum of 10 and 20 is ${addition()}`);
}

test();
```

- `function` without `return` value and with parameters
```
function addition(x, y) {                              // Parameters or Formal Parameters
  var sum = x + y;
  console.log(`Sum of ${x} and ${y} is ${sum}`);
}

function test() {
  var A = 10;
  var B = 20;
  addition(A, B);                                      // Arguments or Actual Parameters
}

test();
```

- `function` with `return` value and with parameters
```
function addition(x, y) {
  return x + y;
}

function test() {
  var A = 10;
  var B = 20;
  var sum = addition(A, B);
  console.log(`Sum of ${A} and ${B} is ${sum}`);
}

test();
```

### Default Parameters ( Optional Parameters )

```
function sum(A = 0, B = 0, C = 0) {
  console.log(`Sum of ${A}, ${B} and ${C} is ${A + B + C}`);
}

sum(10, 20, 30);
sum(10, 20);
sum(10);
sum();
```

### Function Returning an Array

```
function tableOfTwo() {
  return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
}

console.log(tableOfTwo());
```

### Regular Function

```
function sum(A, B) {
  return A + B;
}

console.log(`Sum of 10 and 20 is ${sum(10, 20)}`);
```

### Anonymous Function

```
var sum = function (A, B) {
  return A + B;
};

console.log(`Sum of 10 and 20 is ${sum(10, 20)}`);
```

### Fat Arrow Function

```
var sum = (A, B) => A + B;

console.log(`Sum of 10 and 20 is ${sum(10, 20)}`);
```

### Higher Order Functions and Callback Functions

#### Higher Order Function ( HOF )

A function is called a Higher Order Function if it takes another function as an argument.

or

A function is called a Higher Order Function if it accepts one or more functions as parameters.

#### Callback Function

A function is called a Callback Function if it is passed as an argument to a Higher Order Function.


```
function higherOrder(callback) {
  console.log("In Higher Order Function");
  callback();
  console.log("Back to Higher Order Function");
}

function callback() {
  console.log("In Callback Function");
}

console.log("In Main Outer Scope");
higherOrder(callback);
console.log("Back to Main Outer Scope");
```

### Storage Class

| Keyword       | Type                    | Life                    | Scope           |
| ------------- | ----------------------- | ----------------------- | --------------  |
| No Keyword    | Global Variable         | All Over Program        | Global Scope    |
| `var`         | Function Level Variable | Till Function           | Function Scope  |
| `let`         | Block Level Variable    | Till Block              | Block Scope     |
| `const`       | Block Level Variable    | Till Block              | Block Scope     |

```
function test() {
  if (true) {
    A = 10; // Global Scope
    var B = 20; // Function Scope
    let C = 30; // Block Scope
    const D = 40; // Block Scope
    console.log(
      `In if Block of Test Function A = ${A}, B = ${B}, C = ${C} and D = ${D}`,
    );
  }
  console.log(`Outside if Block of Test Function A = ${A} and B = ${B}`);
}
test();

console.log(`In Main Outer Scope A = ${A}`);

function main() {
  console.log(`In Main Function A = ${A}`);
}
main();
```

### Recursion

Recursion is a process in which a function calls itself.

or

A function is said to be recursive when it calls itself.

#### Syntax

```
function functionName() {
  // statements

  functionName(); // recursive call
}
```

```
const factorial = (number) =>
  number <= 1 ? 1 : number * factorial(number - 1);

console.log(`5! = ${factorial(5)}`);
```

### Self-Invoked Function or Immediately Invoked Function Expression ( IIFE )

```
(() => {
  var A = 10;
  var B = 20;
  console.log(`${A} + ${B} = ${A + B}`);
})();
```

## Arrays in JavaScript

An Array is a collection of heterogeneous ( different types of ) items arranged in contiguous order.

### Features of Arrays

- An array can contain duplicate items.
- An array can contain values of different data types.
- Arrays are mutable data types, i.e., they support updation such as insertion, deletion, and modification of elements.

> [!Note]
>
> - Array indexing always starts from `0`.
> - The index represents the offset ( distance ) of an element from the base element.
> - The first element is stored at index `0`, the second at index `1`, and so on.

#### Syntax

```
var array = [item1, item2, ..., itemN];
```

```
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
```


### Create an Array using Array Literal Style

```
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Numbers : ", numbers);
console.log("Number at Index 0 : ", numbers[0]);
console.log("Number at Index 1 : ", numbers[1]);
console.log("Number at Index 10 : ", numbers[10]);
```

### Create an Array using Empty Array Literal Style

```
const digits = [];
digits[0] = 0;
digits[1] = 1;
digits[9] = 9;
console.log("Digits : ", digits);
console.log("Digit at Index 0 : ", digits[0]);
console.log("Digit at Index 1 : ", digits[1]);
console.log("Digit at Index 10 : ", digits[10]);
```

### Create an Array using Array Constructor by Passing Array Elements as Arguments

```
const elements = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); // Array Elements
console.log("Elements : ", elements);
console.log("Element at Index 0 : ", elements[0]);
console.log("Element at Index 1 : ", elements[1]);
console.log("Element at Index 10 : ", elements[10]);
```

### Create an Array using Empty Array Constructor

```
const values = Array();
values[0] = 0;
values[1] = 1;
values[9] = 9;
console.log("Values : ", values);
console.log("Value at Index 0 : ", values[0]);
console.log("Value at Index 1 : ", values[1]);
console.log("Value at Index 10 : ", values[10]);
```

### Create an Array using Array Constructor by Passing Array Length as Argument

```
const items = Array(10); // Array Length
items[0] = 0;
items[1] = 1;
items[9] = 9;
console.log("Items : ", items);
console.log("Item at Index 0 : ", items[0]);
console.log("Item at Index 1 : ", items[1]);
console.log("Item at Index 10 : ", items[10]);
```

### `length` of an Array

```
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Numbers : ", numbers);
console.log("Total Numbers : ", numbers.length);

const digits = [];
digits[0] = 0;
digits[1] = 1;
digits[9] = 9;
console.log("Digits : ", digits);
console.log("Total Digits : ", digits.length);

const elements = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("Elements : ", elements);
console.log("Total Elements : ", elements.length);

const values = Array();
values[0] = 0;
values[1] = 1;
values[9] = 9;
console.log("Values : ", values);
console.log("Total Values : ", values.length);

const items = Array(10);
items[0] = 0;
items[1] = 1;
items[9] = 9;
console.log("Items : ", items);
console.log("Total Items : ", items.length);
```

### Accessing Array Elements using `for` Loop

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
```

### Accessing Array Elements using `while` Loop

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let index = 0;
while (index < array.length) {
  console.log(array[index]);
  index++;
}
```

### Accessing Array Elements using `do while` Loop

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let index = 0;
do {
  console.log(array[index]);
  index++;
} while (index < array.length);
```

### Accessing Array Elements using `for in` Loop

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index in array) {
  console.log(array[index]);
}
```

### Accessing Array Elements using `for of` Loop

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let element of array) {
  console.log(element);
}
```

### `toString()`

Converts an array into a string and uses `,` as a separator.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.toString());
```

### `join()`

Converts an array into a string, and you can specify a separator. By default, the `join()` method uses `,` as a separator.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.join(" "));
```

### `push()`

Inserts one or more elements at the end of an array and returns the updated length of the array.

```
const array = [0, 1, 2, 3, 4, 5];
console.log("Array before inserting new elements : ", array);

array.push(6);
array.push(7);
array.push(8);
array.push(9);

console.log("Array after inserting new elements : ", array);
```

### `pop()`

Deletes an element from the end of an array and returns the deleted element.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array before deleting existing elements : ", array);

array.pop();
array.pop();
array.pop();
array.pop();

console.log("Array after deleting existing elements : ", array);
```

### `unshift()`

Inserts one or more elements at the beginning of an array and returns the updated length of the array.

```
const array = [4, 5, 6, 7, 8, 9];
console.log("Array before inserting new elements : ", array);

array.unshift(3);
array.unshift(2);
array.unshift(1);
array.unshift(0);

console.log("Array after inserting new elements : ", array);
```

### `shift()`

Deletes an element from the beginning of an array and returns the deleted element.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array before deleting existing elements : ", array);

array.shift();
array.shift();
array.shift();
array.shift();

console.log("Array after deleting existing elements : ", array);
```

### `splice()`

Used to insert or delete elements at any specific position in an array and returns an array of deleted elements.

#### Syntax

```
array.splice(position, numberOfItemsToDelete, ...itemsToInsert);
```

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array before deleting existing elements : ", array);

array.splice(6, 4);
console.log("Array after deleting existing elements : ", array);

array.splice(6, 0, 6, 7, 8, 9);
console.log("Array after inserting new elements : ", array);
```

### `delete`

Deletes an element from an array and leaves an empty slot at that position.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array before deleting existing elements : ", array);

delete array[6];
delete array[7];
delete array[8];
delete array[9];

console.log("Array after deleting existing elements : ", array);
```

### `slice()`

Returns a copy of a portion of an array. For both `start` and `end`, a negative index can be used to indicate an offset from the end of the array. For example, `-2` refers to the second-to-last element of the array.

#### Syntax

```
array.slice(start, end);
```

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Array : ", array);
console.log("Sliced Array from Index 0 to Index 6", array.slice(0, 6));
console.log("Sliced Array from Index 6 to Last Index : ", array.slice(6));
console.log("Sliced Array for Last 10 Array Elements : ", array.slice(-10));
```

### `concat()`

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

```
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const vowels = ["A", "E", "I", "O", "U"];
const numerals = ["I", "II", "III", "IV", "V"];

const symbols = numbers.concat(vowels, numerals);
console.log("Symbols : ", symbols);
```

### `entries()`

Generates an iterator that contains the key ( index ) and value of each array element.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let element of array.entries()) {
  console.log(element);
}

// Accessing Index and Value separately
for (let [index, value] of array.entries()) {
  console.log("Index = ", index, "Value = ", value);
}
```

### `includes()`

Returns `true` if the array contains the specified element; otherwise, it returns `false`.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Is 5 an element of array? :", array.includes(5));
```

### `indexOf()`

Returns the lowest index of the specified element in the array. If the element is not found, it returns `-1`.

```
const array = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];

console.log("Index of 5 :", array.indexOf(5));
```

### `lastIndexOf()`

Returns the last index of the specified element in the array. If the element is not found, it returns `-1`.

```
const array = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];

console.log("Index of Last 5 : ", array.lastIndexOf(5));
```

### `reverse()`

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Reverse of Array :", array.reverse());
```

### `find()`

Returns the first element in the array that passes the specified test. If no element passes the test, it returns `undefined`.

```
const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(
  "First Array Element divisible by 5 :",
  array.find((element) => element % 5 === 0),
);
```

### `findLast()`

Returns the last element in the array that passes the specified test. If no element passes the test, it returns `undefined`.

```
const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(
  "Last Array Element divisible by 5 :",
  array.findLast((element) => element % 5 === 0),
);
```

### `findIndex()`

Returns the index of the first element in the array that passes the specified test. If no element passes the test, it returns `-1`.

```
const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(
  "Index of First Array Element divisible by 5 :",
  array.findIndex((element) => element % 5 === 0),
);
```

### `findLastIndex()`

Returns the index of the last element in the array that passes the specified test. If no element passes the test, it returns `-1`.

```
const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(
  "Index of Last Array Element divisible by 5 :",
  array.findLastIndex((element) => element % 5 === 0),
);
```

### `map()`

Returns a new array containing the results of applying a function to all elements of the array.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.map((element, index, array) => element % 2 === 0));
```

### `filter()`

Returns a new array containing the elements that pass the specified test.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.filter((element, index, array) => element % 2 === 0));
```

### `forEach()`

Calls a callback function for each element of the array and does not return anything.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach((element, index, array) => {
  console.log(element);
});
```

### `reduce()`

Calls the specified callback function for all elements of an array. The return value of the callback function is accumulated as a single result and is passed as an argument to the next call of the callback function.

```
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  "Sum of Digits from 0 to 9 is",
  array.reduce(
    (accumulator, currentValue, index, array) => accumulator + currentValue,
  ),
);
```

### `sort()`

```
const vowels = ["A", "I", "U", "E", "O"];

console.log("Vowels Array before Sorting :", vowels);
vowels.sort();
console.log("Vowels Array after Sorting :", vowels);

const numbers = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
console.log("Numbers Array before Sorting in Ascending Order :", numbers);
numbers.sort((x, y) => x - y);
console.log("Numbers Array after Sorting in Ascending Order :", numbers);
numbers.sort((x, y) => y - x);
console.log("Numbers Array after Sorting in Descending Order :", numbers);
```

### Array Destructuring

Array destructuring is the process of unpacking array elements into individual variables.

```
const student = [1714510036, "Sandeep Ahirwar", "B.Tech", 6.9];

const [ID, name, course, CGPA] = student;
console.log("ID :", ID);
console.log("Name :", name);
console.log("Course :", course);
console.log("CGPA :", CGPA);
```

## Strings in JavaScript

### String

A String is a collection of characters, a sequence of characters, or an array of characters.

- Strings are immutable data types.
- String indexing starts from `0`.

### String Constant

A String Constant is a sequence of characters enclosed within single quotes (`' '`), double quotes (`" "`), or backticks (`` ` ` ``).

```
const A = 'Apple';
const B = "Banana";
const C = `Coconut`;

console.log("A for", A);
console.log("B for", B);
console.log("C for", C);
```

### Accessing String Characters Using `for` Loop

```
const string = "JS";

for (let index = 0; index < string.length; index++) {
  console.log(string[index]);
}
```

### Accessing String Characters Using `while` Loop

```
const string = "JS";

let index = 0;
while (index < string.length) {
  console.log(string[index]);
  index++;
}
```

### Accessing String Characters Using `do while` Loop

```
const string = "JS";

let index = 0;
do {
  console.log(string[index]);
  index++;
} while (index < string.length);
```

### Accessing String Characters Using `for in` Loop

```
const string = "JS";

for (let index in string) {
  console.log(string[index]);
}
```

### Accessing String Characters Using `for of` Loop

```
const string = "JS";

for (let character of string) {
  console.log(character);
}
```

### `charAt()`

Returns the character at a specified index in a string.

```
const string = "JS";

console.log("Character at Index 0 :", string[0]);
console.log("Character at Index 1 :", string.charAt(1));

console.log("Character at 2nd Last Index :", string[-2]); // undefined
console.log("Character at Last Index :", string.charAt(-1)); // blank
```

### `at()`

Returns the character at a specified index in a string. It also supports negative indexing, where `-1` refers to the last character of the string.

```
const string = "JS";

console.log("Character at Index 0 :", string.at(0));
console.log("Character at 2nd Last Index :", string.at(-2));
```

### `charCodeAt()`

Returns the Unicode value of the character at a specified index. If no index is provided, it returns the Unicode value of the first character in the string.

```
const string = "JS";

for (let index in string) {
  console.log(`${string[index]} = ${string.charCodeAt(index)}`);
}
```

### `fromCharCode()`

Converts one or more Unicode values into their corresponding characters.

```
for (let index = 65; index <= 90; index++) {
  document.write(`${index} = ${String.fromCharCode(index)}<br>`);
}
```

### `indexOf()`

Returns the index of the first occurrence of a specified substring in a string. If the substring is not found, it returns `-1`.

```
const string = "THE QUICK BROWN FOX JUMPS OVER THE LITTLE LAZY DOG";

console.log(`First Index of T :`, string.indexOf("T"));
```

### `lastIndexOf()`

Returns the index of the last occurrence of a specified substring in a string. If the substring is not found, it returns `-1`.

```
const string = "THE QUICK BROWN FOX JUMPS OVER THE LITTLE LAZY DOG";

console.log(`Last Index of T :`, string.lastIndexOf("T"));
```

### `search()`

Returns the index of the first occurrence of a specified substring in a string. If the substring is not found, it returns `-1`.

```
const string = "THE QUICK BROWN FOX JUMPS OVER THE LITTLE LAZY DOG";

console.log(`First Index of T :`, string.search("T"));
```

### `includes()`

Checks whether a specified substring exists in a string. It returns `true` if the substring is found; otherwise, it returns `false`.

```
const string = "THE QUICK BROWN FOX JUMPS OVER THE LITTLE LAZY DOG";

console.log(`String includes T? :`, string.includes("T"));
```

### Copy a String into Another String

```
const string = "JS";

console.log("Original String :", string);
const language = string;
console.log("Copied String :", language);
```

### `concat()`

Concatenates one or more strings into a single string.

```
const C = "C";
const A = "A";
const T = "T";

const string = C + A + T;
console.log("String after Concatenation :", string);

const D = "D";
const O = "O";
const G = "G";

const pet = D.concat(O, G);
console.log("String after Concatenation :", pet);
```

### `startsWith()`

Checks whether a string starts with a specified substring. It returns `true` if the string starts with the substring; otherwise, it returns `false`.

```
const string = "www.google.com";
const subString = "www";

console.log(
  `Is www.google.com starts with www? :`,
  string.startsWith(subString),
);
```

### `endsWith()`

Checks whether a string ends with a specified substring. It returns `true` if the string ends with the substring; otherwise, it returns `false`.

```
const string = "codeysandeep@gmail.com";
const subString = "gmail.com";

console.log(
  `Is codeysandeep@gmail.com ends with gmail.com? :`,
  string.endsWith(subString),
);
```

### `toUpperCase()`

Converts all characters in a string to uppercase and returns a new string.

### `toLocaleUpperCase()`

Converts all characters in a string to uppercase according to the host environment's locale and returns a new string.

```
const string = "The Quick Brown Fox Jumps Over The Little Lazy Dog";

console.log(string.toUpperCase());
console.log(string.toLocaleUpperCase());
```

### `toLowerCase()`

Converts all characters in a string to lowercase and returns a new string.

### `toLocaleLowerCase()`

Converts all characters in a string to lowercase according to the host environment's locale and returns a new string.

```
const string = "The Quick Brown Fox Jumps Over The Little Lazy Dog";

console.log(string.toLowerCase());
console.log(string.toLocaleLowerCase());
```

### `substr()`

Returns a substring starting from a specified position and containing a specified number of characters.

```
const string = "THE QUICK BROWN FOX JUMPS OVER THE LITTLE LAZY DOG";

console.log("15 Characters from Index 4 :", string.substr(4, 15));
```

### `substring()`

Returns a substring from a specified start position to a specified end position. The end position is not included in the returned substring.

```
const string = "THE QUICK BROWN FOX JUMPS OVER THE LITTLE LAZY DOG";

console.log("subString from Index 4 to Index 19 :", string.substring(4, 19));
```

### `slice()`

Returns a substring from a specified start position to a specified end position. The end position is not included in the returned substring. Negative indices can be used to count positions from the end of the string.

```
const string = "THE QUICK BROWN FOX JUMPS OVER THE LITTLE LAZY DOG";

console.log("subString from Index 4 to Index 19 :", string.slice(4, 19));
console.log("subString from Index 31 :", string.slice(31));
console.log("Last 19 Characters :", string.slice(-19));
```

### `repeat()`

Creates and returns a new string by repeating the original string a specified number of times.

```
const string = "X";

console.log(
  `16 Digits of Your Card are 4394 ${string.repeat(4)} ${string.repeat(4)} ${string.repeat(4)}`,
);
```

### `replace()`

Returns a new string in which the first occurrence of a specified substring is replaced with another substring.

```
const string = "4392 0000 0000 0000";

console.log(
  `16 Digits of Your Card are ${string.replace("0000 0000 0000", "XXXX XXXX XXXX")}`,
);
```

### `replaceAll()`

Returns a new string in which all occurrences of a specified substring are replaced with another substring.

```
const string = "4392 0000 0000 0000";

console.log(`16 Digits of Your Card are ${string.replaceAll("0", "X")}`);
```

### `split()`

Splits a string into an array of substrings using a specified separator and returns the resulting array.

```
const digits = "0 1 2 3 4 5 6 7 8 9";
console.log("Digits :", digits.split());

const vowels = "AEIOU";
console.log("Vowels :", vowels.split(""));

const alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
console.log("Alphabet :", alphabet.split(" "));
```

### Reverse a String

Reverses the characters of a string and returns the reversed string.

```
const string = "THE QUICK BROWN FOX JUMPS OVER THE LITTLE LAZY DOG";

console.log("Original String :", string);
console.log("Reversed String :", string.split("").reverse().join(""));
```

### `trim()`

Removes all leading and trailing whitespace characters from a string and returns a new string.

```
const string = " JS ";

console.log(`Original String : "${string}"`);
console.log(`Trimmed String : "${string.trim()}"`);
```

### `trimStart()`

Removes all leading whitespace characters from the left side of a string and returns a new string.

```
const string = " JS";

console.log(`Original String : "${string}"`);
console.log(`Trimmed String : "${string.trimStart()}"`);
```

### `trimEnd()`

Removes all trailing whitespace characters from the right side of a string and returns a new string.

```
const string = "JS ";

console.log(`Original String : "${string}"`);
console.log(`Trimmed String : "${string.trimEnd()}"`);
```

### `localeCompare()`

Compares two strings and returns:

- `0` if both strings are equal.
- A positive value if the first string comes after the second string in alphabetical order.
- A negative value if the first string comes before the second string in alphabetical order.

```
const character = "A";
const vowel = "A";
console.log("How different is A from A? :", character.localeCompare(vowel));

const B = "B";
const C = "C";
console.log("How different is B from C? :", B.localeCompare(C));

const E = "E";
const D = "D";
console.log("How different is E from D?", E.localeCompare(D));
```

## Objects in JavaScript

An Object stores information in the form of key-value pairs.

- Keys must be unique.
- Values may be duplicated.
- Objects are mutable data types.

#### Syntax

```
let objectName = {
  key1: value1,
  key2: value2,
  ...
};
```

### Object Literal

```
const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log(student);
```

### Empty Object Literal

```
const fruit = {};
fruit.name = "Apple";
fruit.quantity = 50;
fruit.price = 120.5;
console.log(fruit);

const product = {};
product["name"] = "Laptop";
product["stock"] = 15;
product["price"] = 55000.99;
console.log(product);
```

### `Object()`

```
const student = Object();
student.ID = 1714510036;
student.name = "Sandeep Ahirwar";
student.CGPA = 6.9;
console.log(student);

const fruit = Object();
fruit["name"] = "Apple";
fruit["quantity"] = 50;
fruit["price"] = 120.5;
console.log(fruit);
```

### Accessing Object Values using Keys

```
const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};
console.log(`ID : ${student.ID}`);
console.log(`Name : ${student.name}`);
console.log(`CGPA : ${student.CGPA}`);

const fruit = {
  name: "Apple",
  quantity: 50,
  price: 120.5,
};
console.log(`Name : ${fruit["name"]}`);
console.log(`Quantity : ${fruit["quantity"]}`);
console.log(`Price : ${fruit["price"]}`);
```

### Accessing Object Values Using a `for...in` Loop

```
const object = {
  ID: 1714510036,
  NAME: "SANDEEP AHIRWAR",
  CGPA: 6.9,
};

for (let key in object) {
  console.log(`${key} : ${object[key]}`);
}
```

### Deleting Object Properties

```
const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Object Before Deleting Keys :", student);
delete student.ID;
delete student.name;
delete student.CGPA;
console.log("Object After Deleting Keys :", student);

const fruit = {
  name: "Apple",
  quantity: 50,
  price: 120.5,
};

console.log("Object Before Deleting Keys :", fruit);
delete fruit["name"];
delete fruit["quantity"];
delete fruit["price"];
console.log("Object After Deleting Keys :", fruit);
```

### Nesting of Objects

```
const student = {
  ID: 1714510036,
  name: {
    firstName: "Sandeep",
    lastName: "Ahirwar",
  },
  CGPA: 6.9,
};

console.log(student);
```

### Functions / Methods in Objects

```
const object = {
  A: 100,
  B: 5,
  addition() {
    console.log(
      `In Regular Function, ${object.A} + ${object.B} = ${object.A + object.B}`,
    );
  },
  subtraction() {
    console.log(
      `In Regular Function, ${this.A} - ${this.B} = ${this.A - this.B}`,
    );
  },
  multiplication: function () {
    console.log(
      `In Anonymous Function, ${object.A} * ${object.B} = ${object.A * object.B}`,
    );
  },
  division: function () {
    console.log(
      `In Anonymous Function, ${this.A} / ${this.B} = ${this.A / this.B}`,
    );
  },
  modulus: () =>
    console.log(
      `In Fat Arrow Function, ${object.A} % ${object.B} = ${object.A % object.B}`,
    ),
  square: () =>
    // Using this Keyword, We can't access the values of A and B
    console.log(
      `In Fat Arrow Function, ${this.A} ** ${this.B} = ${this.A ** this.B}`,
    ),
};

object.addition();
object.subtraction();
object.multiplication();
object.division();
object.modulus();
object.square();
```

> In an object, we can use either the object name or `this` to access or define object properties.

#### Note

> Never use `this` inside an arrow function method to represent the current object because `this` does not refer to the current object. Instead, it inherits `this` from its surrounding scope. In a browser's global scope, this may be the global `window` object.
