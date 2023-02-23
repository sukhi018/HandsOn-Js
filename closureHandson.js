

// q1

/*
function Counter(){
	var counter = 0;

	function IncreaseCounter() {
	return counter += 1;
	};

	return IncreaseCounter;
}

var counter = Counter();
console.log(counter()) 1
console.log(counter()) 2
console.log(counter()) 3
console.log(counter()) 4
console.log(counter()) 5
*/

// q2

/*

"let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();"

*/

// q3
/*
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
*/
// output : 3 3 3 

// // q4

// function outer(len)
// {
//   this.len = len

//   function inn(breadth)
//   {
//     console.log(this.len*breadth)
//   }

//   return inn
// }

// outer(2)(2)


// // q5
//   function main()
// {
//      this.count = 1

//     function inner()
//     {
//         console.log(this.count)
//         this.count+=1

//     }
//     return inner
// }

// console.log(main.prototype)
// var inner = main()
// inner()
// inner()
// inner()
// inner()
// inner()



// q6
/*
"Print Output

var a = 12;
(function () {
  alert(a);
})();"

*/

// output 12


// q7
/*var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();
*/
// output : 12


// // q8


// var globalVar = "xyz";

// (
//   function outerFunc(outerArg) 
// {
//     var outerVar = 'a';
    
//     (
//       function innerFunc(innerArg) 
//       {
//         var innerVar = 'b';
      
//         console.log(
//           "outerArg = " + outerArg + "\n" +
//           "innerArg = " + innerArg + "\n" +
//           "outerVar = " + outerVar + "\n" +
//           "innerVar = " + innerVar + "\n" +
//           "globalVar = " + globalVar);
    
//     }
//   )(456);
// }
// )
// (123);

/*

output:
outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz
*/

