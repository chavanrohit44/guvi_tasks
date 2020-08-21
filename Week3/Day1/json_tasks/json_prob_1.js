/**
 * Parsing an JSON object’s Values:
Write a function called “printAllValues” which returns an newArray of all the input object’s values.
 */

var obj = { 
    name: 'RajiniKanth', 
    age: 33, 
    hasPets: false 
};

function printAllValues(obj) {
    // your code here
    let newarr=[]
    for (var key in obj){
       // console.log(key)
        newarr.push(obj[key])
    }
    return newarr;
}
var newdata =printAllValues(obj);
console.log(newdata)