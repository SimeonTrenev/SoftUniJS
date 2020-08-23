function amazingNumbers(number){

  let stringet = number.toString()
  let sum = 0;
  
  for(let i = 0; i < stringet.length;i++){
      sum += Number(stringet[i])
  }
  let searchedNumber = sum.toString()
  let isIncluded = searchedNumber.includes('9')

  
  if(isIncluded){
      console.log(`${number} Amazing? True`)
  }else{
      console.log(`${number} Amazing? False`)
  }
}
amazingNumbers(999)