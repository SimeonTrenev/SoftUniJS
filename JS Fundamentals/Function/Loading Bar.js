function loadingBar(number){

    let percent = `${number}%`
    let numberOfPercents = number / 10;
    let p = '%';
    let t = '.';
    if(numberOfPercents < 10){
        console.log(`${percent} [${p.repeat(numberOfPercents)}${t.repeat(10 - numberOfPercents)}]`)
        console.log(`Still loading...`)
    }else{
        console.log(`100${p} Complete!`)
        console.log(`[${p.repeat(numberOfPercents)}]`)    
    }
}
loadingBar(100)