
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
- Assignment Operators
- Composite / Compound ( Shorthand ) Operators
- Relational ( Comparison ) Operators
- Logical Operators
- Bitwise Operators
- Conditional ( Ternary ) Operator
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
console.log(
  ((((15 * 4) % 55) * 4) / 10) * 9 -
    (((34 / 10) * 5) % 20) +
    ((9 * 10) % 83) * ((((((10 * 5) % 37) * 2) % 20) * 2 ** 5) % 100),
);
```
