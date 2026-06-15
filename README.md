# Introduction to JavaScript

## What is JavaScript?

* JavaScript is a **high-level programming language**.
* It was developed by **Brendan Eich** at **Netscape Communications Corporation**.

## History

* Introduced in **1995**.
* Initially used as a **frontend language** to make web pages interactive.
* Since **2009**, JavaScript can also be used for **backend development** with **Node.js**.

## Importance

* JavaScript is one of the **core technologies of web development**.
* Works together with :
  * **HTML** → Structure of web pages
  * **CSS** → Styling of web pages
  * **JavaScript** → Interactivity and functionality

## Key Features of JavaScript

### 1. Interpreted Language

* Executed directly by the browser.
* No separate compilation required.
* Modern browsers use **JIT ( Just-In-Time ) compilation** for better speed.

### 2. Dynamic Typing

* No need to specify data types while declaring variables.
* A variable can store different types of values.
* Provides flexibility but may cause runtime errors.

### 3. Event-Driven Programming

* Code runs when an event occurs.
* Examples : mouse clicks, keyboard input, form submission.
* Helps create interactive web applications.

### 4. Asynchronous Programming

* Supports **Callbacks, Promises, and Async/Await**.
* Allows tasks to run without blocking the main program.
* Improves performance and responsiveness.

### 5. Object-Oriented Programming ( OOP )

* Supports :
  * Objects
  * Classes
  * Inheritance
  * Encapsulation
* Helps organize and reuse code.

### 6. Platform Independent

* Runs on :
  * Windows
  * Linux
  * macOS
  * Android
  * Other platforms
* Makes JavaScript highly portable.

### 7. Integration with HTML & CSS

* Works smoothly with HTML and CSS.
* Can modify web page content, structure, and styles dynamically.
* Uses the **DOM ( Document Object Model )**.

### 8. Functional Programming Support

* Supports :
  * Higher-order functions
  * Closures
  * Pure functions
* Allows different programming styles.

### 9. Rich Ecosystem & Libraries

* Has millions of packages available through **npm**.
* Developers can easily add extra features using libraries and packages.

## JavaScript Applications

### 1. Web Development

* Used to create interactive and dynamic websites.
* Enables real-time updates without page reloads.
* Improves user experience.

### 2. SPA ( Single Page Application ) Development

* Main language for SPA development.
* Popular frameworks / libraries :
  * React
  * Vue.js
  * Next.js
  * Angular

### 3. Server-Side Development

* Used for backend development.
* Popular technologies :
  * Node.js
  * Express.js
  * NestJS
  * Deno
  * Bun
* Used to build APIs and RESTful services.

### 4. Hybrid Mobile App Development

* Develop apps for Android and iOS using one codebase.
* Popular frameworks :
  * React Native
  * Ionic

### 5. Desktop Applications

* Build desktop apps using :
  * Electron
* Example : Visual Studio Code

### 6. Game Development

* Used for 2D and 3D games.
* Popular libraries :
  * Phaser
  * Babylon.js

### 7. Data Visualization & Analytics

* Creates charts and visual reports.
* Popular libraries :
  * Chart.js
  * D3.js

### 8. IoT ( Internet of Things )

* Used to control smart devices.
* Popular libraries :
  * Johnny-Five
  * IoT.js

### 9. AI & Machine Learning

* Can train AI models in the browser.
* Popular library :
  * TensorFlow.js

### Note

* JavaScript is **not commonly used** for :
  * Operating System Development
  * Device Driver Development
  * Low-level System Software

## ECMAScript

### What is ECMAScript?

* ECMAScript is a **standardized scripting language specification**.
* Developed by **Ecma International**.
* Defines the **rules, syntax, and features** of JavaScript.

### Purpose of ECMAScript

* Ensures consistent behavior across different browsers and environments.
* Acts as the standard that JavaScript follows.

### Related Languages

* JavaScript
* JScript
* ActionScript

### Relationship with JavaScript

* JavaScript is an **implementation of ECMAScript**.
* New JavaScript features are added through ECMAScript updates.

### Note

* **ECMA** stands for **European Computer Manufacturers Association**.

## JavaScript Engine

### What is a JavaScript Engine?

* A JavaScript engine is a program that executes JavaScript code.
* It converts JavaScript into **machine code**.
* It reads, interprets, compiles, and optimizes code for better performance.

### Popular JavaScript Engines

#### 1. V8

* Developed by **Google**
* JIT ( Just-In-Time ) based engine
* Used in :
  * Google Chrome
  * Microsoft Edge
  * Node.js
  * Brave

#### 2. Chakra

* Developed by **Microsoft**
* Interpreter-based engine
* Used in :
  * Internet Explorer
  * Legacy versions of Microsoft Edge

#### 3. JavaScriptCore

* Developed by **Apple**
* JIT-based engine
* Used in :
  * Safari

#### 4. SpiderMonkey

* Developed by **Mozilla**
* First JavaScript engine ever created
* Used in :
  * Firefox
  * Earlier versions of Netscape Navigator

### 5. Hermes

* Developed by **Meta**
* Mainly used with :
  * React Native
* Optimized for :
  * Faster app startup
  * Lower memory usage

| Engine         | Developer | Used In               |
| -------------- | --------- | --------------------- |
| V8             | Google    | Chrome, Edge, Node.js |
| Chakra         | Microsoft | IE, Legacy Edge       |
| JavaScriptCore | Apple     | Safari                |
| SpiderMonkey   | Mozilla   | Firefox               |
| Hermes         | Meta      | React Native          |

## JavaScript Keywords

### What are JavaScript Keywords?

* Keywords are **reserved words** in JavaScript.
* They have a predefined meaning.
* **Cannot be used as variable names, function names, or identifiers.**

### Common JavaScript Keywords

* Variable Declaration : `var`, `let`, `const`
* Conditional Statements : `if`, `else`, `switch`, `case`, `default`
* Loops : `for`, `while`, `do`, `break`, `continue`
* Functions : `function`, `return`
* Error Handling : `try`, `catch`, `finally`, `throw`
* Object & Class : `class`, `extends`, `super`, `this`, `new`
* Modules : `import`, `export`
* Async Programming : `async`, `await`
* Boolean Values : `true`, `false`, `null`

### Important Keywords List

`await*`, `break`, `case`, `catch`, `class*`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export*`, `extends*`, `false`, `finally`, `for`, `function`, `if`, `import*`, `in`, `instanceof`, `new`, `null`, `return`, `super*`, `switch`, `this`, `throw`, `true`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`, `let*`, `static`, `enum*`, `implements`, `interface`, `package`, `private`, `protected`, `public`

### Note

* Keywords marked with `*` are mainly related to modern JavaScript features or reserved for specific uses.
* Using keywords as identifiers will cause a syntax error.

## JavaScript Identifier

### What is an Identifier?

* An identifier is a name used to identify programming entities.
* Identifiers are used for :
  * Variables
  * Functions
  * Objects
  * Classes

### Rules for Identifiers

* JavaScript keywords cannot be used as identifiers.
* An identifier cannot start with a digit (`0-9`).
* Digits can be used after the first character.
* Only letters, digits, and underscore (`_`) are allowed.
* Special characters such as `@`, `#`, `$`, `%`, etc. are not allowed.
* Identifier names must be unique within the same scope / block.

### Valid Identifiers

```
name
userName
age1
_student
```

