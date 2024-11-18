// What's gonna log and why? What concepts this code demonstrate? - Mohamed
function changeMyWord(word) {
  word = word.toUpperCase();
  return word;
}

let myWord = "Hello";
let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);

/*
The console logs Hello and HELLO.  

In line 2, a changeMyWord function is declared with a parameter word.  This variable then applies the toUpperCase()
method and a new string is saved to the word variable and then returned.

In line 7, a myWord variable is initialized to the string "Hello".  The changeMyWord function is invoked with 
the myWord variable as an argument.  Within the changeMyWord function, the upper case method is applied to myWord 
and then returned.  The return value is saved to the myOtherWord variable in line 8.

Since myWord is a string and therefore a primitive, the function receives the myWord 
argument as pass-by-value. Applying the upper case method doesn't mutate myWord 
but instead creates a new string.

Logging myWord to the console outputs the value of the myWord global variable, Hello,  
Logging myOtherWord to the console outputs the value of myOtherWord, HELLO, which is 
the new string returned by invoking the function changeMyWord.

This example demonstrates that primitives are immutable. 

*/

// What's the output and why? - Generosa
let cities = ["Tokyo", "Berlin", "Rio"];

function mutater(list) {
  list = ["Banana", "Pineapple", "Apple"];
  list[2] = "Denver";
}

mutater(cities);
// console.log(cities);

/*The output to the console is ["Tokyo", "Berlin", "Rio"]

First, a cities variable is declared assigned to an array of strings ["Tokyo", "Berlin", "Rio"]
In line 33, a mutater function is declared with list as a parameter.  In the function, list is assigned 
an array of strings, ["Banana", "Pineapple", "Apple"] then re-assigns the 2nd index
of the array to the string "Denver"

In line 38, the mutator function is invoked passing the cities array by reference.  
Within the function, the list variable is assigned a different array ["Banana", "Pineapple", "Apple"].  
At this point, the global variable cities and the function variable list references two different arrays. 
This is why when mutating the 2nd index of the variable list to the string "Denver", the cities global variable  
doesn't change as this variable references a different array compared to list. 
Logging the cities variable in line 39 outputs the global variable ["Tokyo", "Berlin", "Rio"].

This example demonstrates how one can change values.  This example uses reassignment where the list variable 
is reassigned from the value of the global cities array to the new array.  
*/

// What's happening in this code? What concepts this code demonstrate? - Fuad-
let number1 = 10;
let number2 = 25;

function sumOf(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

sumOf(number1, number2);
// console.log(sum);

/*
The output of this code is ReferenceError: sum is not defined.  The reason for this
reference error is because the variable sum is out of scope to the console.log method.

The sum variable is scoped to the sumOf function and can't be accessed ouside 
of it.

This example demonstrates variable scoping rules.  

*/

// Name all of the primitives, variables, and objects in the code below.- Patricia
let students = ["Chris", "Pete", "Nick"];
let copyOfStudents = students.concat();

let firstStudent = students[0];
let lastStudent = students[2];

function concatenate(name1, name2) {
  return name1 + " and " + name2;
}

concatenate(firstStudent, lastStudent);

/*
Primitives: 
  - The strings in the student array, Chris, Pete, and Nick
  - the value of the variable firstStudent, which is a string
  - the value of the variable lastStudent, which is a string
  - the return value of the concatenate function which is a string comprised of
  Chris and Nick

Variables:
- students, copyOfStudents, firstStudent, lastStudent, concatenate, name1, name2

Objects:
- the array students
- the copyOfStudents which is another array
- the function concatenate

*/

let words = ["scooby", "do", "on", "channel", "two"];

words.forEach((word) => {
  // console.log(word);
  words.shift();
});

// console.log(words);

let generateVerb = (message) => "reading";
let organizeSentence = (verb) => `He is ${verb().toUpperCase()}`;

console.log(organizeSentence(generateVerb));
/*
The console will output He is READING

In line 130, the function object generateVerb is being passed in by reference to 
the organizeSentence function.  The return value of generateVerb is now the 
verb parameter of organizeSentence.  

Within the function body of organizeSentence, the verb parameter is invoked which references 
the return value of generateVerb.   Then the toUpperCase method is applied to this value
returning the string He is READING
*/
