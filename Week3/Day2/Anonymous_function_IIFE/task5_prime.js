var arr=[2,3,5,7,10,16,18]
var final=[]

var prime=function(n){ 
	count=0
	for(let i=1;i<=n;i++)
	{
		if(n%i===0)
		{
			count++
		}
	}
	if(count===2)
	{
		return true 
	}
	else
	{
		return false 
	}
}
for(let j of arr)
{
	if(prime(j))
	{
		final.push(j)
	}
}
//Dealing with IIFE function
var primearr=[]
for(let i of arr)
{
	var count=0
	data=(function(num){ for(var j=1;j<=num;j++){if(num%j===0){count++}}if(count===2){return true}else{return false}})(i) //IIFE function to find prime
	if(data===true)
	{
		primearr.push(i)
	}
}
console.log(primearr)