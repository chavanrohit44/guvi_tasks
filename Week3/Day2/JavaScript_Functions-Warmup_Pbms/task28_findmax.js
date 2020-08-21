function findMax(ar)
{
// your code here
var max=0;
for(var i in ar){
    if(ar[i]>max){
        max=ar[i];
    }
}
return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log('Max: ', max);