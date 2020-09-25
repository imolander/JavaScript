//Data types in JavaScript demonstration

var number = 4;
var decimalNumber = 8.35;
var string = "Hello";
var bool = true;
var array = ["one", "dos", "trzy"];
var hashTable = {};
hashTable["Isabelle"] = "Computer Science";
hashTable["Athreya"] = "Chemical Engineering";

//testing out the data types
console.log("Variable: ", string, "\t Type: ", typeof string);
console.log("Variable: ", number, "\t Type: ", typeof number);
console.log("Variable: ", decimalNumber, "\t Type: ", typeof decimalNumber);
console.log("Variable: ", bool, "\t Type: ", typeof bool);
console.log("Variable: ", array, "\t Type: ", typeof array);
console.log("Variable: ", hashTable, "\t Type: ", typeof hashTable);
console.log("-----------------------------------------------\n");

//testing out common errors for data types
console.log("Adding a number and a string:");
console.log(string, " + ", number, " = ", string+number);

console.log("\nArray of different types:");
console.log("Array before: ", array);
array.push(number);
console.log("Array after pushing a number: ", array);

console.log("\nAdding ints and floats");
console.log(number, " + ", decimalNumber, " = ", number+decimalNumber);



console.log("\nType Conversions:");
console.log("This is a ", typeof string, ": ", string);
string = 7;
console.log("Now, this is a ", typeof string, ": ", string);
console.log("-----------------------------------------------\n");
