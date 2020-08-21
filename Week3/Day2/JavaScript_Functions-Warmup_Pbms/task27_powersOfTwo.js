function powersOfTwo(n){
    data=[]
    for(i=0;i<=n;i++)
    {
        data.push(Math.pow(2,i))
    }
    return data
  }
  console.log(powersOfTwo(10))