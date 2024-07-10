// ## Go over snippet1 and snippet2. Both code will log `"hello"`.
// What code concept does it demonstrate? -- Generosa

// snippet1;
function hello() {
  console.log("hello");
}

function greet(greeting) {
  greeting();
}

greet(hello);

// snippet2;
function hello() {
  console.log("hello");
}

let greet = hello;
greet();

/*
Both code snippets demonstrate that functions are first class objects. As first
class objects, functions can be:
- passed by reference to other functions
- returned from functions
- assigned to variables and properties.  

For snippet 1, when greet is invoked with the hello argument in line 13, 
this argument is passed by reference to the hello function object.  
Invoking it causes JavaScript to go to the greet function on line 9 and 
initialize the greeting parameter to reference the hello function 
object.  Line 10 in the function invokes greeting referencing
the hello function in line 5 leading to the output of the string "hello".  

For snippet 2, in line 20, the variable greet is assigned to hello which passes by
reference the hello function object on line 16.  Calling greet on line 21 invokes
the hello function resulting in logging of "hello" to the console.
*/
