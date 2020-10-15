# JavaScript Functions

Functions can be used in JavaScript for repetitive code.

# Syntax

Functions in JavaScript are declared using the function keyword followed by parentheses:

	function myFunction(parameter){
		//code to be executed goes here
	}
	
Function defintions can be placed anywhere in the program; JavaScript supports function calls both before and after function defintions.

# Recursion

Recursive functions are functions that call themselves. JavaScript does support recursive functions. To see an example of a recursive function along with other functions in JavaScript, refer to the file JS_Functions_Code in this repository.

# Parameters and Returns

JavaScript functions can accept multiple parameters. These parameters can also be of different types. Refer to the code provided for examples.

However, JavaScript can only return one value. A simple way around this issue is to return your values in an array which can be executed as:

	return [value1, value2, value3];

# Pass by Reference vs Pass by Value

JavaScript is pass by value*. However, it isn't quiet that simple. JavaScript is pass by value for primitive types, like number and string, but objects are a little less straight forward. Because variables hold the objects themselves, JavaScript objects could be thought of as pass by reference.

Ultimately, the take away is that primitives will not be changed outside of functions while objects will be.

For further clarification, refer to the code provided.

# Sources
https://www.w3schools.com/js/js_functions.asp, Accessed Oct. 15, 2020

https://www.w3schools.com/jsref/jsref_slice_string.asp, Accessed Oct. 15, 2020

https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language, Accessed Oct. 15, 2020