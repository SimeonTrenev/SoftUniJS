function seizeTheFire(arr){

    let array = arr.slice();
    let levelOfFire = array.shift().split('#');
    let water = Number(array.shift())
    let effort = 0;
    let totalFire = 0;
    console.log(`Cells:`)

    for(let i = 0; i < levelOfFire.length;i++){
        let cages = levelOfFire[i].split(' = ')
        let comands = cages[0];
        let valueOfCages = Number(cages[1]);

        if(comands === 'High'){
            if(valueOfCages >= 81 && valueOfCages <= 125){
                water -= valueOfCages
                if(water < 0){
                    break;
                }
                effort += valueOfCages * 0.25;
                totalFire += valueOfCages;
                console.log(` - ${valueOfCages}`)
            }
        }else if(comands === 'Medium'){
            if(valueOfCages >= 51 && valueOfCages <= 80){
               water -= valueOfCages
               if(water < 0){
                   break;
               }
               effort += valueOfCages * 0.25;
               totalFire += valueOfCages;
               console.log(` - ${valueOfCages}`)
            }
        }else if(comands === 'Low'){
            if(valueOfCages >= 1 && valueOfCages <= 50){
                water -= valueOfCages;
                if(water < 0){
                    break;
                }
                effort += valueOfCages * 0.25;
                totalFire += valueOfCages;
                console.log(` - ${valueOfCages}`)
            }
        }
       
    }

    
    console.log(`Effort: ${effort.toFixed(2)}`)
    console.log(`Total Fire: ${totalFire}`)

   


}
seizeTheFire([
    'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    '220'
  ])