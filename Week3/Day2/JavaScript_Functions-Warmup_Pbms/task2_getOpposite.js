function getOpposite(num) {
	if(num===0)
	{
		return 0;
	}
	else if(isNaN(num))
	{
		return -1;
	}else if(!Number.isInteger(num)){
		 	return -1;
	}
	else
	{
		return -1*num;
	}
}

let res1 = getOpposite(5);
let res2 = getOpposite(0);
let res3 = getOpposite(-5);
let res4 = getOpposite('5a');
let res5 = getOpposite(5.5);
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)