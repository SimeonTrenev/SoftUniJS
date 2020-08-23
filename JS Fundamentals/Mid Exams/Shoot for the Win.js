function solve(input){

    let array = input.slice();

   let targets = array.shift().split(' ').map(Number);
   let countOfShotTargets = 0;
   let isEnd = false;

   for(let i = 0; i < array.length;i++){
       let current = array[i]
       if(current === 'End'){
           isEnd = true;
           break;
       }else{
           current = Number(current);
       }
       
       if(targets.includes(targets[current])){
         let theTimeTarget = targets[current]
         targets[current] = -1;
        //    targets = targets.map((e)=>{
        //        if(e === -1){
        //            return e;
        //        }
        //        if(e <= theTimeTarget){
        //         return    e + theTimeTarget
        //        }

        //        return    e - theTimeTarget
               
        //    })
            for(let j = 0;j < targets.length;j++){
                if(targets[j] === -1){
                    continue;
                }else if(targets[j] <= theTimeTarget){
                    targets[j] += theTimeTarget
                }else{
                    targets[j] -= theTimeTarget
                }
            }
        }    
           
           
   }
    for(let p = 0; p < targets.length;p++){
        if(targets[p] === -1){
            countOfShotTargets++;
        }
    }
    if(isEnd){
        console.log(`Shot targets: ${countOfShotTargets} -> ${targets.join(' ')}`)
    }
   
}
solve([ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]
    )