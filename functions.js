// q1 create a func with 0 para and console statement
function fun()
{
	console.log(1)
}

// q2 create one function which takes two values as a parameter and print the sum
function add(a,b)
{
	console.log(a+b)
}

//q3 create one arrow function
var f = (a,b)=>{a+b}

// q4
/*

Print output: 

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();"

ans : undefined

*/


// q5
/*

"Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
"
Ans : undefined \n 21

*/


// q6

/*
"Print output

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};"

Ans : 20 \n 40





*/

// q7 write function for an factorial
console.log(f(1,4))
fun()
add(1,2)


var fact = (n)=>{ 
	let p = 1
	while (n)
	{
		p = p*n
		n-=1
	}
	return p
}
console.log(fact(5))
