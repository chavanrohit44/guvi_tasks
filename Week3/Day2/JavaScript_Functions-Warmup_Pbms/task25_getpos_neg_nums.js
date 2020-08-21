function countPositivesSumNegatives(ar)
{
    poscount=0
    negcount=0
	for(var i of ar)
	{
		if(i>=0)
		{
			poscount +=1;
		}else{
            negcount +=1;
        }
    }
   return [poscount,negcount]
	
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = countPositivesSumNegatives(ar);
console.log(ar2)