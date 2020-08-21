function divisibleByFive(num1) {
	if(num1%5===0)
	{
		return true
	}
	else
	{
		return false
	}
}
var divisible1 = divisibleByFive(23)
var divisible2 = divisibleByFive(25)
console.log(divisible1)
console.log(divisible2)