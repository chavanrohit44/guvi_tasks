/**
 * Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
 */

var object = { 
    name: 'ISRO', 
    age: 35, 
    role: 'Scientist'
};

function convertObjectToList(object) {
    // your code here
    //newdata = Object.entries(object)
    let newdata=[]
    for(var key in object){
        newdata.push([key,object[key]])
    }
    return newdata;
}
var newlist = convertObjectToList(object);
console.log(newlist)