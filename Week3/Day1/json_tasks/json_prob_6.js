/**
 * arsing a list of lists and convert into a JSON object:
Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Array):
var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]
}
 */

var array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']],
 [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]]
 //transforms array to another format

function transformEmployeeData(array) {
    // your code here
    let newdata = []
 	for(var i of array)
 	{
 		newobj={}
 		for(var j=0;j<i.length;j++)
 		{
            newobj[i[j][0]]=i[j][1]
 		}
 		newdata.push(newobj)
 	}
 	
    return newdata;
}
var newlist = transformEmployeeData(array);
console.log(newlist)