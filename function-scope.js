// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     a = 30;
//     let c = 40;
//     console.log(a, b, c);
//   }

//   console.log(a, b);
//   return inner;
// }

// let test = outer(); // this is assigned to the return value of the outer function
// test();

// Will the code run without errors? Why or why not?
/*
The code will run without errors.

The variable declared in line 16, test is assigned to the return value of the outer
function.  When test is declared and  assigned to outer(), this invoked the outer
function starting on line 3.  Line 4 out outer declares variable b and assigns it 
the value of 20.  Then outer executes the console.log of the variables a and b
on line 12. The variable a which is the global variable a declared in line 1 
and b is the local variable declared in line 4 resulting in the output 10 and 20.  

Line 13 returns inner which is then invoked on line 17 via the test variable. 
JavaScript executes the function body of inner from line 7 to 9.  Line 7 reassigns
a from 10 to 30, line 8 declares a local variable c and assigns it to 40.  
Line 9 then logs a, b, c of which the variable b which was declared in 
line 4 is set to 20.  The output is thus 30, 40, 20.

The code demonstrates variable scope as well as functions being first class 
objects.  Being first class means that functions can be referenced to other 
functions, returned from functions and assigned to variables.
*/

let a = 10;

function outer() {
  b = 20;

  function inner() {
    a = 30;
    let c = 40;
    console.log(a, b, c);
  }

  console.log(a, b);
  return inner;
}

outer();
console.log(b);

/*
The code will not error.  Once the outer function executes, 
the variable b becomes available in the global scope.  Thus the output of 
executing outer is 10, 20,  while logging b to the 
console will result in 20.    
*/
