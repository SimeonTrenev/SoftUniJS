function condenseArrayToNumber(array){

  let number = array
  let secondArr = []
  let str = ''

  while(number.length > 1){
  for(let i = 0; i < number.length - 1;i++){
      secondArr.push(number[i] + number[i + 1])
  }
  number = secondArr
  secondArr = []
}
  for(let el of number){
      str += el
  }
  console.log(str)
}
condenseArrayToNumber([5,0,4,1,2])
