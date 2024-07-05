// ## Go over snippet1 and snippet2. Both code will log `"hello"`.
// What code concept does it demonstrate? -- Generosa

// snippet1
// function hello() {
//   console.log("hello");
// }

// function greet(greeting) {
//   greeting();
// }

// greet(hello);

// snippet2
// function hello() {
//   console.log("hello");
// }

// let greet = hello;
// greet();

/* Functions are first class objects thus they can be passed by reference to other
functions, returned from functions and assigned to variables and properties.  

In snippet 1, a function hello is declared without any parameters and
logs the string hello.  Another function greet with a parameter greeting
references an object which then gets invoked in the body of the function.  

In line 13, when greet is invoked with the hello argument, this argument
references the same hello function object meaning it can be invoked and 
logs the string hello.   

Snippet 2 demonstrates the concept of functions as object that can be
assigned to variables which are pointers.  

A function hello is declared without any parameters which logs the string hello.
A variable greet is declared assigned to hello which points to the hello function.  
When invoking greet in line 21, since it points to the same object as the hello function 
the console logs the string hello.  

*/

// ## What will be logged to the console? What concept does the code demonstrate? -- Mohamed

greeter();
// greetiest();

function greeter() {
  const hello = "Hello";
  const world = "World";

  function greetiest() {
    console.log(world);
  }

  console.log(hello);
}

// What is the output? Explain why. -- Esteban

const person = {
  name: "Alice",
  age: 30,
};

function updateAge() {
  person = { name: "Alice", age: 31 };
}

updateAge(person);
console.log(person);
