function getPositives(ar)
{
    pos=[]
	for(var i of ar)
	{
		if(i>=0)
		{
			pos.push(i)
		}
    }
   return pos;
	
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2)