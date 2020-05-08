function loadingBar(number){

    let percent = number / 10;
    
    percent = '%'.repeat([percent])
    let point = '.'.repeat([10 - (number/10)])
    let all = `${number}% [${percent}${point}]`
    let allFor100 = `[${percent}${point}]`
    if(number < 100){
    console.log(all)
    console.log('Still loading...')
    }else{
      console.log('100% Complete!')
      console.log(allFor100)  
    }
    
}
loadingBar(100)