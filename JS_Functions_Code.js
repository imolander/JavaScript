//Code to demonstrate how to use functions in JavaScript

main();

function main() {
	multiResult = multiply(4, 5);
	console.log("Multiply function: ");
	console.log(multiResult);

	recursiveResult = factorial(5);
	console.log("Recursive function: ");
	console.log(recursiveResult);
	
	stringResult = splitString("Isabelle");
	console.log("String splitting function: ");
	console.log(stringResult);
	
	console.log("Function with different inputs: ");
	difInputs("Isabelle", 22);
	
	console.log("Pass by value vs pass by reference");
	object = {value: "unchanged"};
	num = 6;
	changeThings(num, object);
	console.log("number: " + num + " object: " + object.value);
}

//A recursive function
function factorial(num) {
	if (num == 1) {
		return 1;
	}
	else {
		return num * factorial(num - 1);
	}
}

//A function to multiply two number
function multiply(p1, p2) {
	return p1 * p2;
}

//A function to split strings
function splitString(string) {
	s1 = string.slice(0, string.length/2);
	s2 = string.slice(string.length/2);	
	return [s1, s2]; //note: JS cannot return two values
}

//A function with different inputs
function difInputs(p1, p2) {
	console.log("This function has parameters of type " + typeof p1 + " and " + typeof p2);
}

//A function to show pass by value vs pass by reference
function changeThings(primitive, object) {
	primitive = primitive + 5;
	object.value = "changed";
}