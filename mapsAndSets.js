// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"


var input = 'abcadeecfb'
var map = {}
for (let i in input)
{
	if (input[i] in map)
	{
		map[input[i]]+=1
	}else {
		map[input[i]] = 1
	}
}
ans = []
for (let i in map)
{
	ans.push(i)
}

console.log(...ans)
// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1
map = {}
for (let i in input)
{
	if (input[i] in map)
	{
		map[input[i]]+=1
	}else {
		map[input[i]]=1
	}
}
console.log(map)