// q1 get element with id text
var ele = document.getElementById('text')

// q2 access element with the tag h1
ele = document.getElementsByTagName('h1')[0]

// q3 get element with class as box
ele = document.getElementsByClassName('box')[0]

// q4 change hello to hello word
ele  = document.getElementsByTagName('h1')[0]
ele.innerHTML = `Hello World`

// q5 

var ptr = 1;
function change ()
{
	let i = document.getElementById('flex')
	// i.style.flexDirection = `${d[]}`
	// console.log(1)
	if (ptr == 1)
	{
	   i.style.flexDirection = 'column'

		ptr = 0
	}
	else
	{
		i.style.flexDirection = ``
		ptr = 1

	}
	// i.id = 'id1'
}
var ele = document.getElementById('change')
console.log(ele)

ele.addEventListener('click', change)


// q6 diffence between document and window

// document represents html document or the webpage
// window represents the frame or the browser window in which the webpage is being loaded 

// doument is loaded inside the window
// window is the first object which is loaded inside the browser

// object of the window property
// object of the browser

// properties of document can be accesed by window too 
// but the properties of the window can not be accesed by the document



// q7  give red color to the heading and give heading as its id to the element

ele  = document.getElementsByTagName('h1')[0]
ele.style.color = 'red'
ele.id = 'heading'

// q8
var cd = 1
function changeText()
{
	if (cd==1)
	{
		ele.innerHTML = ` Welcome to Elevation Academy`

		cd = 0
	}else {
				ele.innerHTML = ` Hello World`

		cd = 1
	}
}
ele = document.getElementById('changeText')
ele.addEventListener('click', changeText)


// // q9 implement a timer
function time() {

    var a = new Date()
    currTime = String(a).split(' ')[4].split(':')

    currTime.forEach(function(element, index) {
        currTime[index] = parseInt(currTime[index])
    });

    if (currTime[0] >= 12) {
        currTime.push('PM')

        if (currTime[0] != 12) {
            currTime[0] -= 12
        }

    } else {
        currTime.push('AM')
    }
    return currTime
}

function changeTime()
{
	console.log(time())
	document.getElementById('time').innerHTML = `${time().join(':')}`
}

setInterval(changeTime, 1000)
// // q10 dropdown 
function fun()
{
console.log(document.getElementById('drop').value)

}
document.getElementById('sub').addEventListener('click', fun)

// // q10

function valid()
{
	let x = document.getElementById('form')['phn'].value 
	if (x.length == 10 && x[0]=='9' && x[1]=='1')
	{
		console.log('valid')
	}else {
		alert('Invalid Phone Number!! Start with 91 and length should be 10 digits')
	return false
	}




	let y = document.getElementById('form')['email'].value
	if (y=='')
	{
		alert('invalid email')
		return false
	}
	y = y.split('@')

	y = y[y.length-1].split('.')[0]


	if (y.toLowerCase()=='prepbytes')
	{
		console.log('Valid email')
	}else {
		alert('email should be of domain prepbytes')
		return false
	}


	let z = document.getElementById('form')['year'].value
	console.log(z)
	z = parseInt(z.split('-')[0])
	if (z>1995)
	{
		console.log('valid birth year')
	}
	else
	{
		alert('Birth year should be greater than 1995')
	}
}	


document.getElementById('formButton').addEventListener('click',valid )

