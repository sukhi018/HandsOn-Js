
// // q1 example how u can write a callback function
// function main()
// {
// 	console.log('Hope u are doing well')
// }

// function def (data,callback)
// {
	
// 	console.log('Hey '+data)
// 	callback()
	
// }
// var a = def('sukhi',main)



// //q2 print 1 to 8 each after the same amount of seconds of their val using callbacks

// function value(val)
// {
// 	if (val == 9)
// 	{
// 		return 0
// 	}

// 	setTimeout(()=>
// 	{
// 		console.log(val)	
// 	},val*1000)
// 	value(val+1)

// }

// value(1)



// function fun()
// {
// 	return  Promise.resolve(1)
// }

// fun()
// .then((data)=>
// {
// 	// console.log(data)
// 	setTimeout(()=>{console.log(data)}, data*1000)
// 	return data+1
// })
// .then((data)=>
// {
// 	// console.log(data)
// 	setTimeout(()=>{console.log(data)}, data*1000)
// 	return data+1
	
// })
// .then((data)=>
// {
// 	// console.log(data)
// 	setTimeout(()=>{console.log(data)}, data*1000)
// 	return data+1
// })
// .then((data)=>
// {
// 	// console.log(data)
// 	setTimeout(()=>{console.log(data)}, data*1000)
// 	return data+1
// })
// .then((data)=>
// {
// 	// console.log(data)
// 	setTimeout(()=>{console.log(data)}, data*1000)
// 	return data+1
// })
// .then((data)=>
// {
// 	setTimeout(()=>{console.log(data)}, data*1000)
// 	return data+1
// })
// .then((data)=>
// {
// 	// console.log(data)
// 	setTimeout(()=>{console.log(data)}, data*1000)
// 	return data+1
// })
// .then((data)=>
// {
// 	// console.log(data)
// 	setTimeout(()=>{console.log(data)}, data*1000)
// 	return data+1
// })


// // q3 Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and 

// // if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

// function accept(data ='')
// {
// 	return new Promise ((res,rej)=>
// 	{
// 		if (data!='')
// 		{
// 			res('Promise resolved')
// 		}else {
// 			rej('Promise rejected')
// 		}
// 	})
// }
// accept('sukhi')
// .then(
// 	(data)=>{
// 		console.log('Finally')
// 		console.log(data)
// 	},
// 	(data)=>
// 	{
// 		console.log('Naah')
// 		console.log(data)
// 	}
// 	)


// // q4 create example for callback


// // so to create an sequence in execution we use callbacks

// function show(ans)
// {
// 	console.log(ans)
// }

// function calculate(a,b)
// {
// 	var ans
// 	console.log('calculating')
// 	ans = a*b
// 	show(ans)
// }

// calculate(1,2)


// // q5 create an example of callback hell


// function hell(data)
// {
// 	var val = 1
// 	setTimeout(()=>
// 		{
// 			console.log(val)
// 			val+=1
// 			setTimeout(()=>
// 				{
// 					console.log(val)
// 					val+=1
// 					setTimeout(()=>
// 					{
// 						console.log(val)
// 						val+=1
// 						setTimeout(()=>
// 							{
// 								console.log(val)
// 								val+=1

// 							}, 1000)

// 					}
// 					, 1000)

// 				}
// 				, 1000)

// 		}
// 		, 1000)
// }


// // this is callback hell
// hell()


// // q6 create an example to explain a promise function
// // so there are 2 guys a and b, a cooked soup and asked b to promise him to go to tacos shop
// // to get some tacos if the shop has tacos then to call a in order to make sure that they have
// // if they dont have then too call a so that he can cook some pasta


// function tacos()
// {
// 	return new Promise((res,rej)=>{
// 		var avail = 0
// 		if (avail)
// 		{
// 			res('Got some tacos')
// 		}
// 		else
// 		{
// 			rej('Nahh the shop is closed')
// 		}
// 	})
// }


// tacos().then((data)=>
// {
// 	console.log(data)
// 	console.log('Start setting the table')
// },(data)=>
// {
// 	console.log(data)
// 	console.log('Cook some pasta')
// })
// .catch((data)=>{
// 	console.log(data)
// })



// // q7 example of async await
// // so what async do is makes a function always return a promise
// // and await is used to wait till the given promise is resolved


// async function run()
// {	
// 	var prom = new Promise((res,rej)=>
// 	{
// 		setTimeout(()=>{
// 			res('Hey wait is over')
// 		}, 2000)
// 	})

// 	var ans = await prom
// 	console.log(ans)
// }

// run()


// // q8 example of promise.all

// function delay(del)
// {
// 	return new Promise((res,rej)=>{
// 		setTimeout(()=>
// 			{
// 				console.log(del)
// 				res(del-10)
// 			}, del*1000)
// 	})
// }

// var a = Promise.all([delay(1),delay(2),delay(3),delay(4)])
// a.then((data)=>{
// 	console.log(data)
// })