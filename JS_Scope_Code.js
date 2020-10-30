function main(){
	//declaring inside loop and outside loop
	let loop = 20

	for (i=0; i<1; i++){
		let loop = 15
		console.log(loop);
	}
	
	console.log(loop);

	//declaring inside and outside a function
	let funct = 30
	changeVar();
	console.log(funct);
	
	//object assignment
	let a = ['c', 'a', 't'];
	let b = ['d', 'o', 'g'];
	a = b;
	b[1] = 'u';
	console.log(a);
	console.log(b);
}

function changeVar(){
	let funct = 25
	console.log(funct);
}

main();