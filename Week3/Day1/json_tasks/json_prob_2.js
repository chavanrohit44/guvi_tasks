/**
 * Parsing an JSON object’s Keys:
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
 */

var obj = { 
    name: 'RajiniKanth', 
    age: 33, 
    hasPets: false 
};

function printAllKeys(obj) {
    // your code here
    let newarr=[]
    for (var key in obj){
       // console.log(key)
        newarr.push(key)
    }
    return newarr;
}
var newdata =printAllKeys(obj);
console.log(newdata)