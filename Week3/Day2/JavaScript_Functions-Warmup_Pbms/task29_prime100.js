printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, ' → ', i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
 // your code here
 if(n == 2){
    return true
 }
 for(var i =2 ;i<n;i++){
    if(n % i ===0){
        return false
    }
 }
 return true
}