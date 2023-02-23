
let arr = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

// q1
// get the names of objects in cap
var ans = []
for (let i in arr)
{
	ans.push(arr[i].name.toUpperCase())

}
console.log(ans)
ans = []
// q2
// get students with marks more than 50
for (let i in arr)
{
	if (arr[i].marks>=50)
	{
		ans.push(arr[i])

	}

}
console.log(ans)
ans = []
// q3
// get students with marks more than 50 and id more than 120
for (let i in arr)
{
	if (arr[i].marks>=50 && arr[i].id >120)
	{
		ans.push(arr[i])

	}

}
console.log(ans)
ans = 0
// q4
// get the total sum of the marks of the students
for (let i in arr)
{
	ans+=arr[i].marks
}
console.log(ans)
ans = []
// q5 
// name of students with marks more than 50
for (let i in arr)
{
	if (arr[i].marks>=50)
	{
		ans.push(arr[i].name)

	}

}
console.log(ans)
ans  = 0
// q6
// sum of marks with id > 120
for (let i in arr)
{
	if (arr[i].id>120)
	{
		ans+=arr[i].marks
	}

} 
console.log(ans)
ans = []

// q7 
// name of students who got greater than 50 after giving grace marks of 15
for (let i in arr)
{
	if (arr[i].marks<50)
	{

		arr[i].marks+=15

	}

	if (arr[i].marks>50)
	{
		ans.push(arr[i])
	}
}
console.log(ans)
ans  = []
// q8
// create objects and store them in an array
obj1 = {name:'a',class:'V',rollNo:1}
obj2 = {name:'b',class:'V',rollNo:2}
obj3 = {name:'c',class:'V',rollNo:3}
ans.push(obj1)
ans.push(obj2)
ans.push(obj3)
console.log(ans)