### Invalid Identifiers

```
1name      // Starts with a digit
for        // Keyword
user-name  // Contains special character (-)
@name      // Contains special character
```

### Note

* JavaScript identifiers are case-sensitive.
* `name`, `Name`, and `NAME` are treated as different identifiers.

## JavaScript Data Types

### What are Data Types?

* Data types define the type of value stored in a variable.
* JavaScript supports different data types to store different kinds of data.

### Data Types

#### 1. Number

* Represents whole and decimal numbers.
* Examples : `10`, `25.36`, `-50`, `-25.35`

#### 2. String

* Represents a collection of characters.
* Examples : `'a'`, `"apple"`, `` `a for apple` ``

#### 3. Boolean

* Represents logical values.
* Values : `true`, `false`

#### 4. Undefined

* A variable that is declared but not assigned a value.

#### 5. Null

* Represents the intentional absence of a value.

#### 6. BigInt

* Used to store very large integers.

#### 7. Symbol

* Represents unique and immutable values.

#### 8. Object

* A collection of key-value pairs.

#### 9. Array

* An ordered collection of values.

#### 10. Function

* A reusable block of code.

#### 11. Set

* A collection of unique values.

#### 12. Map

* A collection of key-value pairs where keys can be of any data type.

### Note

* JavaScript has **7 primitive data types** :
  `Number`, `String`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`
* `Object`, `Array`, `Function`, `Set`, and `Map` are **reference ( non-primitive ) types**.

## Data Representation

### 1. Variable

#### What is a Variable?

* A variable is used when data is not fixed.
* It is a named memory location used to store data.
* Variables act as containers or placeholders for values.

#### Syntax

```
var variableName = value;    // Function-level scope
let variableName = value;    // Block-level scope
const variableName = value;  // Block-level scope and read-only
```

### 2. Constants / Literals

#### What are Constants ( Literals )?

* Constants ( literals ) are fixed values.
* Their values do not change during program execution.

#### Types of Literals

* Boolean Literals : `true`, `false`
* Number Literals : `10`, `+20`, `-25`, `15.36`, `+25.25`, `-65.25`
* String Literals : `'a'`, `"apple"`, `` `a for apple` ``

## Tokens in JavaScript

### What are Tokens?

* Tokens are the smallest units of a JavaScript program.
* Examples : Keywords, Identifiers, Literals, Operators, and Punctuators.

### Example

```
var A = 10;
```

* `var` → Keyword
* `A` → Identifier
* `=` → Operator
* `10` → Literal ( Constant )
* `;` → Punctuator

### Note

* Tokens are the basic building blocks of JavaScript programs.

## Output Instructions in JavaScript

### `console.log()`

* Used to display output in the console.
* Commonly used for testing and debugging.

### Syntax

```
console.log(data);
```

### Example

```
var A = 10;
var B = 20;
var sum = A + B;

console.log(A, "+", B, "=", sum);
console.log(A + " + " + B + " = " + sum);
console.log(`${A} + ${B} = ${sum}`);
```

### Note

* `console.log()` prints data to the browser console or terminal.

## Input Instructions in JavaScript

### `prompt()`

* Used to take input from the user.
* Returns the input as a **string**.

```
const number = prompt("What is your favourite number?");
```

### `Number()`

* Converts input into a **number**.

```
const number = Number(prompt("What is your favourite number?"));
```

### `parseInt()`

* Converts input into an **integer**.

```
const number = parseInt(prompt("What is your favourite number?"));
```

### `parseFloat()`

* Converts input into a **floating-point number**.

```
const number = parseFloat(prompt("What is your favourite number?"));
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

### Need of Functions in Objects

```
const salary = {
  basic: 189000,
  allowances() {
    this.TA = (this.basic * 10) / 100;
    this.DA = (this.basic * 15) / 100;
    this.HRA = (this.basic * 10) / 100;
    this.MA = (this.basic * 20) / 100;
    this.gross = this.basic + this.TA + this.DA + this.HRA + this.MA;
    this.tax = (this.gross * 10) / 100;
    this.income = this.gross - this.tax;
  },
  slip() {
    console.log(`Basic Salary : ${this.basic}`);
    console.log(`TA           : ${this.TA}`);
    console.log(`DA           : ${this.DA}`);
    console.log(`HRA          : ${this.HRA}`);
    console.log(`MA           : ${this.MA}`);
    console.log(`Gross Salary : ${this.gross}`);
    console.log(`Income Tax   : ${this.tax}`);
    console.log(`Income       : ${this.income}`);
  },
};

salary.allowances();
salary.slip();
```

### Getters and Setters

Getter and Setter properties are used to overcome the function/method call overhead problem.

#### Function Call Overhead Problem

When the actual execution time of a function is less than the function switching time, it is called the Function Call Overhead Problem.

```
const employee = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  designation: "Software Engineer",
  city: "Jhansi",

  set setSalary(salary) {
    this.salary = salary;
  },

  get slip() {
    console.log(`
        Employee ID   : ${this.ID}
        Employee Name : ${this.name}
        Designation   : ${this.designation}
        City          : ${this.city}
        Salary        : ${this.salary}
        `);
  },
};

employee.setSalary = 189000;
employee.slip;
```

### Object Destructuring

```
const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

const { ID, name, CGPA } = student;
console.log(`
    ID   : ${ID}
    Name : ${name}
    CGPA : ${CGPA}
    `);
```

### Object Constructor

```
const Student = function (ID, name, CGPA) {
  this.ID = ID;
  this.name = name;
  this.CGPA = CGPA;
};

const SRGI1714510035 = new Student(1714510035, "Rohit Kushwaha", 6.7);
const SRGI1714510036 = new Student(1714510036, "Sandeep Ahirwar", 6.9);

console.log("SRGI1714510035 :", SRGI1714510035);
console.log("SRGI1714510036 :", SRGI1714510036);
```

### Object Prototype

- Every object in JavaScript has a built-in property called its prototype.
- A prototype is itself an object.
- Every prototype has its own prototype, forming a prototype chain.
- Prototype properties and methods are not direct properties of the object itself.
- One prototype can be shared by multiple objects.
- Prototype members are common to all objects that share the same prototype.

#### Need of Object Prototype

- To share common properties and methods among multiple objects.
- To reduce code duplication.
- To save memory.

```
const Student = function (ID, name, CGPA) {
  this.ID = ID;
  this.name = name;
  this.CGPA = CGPA;
};

Student.prototype.college = "SRGI";
Student.prototype.display = function () {
  console.log(`
    ID      : ${this.ID}
    Name    : ${this.name}
    CGPA    : ${this.CGPA}
    College : ${this.college}
    `);
};

const SRGI1714510035 = new Student(1714510035, "Rohit Kushwaha", 6.7);
SRGI1714510035.display();

const SRGI1714510036 = new Student(1714510036, "Sandeep Ahirwar", 6.9);
SRGI1714510036.display();
```

### `Object.keys()`

Returns an array containing all the keys of an object.

```
const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log(Object.keys(student));
```

### `Object.values()`

Returns an array containing all the values of an object.

```
const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log(Object.values(student));
```

### `Object.entries()`

Returns an array containing all the key-value pairs of an object.

```
const student = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log(Object.entries(student));
```

### `Object.assign()`

Used to copy the properties of one object into another object.

