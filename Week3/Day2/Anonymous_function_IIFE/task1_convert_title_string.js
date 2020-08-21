var arr=['one','two','three'] 
//anonymous function
var titleCase = function(word_to_be_changed){
	return word_to_be_changed.charAt(0).toUpperCase()+word_to_be_changed.substr(1)
}
for(var i=0;i<arr.length;i++)
{
	arr[i]=titleCase(arr[i]) 
}
console.log(arr)
 

arr1=['one','two','three']
 for(var i=0;i<arr1.length;i++)
 {
 	arr1[i]=(function(val){return (val.charAt(0).toUpperCase()+val.substr(1))})(arr1[i])
 }
 console.log(arr1)