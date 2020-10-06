var number = 5;
var word = "cat";
var cat = {name: "Mr Chubs", color: "orange", age: 11};
var array = ["Mr Chubs", "Miss Kitty", "Merlin"];

//one condition if else
if (number == 5){
	console.log("number is five");
}
else {
	console.log("number is not five");
}

//multi condition if else
if (number = 5 && word == "cat") {
	console.log("five and cat");
}
else {
	console.log("not five and cat");
}

console.log("-----------------------");

//short circuiting
console.log(cat.personality || "friendly");

cat = {name: "Merlin", color: "black", age: 9, personality: "rambunctious"};

console.log(cat.personality || "friendly");

console.log("-----------------------");

//for loop
for (i = 0; i < 3; i++) {
	console.log("The value of i is " + i);
}

//for in loop; loops through properties of object
for (x in cat) {
	console.log(cat[x]);
}

//for of loop; loops through iterables such as arrays, strings, etc
for (cat of array) {
	console.log(cat + " is my favorite cat");
}

console.log("-----------------------");

//while loop
var number = 5;
while (number < 8) {
	console.log(number);
	number += 1;
}

//do while loop
do {
	console.log(number);
	number -= 1;
}
while (number > 4);

console.log("-----------------------");

//switch case statement
switch (word){
	case "bat":
		console.log("not a cat");
		break
	case "rat":
		console.log("not a cat");
		break
	case "cat":
		console.log("yes a cat");
		break
}

console.log("-----------------------");

//break statment; leaves loop
for (i = 0; i <6; i++) {
	if (i == 4) {
		break;
	}
	console.log("The number is not 4. It is " + i);
}

console.log("-----------------------");

//continue statment; skips over iteration of loop
for (i = 0; i <6; i++) {
	if (i == 4) {
		continue;
	}
	console.log("The number is not 4. It is " + i);
}

//danlging else
	var x = 5;
if (x > 0)
if (x < 10)
else
	console.log("blah");