```
const A = {
  x: 1,
  y: 2,
};
const B = A; // Shallow Copy
B.x = 10;
B.y = 20;
console.log("A :", A);
console.log("B :", B);

const C = {
  x: 1,
  y: 2,
};
const D = {};
Object.assign(D, C); // Deep Copy
D.x = 10;
D.y = 20;
console.log("C :", C);
console.log("D :", D);
```

### `Object.create()`

Used to create a new object and make an existing object the prototype of the newly created object.

```
const A = {
  x: 1,
  y: 2,
};

const B = Object.create(A);

console.log("B :", B);
console.log("Prototype of B :", Object.getPrototypeOf(B));
```

### `Object.isFrozen()`

Checks whether an object is frozen or not. It returns `true` if the object is frozen; otherwise, it returns `false`.

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Object :", object);
console.log("Is Frozen? :", Object.isFrozen(object));
```

### `Object.freeze()`

Freezes an object and prevents its properties from being added, deleted, or updated.

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

Object.freeze(object);

console.log("Object :", object);
object.college = "SRGI";
delete object.name;
object.ID = "17CSECS005";
console.log("Object :", object);
```

### `Object.isSealed()`

Checks whether an object is sealed or not. It returns `true` if the object is sealed; otherwise, it returns `false`.

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Object :", object);
console.log("Is Object Sealed? :", Object.isSealed(object));
```

### `Object.seal()`

Seals an object and prevents its properties from being added or deleted, but existing properties can still be updated.

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

Object.seal(object);

console.log("Object :", object);
object.college = "SRGI";
delete object.name;
object.ID = "17CSECS005";
console.log("Object :", object);
```

### `Object.getOwnPropertyDescriptor(object, property)`

Returns the descriptor of a specified property of an object.

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log(
  "Description of ID :",
  Object.getOwnPropertyDescriptor(object, "ID"),
);
console.log(
  "Description of Name :",
  Object.getOwnPropertyDescriptor(object, "name"),
);
console.log(
  "Description of CGPA :",
  Object.getOwnPropertyDescriptor(object, "CGPA"),
);
```

### `Object.setPrototypeOf(object, prototype)`

Used to set the prototype of an object.

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

Object.setPrototypeOf(object, { college: "SRGI" });

console.log("Object :", object);
console.log(`
    ID      : ${object.ID}
    Name    : ${object.name}
    CGPA    : ${object.CGPA}
    College : ${object.college}
    `);
```

### `Object.getPrototypeOf(object)`

Used to get the prototype of an object.

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

Object.setPrototypeOf(object, { college: "SRGI" });

console.log("Object :", object);
console.log("Prototype of Object :", Object.getPrototypeOf(object));
```

### `Object.is()`

Used to compare two values and determine whether they are the same value. It returns `true` if the values are equal; otherwise, it returns `false`.

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Is ID = 1714510036? :", Object.is(object.ID, 1714510036));
console.log(`Is ID = "1714510036"? :`, Object.is(object.ID, "1714510036"));
```

### `Object.defineProperty(object, property, descriptor)`

Used to define a property on an object with detailed settings (descriptor).

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Object :", object);

