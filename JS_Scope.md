# JavaScript Scope

A variable's scope dictates where it can be accessed in a program.

# Global vs Local

Local variables can only be accessed in the function, loop, etc that they are declared in. Global variables can be accessed anywhere in the program.

You can make variables global in JavaScript by declaring them outside a function

	let x = 1;
	
	function myFunction(){
		//can access x here
	}
	
Refer to the code provided, JS_Scope_Code, to see examples of global variables, and all other topics discussed here.

# Let vs Var

There are three key words that you can use to declare variables in JavaScript: const, let, and var. Const declares constants, var declares global variables, and let declares local variable.

# Loops and Functions

When using the let declaration, variables declared in a loop or a funtion will only be accessible in those code blocks.

# Pass by Value vs Pass by Reference (revisited)

As mentioned in the variables tutorial, JavaScript is pass by value. However, because objects are memory addresses they behave more like pass by reference; that is they can be modified in a function.

# Object Assignments

When making a copy of an object, JavaScript uses the memory address of the first object. This means the objects are not separate entities, and updating one will update the other

	let a = [1, 2, 3];
	let b = a
	//updating b will update a
	
Refer to the code provided for an additional example of object assignment.

# Sources

https://www.w3schools.com/js/js_scope.asp, Accessed Oct. 29th 2020

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var, Accessed Oct. 29th 2020

https://www.tutorialspoint.com/difference-between-var-and-let-in-javascript#:~:text=The%20main%20difference%20between%20let,globally%20regardless%20of%20block%20scope., Accessed Oct. 29th 2020