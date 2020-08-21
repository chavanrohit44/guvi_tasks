/**
 * Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}
 */

var array = ['GUVI', 'I', 'am', 'Geek'];

function transformFirstAndLast(array) {
    // your code here
    //newdata = Object.entries(object)
    let newdata={}
    let arrlength = array.length;
    console.log(arrlength);
    
    newdata[array[0]]=array[arrlength-1]
    
    return newdata;
}
var newlist = transformFirstAndLast(array);
console.log(newlist)