Object.defineProperty(object, "college", {
  value: "SRGI",
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log("Object :", object);
object.college = "AKTU";
console.log("Object :", object);

Object.defineProperty(object, "email", {
  value: "codeysandeep@gmail.com",
  writable: true,
  enumerable: false,
  configurable: true,
});

console.log("Object :", object);

Object.defineProperty(object, "course", {
  value: "B.Tech",
  writable: true,
  enumerable: true,
  configurable: false,
});

console.log("Object :", object);
delete object.course;
console.log("Object :", object);
```

### `Object.defineProperties(object, { property1: descriptor1, property2: descriptor2 })`

Used to define multiple properties on an object with detailed settings (descriptors).

```
const object = {
  ID: 1714510036,
  name: "Sandeep Ahirwar",
  CGPA: 6.9,
};

console.log("Object :", object);

Object.defineProperties(object, {
  college: {
    value: "SRGI",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  course: {
    value: "B.Tech",
    writable: false,
    enumerable: false,
    configurable: false,
  },
});

console.log("Object :", object);
```

## Sets in JavaScript

A Set is a collection of unique elements.

- Cannot contain duplicate items.
- Stores only unique values.
- Does not support indexing.
- Elements can be added or removed dynamically.

### `new Set()`

```
const set = new Set([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]);

console.log("Set :", set);
```

### `Array.from()`

```
const set = new Set([0, 1, 2, 3, 4, 5]);
console.log("Set :", set);

const array = Array.from(set);
console.log("Array :", array);
```

### `add()`

Used to add an item to a Set. If the item already exists, it does nothing. If no argument is provided, it adds `undefined` to the Set.

```
const set = new Set([0, 1, 2, 3, 4, 5]);
console.log("Set :", set);

set.add();
console.log("Set :", set);

set.add(null);
console.log("Set :", set);
```

### `delete()`

Used to delete a specified item from a Set.

- Removes the item if it exists in the Set.
- Returns `false` if the item does not exist.
- If no argument is provided, it attempts to remove `undefined` from the Set. If `undefined` is not present, nothing happens.

```
const set = new Set([0, 1, 2, 3, 4, 5, undefined, null]);
console.log("Set :", set);

set.delete();
console.log("Set :", set);

set.delete(null);
console.log("Set :", set);
```

### `clear()`

Removes all items from a Set.

```
const set = new Set([0, 1, 2, 3, 4, 5]);
console.log("Set :", set);

set.clear();
console.log("Set :", set);
```

### `size`

Returns the number of elements in a Set.

```
const set = new Set([0, 1, 2, 3, 4, 5]);

console.log("Set :", set);
console.log("Size of Set :", set.size);
```

### `has()`

Returns `true` if the specified item exists in the Set; otherwise, it returns `false`.

```
const set = new Set([0, 1, 2, 3, 4, 5]);

console.log("Is Set contains 0? :", set.has(0));
```

### `values()`

Returns an iterator containing all the elements of a Set.

```
const set = new Set([0, 1, 2, 3, 4, 5]);

console.log("Values of Set :", set.values());
```

### `keys()`

Returns an iterator containing all the elements of a Set.

> In a Set, `keys()` and `values()` return the same iterator because a Set stores only values.

```
const set = new Set([0, 1, 2, 3, 4, 5]);

console.log("Keys of Set :", set.keys());
```

### `entries()`

Returns an iterator containing the elements of a Set as `[value, value]` pairs.

```
const set = new Set([0, 1, 2, 3, 4, 5]);

console.log("Entries of Set :", set.entries());
```

## Maps in JavaScript

A Map is a collection of items stored as key-value pairs.

- Keys must be unique.
- Values may be duplicated.
- If duplicate keys are used in a Map, only the last value assigned to that key is retained.

### `new Map()`

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("Map :", map);
```

### `set()`

Used to insert a key-value pair into a Map. If the key already exists, `set()` updates the value of that key.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("Map :", map);
map.set("college", "SRGI");
console.log("Map :", map);
```

### `delete()`

Used to delete a specified key from a Map.

- Removes the key-value pair if the key exists.
- Does nothing if the key is invalid or does not exist in the Map.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
  ["college", "SRGI"],
]);

console.log("Map :", map);
map.delete("college");
console.log("Map :", map);
```

### `clear()`

Used to delete all key-value pairs from a Map.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("Map :", map);
map.clear();
console.log("Map :", map);
```

### `size`

Returns the number of key-value pairs in a Map.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("Size of Map :", map.size);
```

### `has()`

Returns `true` if the specified key exists in the Map; otherwise, it returns `false`.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("Is Map contains ID? :", map.has("ID"));
```

### `get()`

Returns the value associated with a specified key. It returns `undefined` if no argument is provided or if the key does not exist in the Map.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("ID :", map.get("ID"));
```

### `values()`

Returns an iterator containing all the values of a Map.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("Values of Map :", map.values());
```

### `keys()`

Returns an iterator containing all the keys of a Map.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("Keys of Map :", map.keys());
```

### `entries()`

Returns an iterator containing all key-value pairs of a Map in the form `[key, value]`.

```
const map = new Map([
  ["ID", 1714510036],
  ["name", "Sandeep Ahirwar"],
  ["CGPA", 6.9],
]);

console.log("Entries of Map :", map.entries());
```

## Date in JavaScript

### `new Date()`

Returns the current date and time.

```
const date = new Date();

console.log("Date :", date);
```

### `toString()`

```
const date = new Date();

console.log("String :", date.toString());
```

### `toDateString()`

```
const date = new Date();

console.log("Date String :", date.toDateString());
```

### `toTimeString()`

```
const date = new Date();

console.log("Time String :", date.toTimeString());
```

### `toLocaleString()`

```
const date = new Date();

console.log("Locale String :", date.toLocaleString());
```

### `toLocaleDateString()`

```
const date = new Date();

console.log("Locale Date String :", date.toLocaleDateString());
```

### `toLocaleTimeString()`

```
const date = new Date();

console.log("Locale Time String :", date.toLocaleTimeString());
```

### Custom Date Using `new Date()`

#### Syntax

```
new Date(year, month, day, hour, minute, second, millisecond);
```

- We have to specify at least two items to create a custom date.
- If only a single argument is passed to `Date()`, it is treated as milliseconds.

```
console.log(new Date(2000, 8, 16, 20, 10, 20, 30));
console.log(new Date(2000, 8, 16, 20, 10, 20, 30).toLocaleString());
console.log(new Date(2000, 8, 16, 20, 10, 20).toLocaleString());
console.log(new Date(2000, 8, 16, 20, 10).toLocaleString());
console.log(new Date(2000, 8, 16, 20).toLocaleString());
console.log(new Date(2000, 8, 16).toLocaleString());
console.log(new Date(2000, 8).toLocaleString());
console.log(new Date(969062400000).toLocaleString());
console.log(new Date("2000/09/16").toLocaleString());
console.log(new Date("2000/09/16 08:10:20 pm").toLocaleString());
```

### `getFullYear()`

```
const date = new Date();

console.log("Full Year :", date.getFullYear());
```

### `getMonth()`

```
const date = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log("Month :", months[date.getMonth()]);
```

### `getDate()`

```
const date = new Date();

console.log("Date :", date.getDate());
```

### `getHours()`

```
const date = new Date();

console.log("Hours :", date.getHours());
```

### `getMinutes()`

```
const date = new Date();

console.log("Minutes :", date.getMinutes());
```

### `getSeconds()`

```
const date = new Date();

console.log("Seconds :", date.getSeconds());
```

### `getMilliseconds()`

```
const date = new Date();

console.log("Milliseconds :", date.getMilliseconds());
```

### `getUTCDate()`

```
const date = new Date();

console.log("UTC Date :", date.getUTCDate());
```

### `getTime()`

Returns the number of milliseconds elapsed since **January 1, 1970, 00:00:00 UTC**.

```
const date = new Date();

console.log("Time :", date.getTime());
```

### `getDay()`

Returns the day of the week as a number.

- `0` → Sunday
- `1` → Monday
- `2` → Tuesday
- `3` → Wednesday
- `4` → Thursday
- `5` → Friday
- `6` → Saturday

```
const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Day :", days[date.getDay()]);
```

### `Date.now()`

Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.

```
console.log("Current Date and Time :", Date.now());
```

## OOPS

* Designed by **Bjarne Stroustrup** ( Founder of C++ ).
* OOPS stands for **Object-Oriented Programming System**.

OOPS is a computer science term that defines a well-structured series of steps to construct a computer application composed of multiple objects. Each object can handle data and send or receive messages from other objects. Since objects are independent of each other, OOPS is considered more flexible than the procedural programming approach.

**OR**

OOPS is a programming concept that helps us achieve the following approaches in programming.

### OOPS Approaches

1. **Abstraction** – Data Hiding
2. **Encapsulation** – Binding data and functions into a single unit
3. **Polymorphism** – Many forms of a single entity
4. **Inheritance** – Code Reusability

### Class

- A class is required to implement OOPS.
- A class is a technique by which we can define a new data type as required.
- A class is a blueprint for objects.
- A class is a collection of properties and behaviors, where properties are variables of different data types and behaviors are functions.
- A class is a logical entity only, which means it does not have a physical existence in memory until its instance is created.
- The instance of a class is called an object.
- We can create **n** objects of a class.
- Each object has the same properties and behaviors, but their values may be different.

#### Syntax

```
class ClassName {
  constructor() {
    // initialization code
  }

  method1() {
    // code
  }

  method2() {
    // code
  }

  // more methods
}
```

### Class without Constructor

```
class Test {
  show() {
    console.log("In show() of Test Class");
  }
  display() {
    console.log("In display() of Test Class");
  }
}

const object = new Test();

object.show();
object.display();
```

```
class Addition {
  calculate(x, y) {
    this.x = x;
    this.y = y;
    this.sum = x + y;
  }
  display() {
    console.log(`${this.x} + ${this.y} = ${this.sum}`);
  }
}

const addition = new Addition();

addition.calculate(10, 20);
addition.display();
```

```
class IsMagicalNumber {
  data(number) {
    this.number = number;
  }
  check() {
    let tempNumber = this.number;
    let sumOfDigits = 0;
    while (tempNumber !== 0) {
      let digit = tempNumber % 10;
      sumOfDigits += digit;
      tempNumber = parseInt(tempNumber / 10);
    }
    let tempSumOfDigits = sumOfDigits;
    let reverse = 0;
    while (tempSumOfDigits !== 0) {
      let digit = tempSumOfDigits % 10;
      reverse = reverse * 10 + digit;
      tempSumOfDigits = parseInt(tempSumOfDigits / 10);
    }
    if (sumOfDigits * reverse === this.number) {
      console.log(`${this.number} is a Magical Number`);
    } else {
      console.log(`${this.number} is not a Magical Number`);
    }
  }
}

const isMagicalNumber = new IsMagicalNumber();

isMagicalNumber.data(1729);
isMagicalNumber.check();
```

### OOPS Approaches

#### 1. Abstraction

- Data hiding, i.e., hiding complexity and showing functionality.
- We can hide members using access specifiers like `public`, `private`, and `protected`.
- JavaScript does not fully support abstraction.

#### 2. Encapsulation

- Binding data members with member functions/methods.
- Wrapping up data members with member functions.

#### 3. Polymorphism

- Many forms of a single entity.

#### Method Overloading

- If we define more than one function in a class with the same name but different signatures ( either the number of arguments or their types are different ), it is called method overloading.
- JavaScript does not support method overloading.

#### Constructor and Destructor

- We can create user-defined constructors in JavaScript.
- We cannot create user-defined destructors in JavaScript.

#### Method Overriding

- If both parent and child classes have members with the same name, then the child class overrides the parent's member.
- The child class can inherit only those members from the parent that it does not already have.
- JavaScript supports method overriding.

#### Operator Overloading

- If we provide a user-defined definition to an existing operator, then this concept is called operator overloading.
- JavaScript does not support operator overloading.

#### 4. Inheritance

- If we reuse the members of an existing class in a new class, it is called inheritance.
- JavaScript supports inheritance.

### Constructor

- A special member method of a class that provides memory initialization to a class object.
- There is no need to call a constructor explicitly; it is called automatically when an object is created using the `new` keyword.
- A constructor can be parameterized.
- If we do not provide a definition for a constructor in a class, then the compiler ( JIT ) provides a default constructor.
- We cannot return a user-defined value from a constructor.

### Class with constructor

```
class Test {
  constructor() {
    console.log("Constructing Test Class");
  }
  show() {
    console.log("In show() of Test Class");
  }
  display() {
    console.log("In display() of Test Class");
  }
}

const object = new Test();

object.show();
object.display();
```

```
class Addition {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.sum = x + y;
  }
  calculate() {
    console.log(`${this.x} + ${this.y} = ${this.sum}`);
  }
}

const addition = new Addition(10, 20);
addition.calculate();

const sum = new Addition();
sum.calculate();
```

### Inheritance

- Inheritance is an OOPS approach that provides a feature to reuse all members of an existing class in a new class.
- For example, if a class `B` inherits class `A`, then class `B` can reuse all the members of class `A`.
- Class `B` is called the **Child Class**, **Derived Class**, or **Subclass**.
- Class `A` is called the **Parent Class**, **Base Class**, or **Superclass**.

#### Types of Inheritance

1. Single Level Inheritance
2. Multilevel Inheritance
3. Hierarchical Inheritance

#### Syntax

```
class Parent {
    // properties and methods
}

class Child extends Parent {
    // properties and methods
}
```

> [!Note]
> A child class can access only those members of the parent class that the child class does not already have.
> If both the parent and child classes have members with the same name, the child class member overrides the parent class member.

```
class Parent {
  show() {
    console.log("In show() of Parent Class");
  }
  // Overridden Method
  print() {
    console.log("In print() of Parent Class");
  }
}

class Child extends Parent {
  display() {
    console.log("In display() of Child Class");
  }
  print() {
    console.log("In print() of Child Class");
  }
}

const object = new Child();

object.show();
object.display();
object.print();
```

### Accessing Overridden Method

```
class Parent {
  show() {
    console.log("In show() of Parent Class");
  }
  // Overridden Method
  print() {
    console.log("In print() of Parent Class");
  }
}

class Child extends Parent {
  display() {
    console.log("In display() of Child Class");
  }
  print() {
    super.print();
    console.log("In print() of Child Class");
  }
}

const object = new Child();

object.show();
object.display();
object.print();
```

### Constructor in Parent Class

```
class Parent {
  constructor() {
    console.log("Constructing Parent Class");
  }
  show() {
    console.log("In show() of Parent Class");
  }
}

class Child extends Parent {
  display() {
    console.log("In display() of Child Class");
  }
}

const object = new Child();

object.show();
object.display();
```

### Constructor in Child Class

```
class Parent {
  show() {
    console.log("In show() of Parent Class");
  }
}

class Child extends Parent {
  constructor() {
    super();
    console.log("Constructing Child Class");
  }
  display() {
    console.log("In display() of Child Class");
  }
}

const object = new Child();

object.show();
object.display();
```

### Single Inheritance

When a single child class inherits a single parent class, it is called **Single Inheritance**.

```
class Parent {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sum = x + y;
  }
}

class Child extends Parent {
  calculate() {
    console.log(`${this.x} + ${this.y} = ${this.sum}`);
  }
}

const object = new Child(10, 20);

object.calculate();
```

### Multilevel Inheritance

When a child class is inherited by another child class, it is called **Multilevel Inheritance**.

```
class GrandParent {
  constructor() {
    this.array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
}

class Parent extends GrandParent {
  display() {
    return this.array;
  }
}

class Child extends Parent {
  reverse() {
    return this.array.reverse();
  }
}

const child = new Child();

console.log("Original Array :", child.display());
console.log("Reversed Array :", child.reverse());
```

### Hierarchical Inheritance

When a single parent class is inherited by more than one child class, it is called **Hierarchical Inheritance**.

```
class Math {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Addition extends Math {
  calculate() {
    console.log(`${this.x} + ${this.y} = ${this.x + this.y}`);
  }
}

class Subtraction extends Math {
  calculate() {
    console.log(`${this.x} - ${this.y} = ${this.x - this.y}`);
  }
}

const addition = new Addition(10, 20);
addition.calculate();

const subtraction = new Subtraction(20, 10);
subtraction.calculate();
```

## DOM and BOM Manipulation

### BOM ( Browser Object Model )

- BOM stands for **Browser Object Model**.
- It allows JavaScript to interact with the browser itself, outside of the content of the webpage.
- It provides access to browser features like `window`, `history`, `screen`, `navigator`, and `location`.

### DOM ( Document Object Model )

- DOM stands for **Document Object Model**.
- DOM manipulation refers to using JavaScript to access, modify, add, or delete elements and content of an HTML document.
- It allows dynamic updates to the content, structure, and styles of a web page.
- With the help of DOM, we can perform the following operations:

1. We can change all the HTML elements in a document.
2. We can change all the HTML attributes in a document.
3. We can change all the CSS styles in a document.
4. We can react to existing events in a document.
5. We can create our own events and react to them.
6. We can perform time-based events.
7. We can create and delete HTML elements and attributes in a document.

### DOM Selectors

#### getElementById()

```
<h1 id="heading" class="heading">HTML</h1>
<p id="paragraph" class="paragraph">
    HTML ( HyperText Markup Language ) is the standard markup language used to create and structure web pages.
</p>
```

```
const heading = document.getElementById("heading");
console.log(heading.innerText);
```

#### getElementsByClassName()

```
<ul>
    <li class="list-item">Simple and easy to learn</li>
    <li class="list-item">Platform independent</li>
    <li class="list-item">Tag-based language</li>
    <li class="list-item">Used to structure web pages</li>
    <li class="list-item">Supports hyperlinks</li>
    <li class="list-item">Supports multimedia</li>
    <li class="list-item">Case insensitive</li>
    <li class="list-item">Works with CSS and JavaScript</li>
    <li class="list-item">Open standard and browser supported</li>
</ul>
```

```
const listItem = document.getElementsByClassName("list-item");
for (let item of listItem) {
  console.log(item.innerText);
}
```

#### getElementsByTagName()

```
<ul>
    <li class="list-item">Simple and easy to learn</li>
    <li class="list-item">Platform independent</li>
    <li class="list-item">Tag-based language</li>
    <li class="list-item">Used to structure web pages</li>
    <li class="list-item">Supports hyperlinks</li>
    <li class="list-item">Supports multimedia</li>
    <li class="list-item">Case insensitive</li>
    <li class="list-item">Works with CSS and JavaScript</li>
    <li class="list-item">Open standard and browser supported</li>
</ul>
```

```
const li = document.getElementsByTagName("li");
for (let i of li) {
  console.log(i.innerText);
}
```

#### querySelector()

```
<h1 id="heading" class="heading">HTML</h1>
<p id="paragraph" class="paragraph">
    HTML ( HyperText Markup Language ) is the standard markup language used to create and structure web pages.
</p>

<ul>
    <li class="list-item">Simple and easy to learn</li>
    <li class="list-item">Platform independent</li>
    <li class="list-item">Tag-based language</li>
    <li class="list-item">Used to structure web pages</li>
    <li class="list-item">Supports hyperlinks</li>
    <li class="list-item">Supports multimedia</li>
    <li class="list-item">Case insensitive</li>
    <li class="list-item">Works with CSS and JavaScript</li>
    <li class="list-item">Open standard and browser supported</li>
</ul>
```

```
const heading = document.querySelector("#heading");
console.log(heading.innerText);

const paragraph = document.querySelector(".paragraph");
console.log(paragraph.innerText);

const li = document.querySelector("li");
console.log(li.innerText);
```

#### querySelectorAll()

```
<h1 id="heading" class="heading">HTML</h1>
<p id="paragraph" class="paragraph">
    HTML ( HyperText Markup Language ) is the standard markup language used to create and structure web pages.
</p>

<ul>
    <li class="list-item">Simple and easy to learn</li>
    <li class="list-item">Platform independent</li>
    <li class="list-item">Tag-based language</li>
    <li class="list-item">Used to structure web pages</li>
    <li class="list-item">Supports hyperlinks</li>
    <li class="list-item">Supports multimedia</li>
    <li class="list-item">Case insensitive</li>
    <li class="list-item">Works with CSS and JavaScript</li>
    <li class="list-item">Open standard and browser supported</li>
</ul>
```

```
const heading = document.querySelectorAll("#heading");
console.log(heading[0].innerText);

const paragraph = document.querySelectorAll(".paragraph");
console.log(paragraph[0].innerText);

const li = document.querySelectorAll("li");
for (let i of li) {
  console.log(i.innerText);
}

const heading_and_paragraph = document.querySelectorAll([
  "#heading",
  "#paragraph",
]);
console.log(heading_and_paragraph[0].innerText);
console.log(heading_and_paragraph[1].innerText);
```

### Mouse Events

* `onmouseover` – Triggered when the mouse pointer moves over an element.
* `onmouseenter` – Triggered when the mouse pointer enters an element.
* `onmousedown` – Triggered when a mouse button is pressed on an element.
* `onmouseup` – Triggered when a mouse button is released on an element.
* `onclick` – Triggered when an element is clicked.
* `ondblclick` – Triggered when an element is double-clicked.
* `onmousewheel` – Triggered when the mouse wheel is scrolled.
* `onmousemove` – Triggered when the mouse pointer moves within an element.
* `onmouseout` – Triggered when the mouse pointer moves out of an element.
* `onmouseleave` – Triggered when the mouse pointer leaves an element.

### Keyboard Events

* `onkeydown` – Triggered when a key is pressed down.
* `onkeyup` – Triggered when a pressed key is released.
* `onkeypress` – Triggered when a key is pressed ( deprecated in modern JavaScript ).

### Form Events

* `onfocus` – Triggered when an element receives focus.
* `onblur` – Triggered when an element loses focus.
* `onchange` – Triggered when the value of an element changes.
* `onsubmit` – Triggered when a form is submitted.

### Window Size

Two properties can be used to determine the size of the browser window.

Both properties return the size in pixels.

* `window.innerHeight` – Returns the inner height of the browser window in pixels.
* `window.innerWidth` – Returns the inner width of the browser window in pixels.

### `window.open()`

Used to open a new browser window.

```
window.open("https://www.google.com");
```

### `window.close()`

Used to close the current window.

### `window.screen`

The `window.screen` object can be written without the `window` prefix.

#### Properties

* `screen.width` – Returns the width of the visitor's screen in pixels.
* `screen.height` – Returns the height of the visitor's screen in pixels.
* `screen.availWidth` – Returns the width of the visitor's screen in pixels, excluding interface features such as the taskbar.
* `screen.availHeight` – Returns the height of the visitor's screen in pixels, excluding interface features such as the taskbar.

### `window.location`

The `window.location` object can be written without the `window` prefix.

* `window.location.href` – Returns the URL of the current page.
* `window.location.hostname` – Returns the domain name of the web host.
* `window.location.pathname` – Returns the path and filename of the current page.
* `window.location.protocol` – Returns the web protocol used ( `http:` or `https:` ).

### `window.history`

The `window.history` object can be written without the `window` prefix.

To protect user privacy, there are limitations on how JavaScript can access this object.

#### Methods

* `history.back()` – Same as clicking the Back button in the browser.
* `history.forward()` – Same as clicking the Forward button in the browser.

### `window.navigator`

The `window.navigator` object can be written without the `window` prefix.

#### Properties

* `navigator.cookieEnabled`
* `navigator.appCodeName`
* `navigator.platform`

### Dialog Boxes

#### `window.alert()`

Used to display an alert message box.

#### `window.prompt()`

Used to display an input dialog box and get input from the user.

#### `window.confirm()`

Used to display a confirmation dialog box with **OK** and **Cancel** buttons.

## How JavaScript Works?

### Hoisting in JavaScript

During the execution of a program, JavaScript has two phases:

1. Creation Phase
2. Execution Phase

**Creation Phase :** This phase contains the declarations of all variables and functions.

**Execution Phase :** This phase contains the program statements that are executed line by line.

so, **Hoisting** is a JavaScript mechanism where variable and function declarations are processed during the Creation Phase before the Execution Phase begins.

#### Code we write

```
console.log(A);
var A = 10;
console.log(A);
```

```
var B = 20;
console.log(B);
var C = 30;
console.log(C);
```

#### Code Sent for Execution

```
var A;
console.log(A);
var A = 10;
console.log(A);
```

```
var B;
var C;
var B = 20;
console.log(B);
var C = 30;
console.log(C);
```

In ES6 ( ECMAScript 2015 ), hoisting issues can be avoided by using `let` and `const` instead of `var`.

### Strict Mode

`"use strict";` enables Strict Mode in JavaScript, which helps catch common coding mistakes and prevents the use of unsafe features.

```
"use strict";

var A = 10;
console.log(A);
```

```
"use strict";
var B = 20;
console.log(B);

delete B; // SyntaxError
console.log(B);
```

### Scope Chain and Lexical Scoping

The Scope Chain is used to resolve the value of variables in JavaScript. It is lexically defined, which means we can determine the scope chain by looking at the code.

At the top is the Global Scope ( `window` object in browsers ), followed by Local Scope ( functions ).

**Lexical Scoping** means that an inner function can access variables defined in its outer function and the global scope.

* Inner functions can access variables from outer functions and the global scope.
* Outer functions cannot access variables defined inside inner functions.
* The global scope cannot access variables defined inside functions.

```
const A = 10;
function outer() {
  const B = 20;
  function inner() {
    const C = 30;
    console.log(`In inner(), A = ${A}, B = ${B} and C = ${C}`);
  }
  inner();
  console.log(`In outer(), A = ${A} and B = ${B}`);
}
outer();
console.log(`A = ${A}`);
```

### Closure

A Closure is a function where an inner function retains access to the variables and scope of its outer function, even after the outer function has finished executing.

A closure remembers the environment in which it was created. In technical terms, it is a combination of a function and its lexical environment.

Closures are created automatically whenever a function is defined in JavaScript. They rely on lexical scoping, which means that scope is determined by the position of variables in the source code.

```
const A = 10;
function outer() {
  const B = 20;
  function inner() {
    const C = 30;
    console.log(`In inner(), A = ${A}, B = ${B} and C = ${C}`);
  }
  return inner;
}

const object = outer();
object();
```

### Synchronous and Asynchronous Programming in JavaScript

**Synchronous Programming :** One task must wait for the previous task to complete. The code is executed line by line in sequence.

```
const first = () => {
  console.log("In first()");
};

const second = () => {
  console.log("In second()");
};

const third = () => {
  console.log("In third()");
};

const fourth = () => {
  console.log("In fourth()");
};

const fifth = () => {
  console.log("In fifth()");
};

first();
second();
third();
fourth();
fifth();
```

**Asynchronous Programming :** One task does not have to wait for the previous task to complete. It follows a non-blocking I/O model, allowing other operations to continue while a task is being processed.

```
const first = () => {
  setTimeout(() => {
    console.log("In first()");
  }, 5000);
};

const second = () => {
  setTimeout(() => {
    console.log("In second()");
  }, 4000);
};

const third = () => {
  setTimeout(() => {
    console.log("In third()");
  }, 3000);
};

const fourth = () => {
  setTimeout(() => {
    console.log("In fourth()");
  }, 2000);
};

const fifth = () => {
  setTimeout(() => {
    console.log("In fifth()");
  }, 1000);
};

first();
second();
third();
fourth();
fifth();
```

## Modern JavaScript

### Event Propagation

Event Propagation determines the order in which elements receive an event.

1. **Event Bubbling :** The event travels from the target element ( child ) up to its parent elements.

```
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const frame = document.querySelector(".frame");
const panel = document.querySelector(".panel");
const core = document.querySelector(".core");

container.addEventListener("click", () => console.log("From Container"));
wrapper.addEventListener("click", () => console.log("From Wrapper"));
frame.addEventListener("click", () => console.log("From Frame"));
panel.addEventListener("click", () => console.log("From Panel"));
core.addEventListener("click", () => console.log("From Core"));
```

2. **Event Capturing :** The event travels from the outermost parent to the target element ( child ).

```
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const frame = document.querySelector(".frame");
const panel = document.querySelector(".panel");
const core = document.querySelector(".core");

container.addEventListener("click", () => console.log("From Container"), true);
wrapper.addEventListener("click", () => console.log("From Wrapper"), true);
frame.addEventListener("click", () => console.log("From Frame"), true);
panel.addEventListener("click", () => console.log("From Panel"), true);
core.addEventListener("click", () => console.log("From Core"), true);
```

### Function Currying

Function Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

Instead of taking all arguments at once, a curried function takes the first argument and returns a new function that takes the second argument, which returns another function that takes the third argument, and so on.

```
function sum(A) {
  return function (B) {
    return function (C) {
      return function (D) {
        return function (E) {
          return A + B + C + D + E;
        };
      };
    };
  };
}

console.log("10 + 20 + 30 + 40 + 50 =", sum(10)(20)(30)(40)(50));
```

### Higher-Order Functions and Callback Functions

**Higher-Order Function :** A function that takes another function as an argument or returns a function.

**Callback Function :** A function that is passed as an argument to another function and is executed later.

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

Here, `find()`, `findLast()`, `findIndex()`, `findLastIndex()`, `map()`, and `filter()` are Higher-Order Functions, and `equation` is the Callback Function passed to them.


`find()`

```
const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFind = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return array[index];
    }
  }
};

console.log(array.find(equation));
console.log(customFind(array, equation));
```

`findLast()`

```
const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFindLast = (array, callback) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (callback(array[index])) {
      return array[index];
    }
  }
};

console.log(array.findLast(equation));
console.log(customFindLast(array, equation));
```

`findIndex()`

```
const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFindIndex = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return index;
    }
  }
  return -1;
};

console.log(array.findIndex(equation));
console.log(customFindIndex(array, equation));
```

`findLastIndex()`

```
const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFindLastIndex = (array, callback) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (callback(array[index])) {
      return index;
    }
  }
  return -1;
};

console.log(array.findLastIndex(equation));
console.log(customFindLastIndex(array, equation));
```

`map()`

```
const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customMap = (array, callback) => {
  const mappedArray = [];
  for (let element of array) {
    mappedArray.push(callback(element));
  }
  return mappedArray;
};

console.log(array.map(equation));
console.log(customMap(array, equation));
```

`filter()`

```
const array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const equation = (number) => {
  return number % 2 === 0;
};

const customFilter = (array, callback) => {
  const filteredArray = [];
  for (let element of array) {
    if (callback(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

console.log(array.filter(equation));
console.log(customFilter(array, equation));
```

### Event Loop

The Event Loop is a functional concept in JavaScript that enables non-blocking, asynchronous programming. It allows JavaScript to perform tasks such as handling user interactions, making network requests ( API calls ), and processing timers while maintaining a single-threaded environment.

<img src="https://i.ibb.co/1GzmZXtm/Event-Loop.png" alt="Event Loop Overview" width="100%" />

#### 1. Single-Threaded Nature

JavaScript runs on a single thread, which means it can execute only one piece of code at a time. This design helps avoid issues such as race conditions that can occur in multi-threaded environments.

#### 2. Call Stack

The Call Stack is a data structure that keeps track of function calls in your program. When a function is invoked, it is added to the stack, and when it completes, it is removed. The Call Stack follows a Last In, First Out ( LIFO ) structure.

#### 3. Web APIs

JavaScript environments, such as browsers, provide Web APIs ( such as `setTimeout`, `fetch`, and DOM events ) that can handle tasks asynchronously. When you call an asynchronous function, the task is offloaded to the Web API, which executes it and places its callback into a queue when it is ready.

#### 4. Callback Queue

Once an asynchronous operation ( such as a timer or a network request ) is complete, the corresponding callback function is pushed into the Callback Queue ( or Task Queue ). This queue holds all callbacks waiting to be executed after the current Call Stack is cleared.

#### 5. Event Loop

The Event Loop continuously checks the Call Stack and the Callback Queue.

**Step 1:** If the Call Stack is empty, the Event Loop takes the first task from the Callback Queue.

**Step 2:** It pushes that task onto the Call Stack and executes it.

**Step 3:** This process repeats until there are no more tasks in the queue.

#### 6. Microtasks and Macrotasks

JavaScript distinguishes between two types of tasks:

**Macrotasks:** These include tasks such as `setTimeout`, `setInterval`, and I/O operations. They are processed in the order they arrive in the Callback Queue.

**Microtasks:** These are typically related to Promises ( such as `.then()`, `.catch()`, and `async/await` ).

Microtasks have a higher priority than Macrotasks and are processed immediately after the currently executing script, before the next Macrotask is processed.

## JSON and AJAX

**AJAX:** Asynchronous JavaScript and XML

AJAX is a combination of the `XMLHttpRequest` object and the HTML DOM.

**XMLHttpRequest:** An object that helps websites communicate with servers to transfer data.

### How AJAX Works

1. An event occurs, such as a button click or form submission.
2. A `XMLHttpRequest` object is created by JavaScript.
3. The `XMLHttpRequest` sends a request to the server.
4. The server processes the request.
5. The server sends back a response.
6. The response is read by JavaScript.
7. JavaScript takes the appropriate action.

### XMLHttpRequest Object Methods

1. `new XMLHttpRequest()` : Creates a new XMLHttpRequest object.

2. `abort()` : Cancels the current request.

3. `getAllResponseHeaders()` : Returns all response headers.

4. `getResponseHeader()` : Returns a specific response header.

5. `open()` : Initializes a request.

   Parameters:

   * method (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc.)
   * url
   * async
   * user (optional)
   * password (optional)

6. `send()` : Sends a request to the server.

7. `send(json)` : Sends JSON data to the server.

### Response Data

1. XML Data : `responseXML`
2. JSON/Text Data : `responseText`

### JSON ( JavaScript Object Notation )

JSON is a text format used to store and transport data.

#### XML

```
<employee>
    <eid>1714510036</eid>
    <name>Sandeep</name>
</employee>
```

#### JSON

```
{
    "id": 1714510036,
    "name": "Sandeep"
}
```

#### JSON Data Types

1. Boolean
2. Array
3. Number
4. String
5. Object
6. Null

#### Data Types Not Supported in JSON

1. Undefined
2. Date

#### Convert JSON to JavaScript Object

`JSON.parse()` is used to convert JSON data into a JavaScript object.

**Syntax:**

```
const jsObject = JSON.parse(jsonData);
```

#### Convert JavaScript Object to JSON

`JSON.stringify()` is used to convert a JavaScript object into JSON.

**Syntax:**

```
const jsonData = JSON.stringify(jsData);
```

### Callback Hell

Callback Hell is a phenomenon where a callback is called inside another callback. It is the nesting of multiple callbacks inside a function. The structure of the code looks like a pyramid, which is why Callback Hell is also known as the **"Pyramid of Doom"**.

### Why is Callback Hell Bad?

Callback Hell makes code difficult to read, understand, debug, and maintain. It occurs when multiple asynchronous operations are nested within each other as callbacks.

### Solution: Promise

A **Promise** is a JavaScript object that links producing code with consuming code.

* **Producing Code:** Code that takes some time to execute.
* **Consuming Code:** Code that waits for the result.

Promises are used to handle asynchronous operations in JavaScript. They help avoid Callback Hell and make asynchronous code easier to read and manage.

### Promise States

1. **Pending** – Initial state, neither fulfilled nor rejected.
2. **Fulfilled (Resolved)** – Operation completed successfully.
3. **Rejected** – Operation failed.

#### Producing Code

```
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise is Resolved.");
    reject("First Promise is Rejected.");
  }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise is Resolved.");
    reject("Second Promise is Rejected.");
  }, 4000);
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise is Resolved.");
    reject("Third Promise is Rejected.");
  }, 6000);
});
```

#### Consuming Code

```
firstPromise
  .then((value) => {
    console.log(value);
    secondPromise
      .then((value) => {
        console.log(value);
        thirdPromise
          .then((value) => {
            console.log(value);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
```

### Async / Await and Exception Handling

**Async / Await** is a modern way to handle asynchronous operations in JavaScript. It is built on top of Promises and makes asynchronous code easier to read and write.

* The `async` keyword makes a function return a Promise.
* The `await` keyword pauses the execution of an `async` function until a Promise is resolved.

### Exception Handling

Exception handling in `async/await` is done using `try...catch`.

* `try` contains the code that may throw an error.
* `catch` handles the error if it occurs.

This makes error handling cleaner and easier compared to Promise chaining with `.then()` and `.catch()`.

```
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise is Resolved.");
    reject("First Promise is Rejected.");
  }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise is Resolved.");
    reject("Second Promise is Rejected.");
  }, 4000);
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise is Resolved.");
    reject("Third Promise is Rejected.");
  }, 6000);
});

async function getPromise() {
  try {
    console.log(await firstPromise);
    console.log(await secondPromise);
    console.log(await thirdPromise);
  } catch (error) {
    console.log(error);
  }
}

getPromise();
```

### fetch()

The global `fetch()` method starts the process of fetching a resource from the network and returns a Promise that is fulfilled once the response is available.

The Promise resolves to a `Response` object representing the response to your request.

A `fetch()` Promise only rejects when a network error occurs (such as a connectivity or permission issue). It does **not** reject on HTTP errors such as `404` or `500`.

Instead, you should check the `response.ok` and/or `response.status` properties to determine whether the request was successful.


### JavaScript and ECMAScript Timeline

**JavaScript:** 1995

### ECMAScript Versions

* ES1 : 1997
* ES2 : 1998
* ES3 : 1999
* ES5 : 2009

---

* ES6 (ECMAScript 2015)
* ECMAScript 2016
* ECMAScript 2017
* ECMAScript 2018
* ECMAScript 2019
* ECMAScript 2020
* ECMAScript 2021
* ECMAScript 2022
* ECMAScript 2023
* ECMAScript 2024
* ECMAScript 2025

## ES6 (ECMAScript 2015) Features

* `let`
* `const`
* Arrow Functions
* `Map`
* `Set`
* `for...of`
* Classes
* Promises
* Default Parameters
* `String.includes()`
* `String.startsWith()`
* `String.endsWith()`
* Array and Object Destructuring
* Rest and Spread Operator (`...`)
* Template Literals
* Generators
* Async/Await
* `Array.from()`
* `Array.keys()`, `Array.values()`, `Array.entries()`
* `Array.find()`
* `Array.findIndex()`
* New Math Methods
* Number Properties
* New Number Methods
* New Global Methods
* Iterables
* `Object.entries()`
* JavaScript Modules
* `"use strict"`

### Rest Operator

The Rest Operator (`...`) allows a function to accept an indefinite number of arguments as an array.

```
const test = (A, B, C, ...rest) => {
  console.log(`A = ${A}, B = ${B}, C = ${C} and rest = ${rest}`);
};

test(0, 1, 2, 3, 4);
test(0, 1, 2, 3, 4, 5);
test(0, 1, 2, 3, 4, 5, 6);
test(0, 1, 2, 3, 4, 5, 6, 7);
test(0, 1, 2, 3, 4, 5, 6, 7, 8);
```

### Spread Operator

The Spread Operator (`...`) allows an iterable to be expanded in places where zero or more arguments are expected.

It is commonly used with arrays and objects to copy, merge, or pass their elements as individual values.

The syntax of the Spread Operator is the same as the Rest Operator, but it works in the opposite way. While the Rest Operator collects multiple values into a single array, the Spread Operator expands an array or object into individual values.

```
const test = (A, B, C, D) => {
  console.log(`A = ${A}, B = ${B}, C = ${C} and D = ${D}`);
};

const array = [0, 1, 2, 3];
test(...array);
```

### Shallow Copy and Deep Copy

**Shallow Copy:** A copy that creates a new object, but nested objects or arrays are still referenced from the original object. Changes to nested data affect both copies.

**Deep Copy:** A copy that creates a completely independent object, including all nested objects and arrays. Changes to the copied data do not affect the original object.

```
const A = [0, 1, 2, 3, 4, 5];
const B = A; // Shallow Copy

console.log("A =", A);
console.log("B =", B);
B[6] = 6;
console.log("A =", A);
console.log("B =", B);

const C = [0, 1, 2, 3, 4, 5];
const D = [...C]; // Deep Copy

console.log("C =", C);
console.log("D =", D);
D[6] = 6;
console.log("C =", C);
console.log("D =", D);
```
