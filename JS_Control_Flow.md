# JavaScript Control Flow

JavaScript offers many of the common conditional statements, loops, and switches to change the flow of program control.

# Conditionals

JavaScript uses if/else if/else statements to evaluate conditionals such as:
	
	if (condtion1) {
		//code to be executed if condition1 is true
	}
	else if(condition2) {
		//code to be executed if condition2 is true
	}
	else {
		//code to be executed if neither condition1 nor condition2 are true
	}

To see examples of conditonals and all the other control flow mechanisms mentioned in this tutorial, refer to the file JS_Control_Flow_Code.js in this repository.

JavaScript does use short circuit evaluation. This means that when we write an or stament:
	
	if(condition1 || condition2)
	
The compiler will not evaluate condition2 if condition1 is true. There is an example of using a short circuit in the code provided.

JavaScript handles the dangling else problem by always assocaiting an else clause with the closest if clause. To avoid confusion, it is best practice to enclose if/else statement in curly brackets.

# Loops

JavaScript supports five different types of loops:

*	for - loops through a block of code a specified ammount of times

*	for/in - loops through the attributes of an object

*	for/of - loops through the values of an iterable data type such as an array or string

*	while - loops through a block of code while a specified condition(s) is/are true

*	do/while - similar to while loop with different syntax and order

Refer to the provided code to see these loops in action.

# Switch Statements

A switch statement can be used to select one of many blocks of code to execute. A switch statement is evaluated once and then the first case statment that matches the switch value is executed. If there is no matching case statement then the default code block is executed. If there is no default code block then the code following the switch/case statement is executed.

A break must be used in a case statement following the code to be executed in order to break out of the case.


# Break and Continue

As briefly mentioned in the switch statements, breaks can be used to break out of loop. When you use a break statement in a for or while loop it will completley exit the loop.

Continue statments can be used to skip one specified iteration of a for or while loop.

	for (i = 0; i < 6; i++){
		if(i == 4) {
			continue;
		}
		console.log(i);
	}

The above example will print out 0 1 2 3 5. It will skip 4 because of the continue statement.

# Sources
https://www.w3schools.com/js/js_loop_while.asp, Accessed Oct. 6th 2020

https://www.w3schools.com/js/js_loop_for.asp, Accessed Oct. 6th 2020

https://www.w3schools.com/js/js_comparisons.asp, Accessed Oct. 6th 2020

https://www.w3schools.com/js/js_if_else.asp, Accessed Oct. 6th 2020

https://www.w3schools.com/js/js_switch.asp, Accessed Oct. 6th 2020

https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c, Accessed Oct. 6th 2020

https://help.semmle.com/wiki/pages/viewpage.action?pageId=29393859,  Accessed Oct. 6th 2020