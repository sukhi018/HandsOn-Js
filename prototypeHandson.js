// // q1 

// function Person(name,age)
// {
// 	this.name = name
// 	this.age = age
// 	// this.intro = function(){
// 	// 	console.log(this.name+ this.age)
// 	// }
// }


// Person.prototype.intro = (obj)=>
// {
// 	console.log('Hey '+ obj.name)
// }

// var a = new Person('sukhi',22)
// var b = new Person('raman',21)
// console.log(a,b)
// // a.intro.call(a,'aaaa',45)


// a.intro(a)

// // q2 
// // explain prototype chaining
// function car(speed)
// {
// 	this.speed = speed
// 	this.brand = 'ford'
// }

// var obj = new car(200)
// console.log(obj.__proto__) //this will show the car prototype
// console.log(obj.__proto__.__proto__) // this will show the object prototype
// console.log(obj.__proto__.__proto__.__proto__) // this will point to none
// // so this chaining of prototypes 


// // q3
// // add sum function to the array prototype

// Array.prototype.sm = function(){
// 	let ans = 0
// 	for (let i =0;i<this.length;i++)
// 	{
// 		ans+=this[i]
// 	}
// 	return ans
// }

// var array = [1,2,3,4]
// console.log(array.sm())




// // q4


// let obj1={
// 	value:102,
// 	name:function(){
// 		console.log('hey its me')
// 		return this.value
// 	}
// }
// let obj2 ={
// 	branch:'ecs',
// 	__proto__ : obj1
// }

// function getAll(obj)
// {
// 	if (obj==undefined)
// 	{
// 		return 
// 	}

// 	console.log(...Object.getOwnPropertyNames(obj))
// 	getAll(Object.getPrototypeOf(obj))
// }

// getAll(obj2)

