# JavaScript Data Types and Naming Conventions

JavaScript has less strict rules than many other languages when it comes to data types.

# Creating Variables

JavaScript is a dynamically and weakly typed language, meaning variables can change data types and the programmer does not have to declare the type. To create a variable simply put the keyword "var" before your variable name:
	
	var myString = "This is a string!";
	
There are five different data types:

* string
	
* number
	
* boolean
	
* object
	
* function
	
The following are types of objects:

* Object
	
* Array
	
* Date
	
The following do not contain any value:

* null
	
* undefined

To figure out the data type of a variable you can use

	typeof 
	
Please note that you cannot use typeof to determine Array or Date, these will simply return object.
# Naming Conventions

Variables in JavaScript cannot start with a symbol or a number, as they will cause the program to break. It is convention to write JavaScript variables in camel case, but underscores will not cause errors. Similarily, it is convention
to reserve uppercase for global variables, but it can be used to name variables without breaking the program.

# Potential for Problems

Because of JavaScript's flexibilty with data types, many of the issues that would cause compiler errors in other languages are not an issue. For example, when adding a string and a number the compiler will interpret it as two strings, and simply concatonate them.
However, this concatanation can cause confusion such as in the example below:

	var a = 7;
	var b = 9;
	var result = "The result is: " + x + y;
	
result will be 79, not 16.

To see how JavaScript handles other common data type errors see the program JS_DataTypes_Code.js in this repository.

# Type Conversions

JavaScript conversions are widening, meaning they are less likely to lose data. JavaScript conversions can either happen automatically, or you can use a JavaScript function such as:

	String()
	Number()

# Sources

https://www.w3schools.com/js/js_datatypes.asp, Accessed Sept. 24, 2020

https://www.w3schools.com/js/js_conventions.asp, Accessed Sept. 24, 2020

https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a/, Accessed Sept. 24, 2020

http://www.mojavelinux.com/articles/javascript_hashes.html,  Accessed Sept. 24, 2020

https://www.w3schools.com/js/js_type_conversion.asp,  Accessed Sept. 24, 2020

https://www.w3schools.com/js/js_numbers.asp,  Accessed Sept. 24, 2020
