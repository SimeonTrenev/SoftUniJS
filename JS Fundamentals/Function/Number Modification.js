function numberModification(number){

let modified = String(number);
let sum = 0;


for(let i = 0; i < modified.length;i++){
    let currentNumber = Number(modified[i])
    sum += currentNumber
}



for(let i = 0; i < modified.length;i++){
    if(sum > Number(modified.length) * 5){
        return modified;
    }else{
    modified += 9
    }

    let neededCount = Number(modified.length) * 5
    
    if(sum <= neededCount){
        sum += 9
        if(sum > neededCount){
            break;
        }
    }
}
return modified;

}
console.log(numberModification(101))