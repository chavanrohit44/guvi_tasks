var arr=[2,3,4,5,6,7,8,9] 
var odd = function(input_number){
	if(val%2===1) 
		{
			console.log(val)
		}
	}
for(val of arr)
{
	odd(val)
}
console.log("//IIFE function///")
for(var val of arr)
{
	let data=(function(x){
        if(x%2===1){
            return x
        }
    })(val)
    if(data!==undefined)
    {
        console.log(data)
    }
}