
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
