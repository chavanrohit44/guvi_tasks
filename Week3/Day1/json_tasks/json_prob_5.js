/**
 * Parsing a list of lists and convert into a JSON object:
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
Output:
var object = {
make : 'Ford'
model : 'Mustang',
year : 1964
}
 */

var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(array) {
    // your code here
    //newdata = Object.entries(object)
    let newdata={}
    let arrlength = array.length;
    for(var item of array)
	{
		newdata[item[0]]=item[1]
	}
    
    return newdata;
}
var newlist = fromListToObject(array);
console.log(newlist)