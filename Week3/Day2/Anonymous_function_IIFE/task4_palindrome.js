var arr=[11,'lol',12,'ollo','hi','madam']
var final=[]
var palindrome=function(n) //function returns true if passed argument is palindrome
{
	n=n.toString().toLowerCase()
	var data=""
	for(let j=n.length-1;j>=0;j--) //loop reverses the passed argument
	{
		data+=n[j]
	}
	if(n===data) // checks the condition for palindrome
	{
		return true
	}
}
for(let i of arr)
{
	if(palindrome(i))
	{
		final.push(i)
	}
}
console.log(final)
// dealing with IIFE function

var final1=[]
for(let j of arr)
{
	var data=(j.toString().toLowerCase()).split("") //splits the array values
	var data1=(data.reverse()).join("")            //reverse the splitted value and joins togather
	let value=(function(straight,reverse){if(straight==reverse){return true}})(j,data1) //IIFE function checks the condition
	if(value)
	{
		final1.push(j)
	}
}
console.log(final1)