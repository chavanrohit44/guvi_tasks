  

function sumCSV(s)
{
	var data=s.split(",")
	var arr=[]
	var count=0
	for(var i=0;i<data.length;i++)
	{
    	arr.push((+data[i]))
	}
	for(var j of arr)
	{
		count=count+j
	}
	return count
}

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));