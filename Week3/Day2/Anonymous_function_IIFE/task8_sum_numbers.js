var arr=[1,2,3,4,5]
var total_sum=0
var sum= function(a,b){ 
	return a+b
}
for(var i of arr)
{
	total_sum=sum(total_sum,i)
}
console.log(total_sum)

var sumtotal_iife=0
for(var j of arr)
{
	sumtotal_iife=(function(a,b){return a+b})(sumtotal_iife,j) 
}
console.log(sumtotal_iife)