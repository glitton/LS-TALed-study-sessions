let ladder = "";

["head", "heal", "teal", "tell", "tall", "tail"].forEach((word) => {
  if (ladder !== "") {
    ladder += "-";
  }

  ladder += word;
});

// console.log(ladder); // expect: head-heal-teal-tell-tall-tail

const RESERVED_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

// function isReserved(name) {
//   RESERVED_KEYWORDS.forEach((reserved) => {
//     if (name === reserved) {
//       return true;
//     }
//   });

//   return false;
// }

function isReserved(name) {
  // let isStringPresent = false;
  let lowerCaseName = name.toLowerCase();
  // RESERVED_KEYWORDS.forEach((reserved) => {
  //   if (lowerCaseName === reserved) {
  //     isStringPresent = true;
  //   }
  // });
  // return isStringPresent;
  return RESERVED_KEYWORDS.includes(lowerCaseName);
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true
console.log(isReserved("")); // should be false
console.log(isReserved("THROW")); //should be true
console.log(isReserved("wItH")); //should be true
