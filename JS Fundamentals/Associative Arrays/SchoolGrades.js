function schoolGrades(array){

    let mapped = new Map();

    for(let item of array){
        let items = item.split(' ')
        let name = items[0]
        let grades = items.slice(1).map(Number)
        if(!mapped.has(name)){
            mapped.set(name,[])
            mapped.set(name,mapped.get(name).concat(grades))
        }else{
           mapped.set(name,mapped.get(name).concat(grades))
            
        }
    }

   let sorted = Array.from(mapped).sort((a,b)=>{
    return average(a,b)
   })

   function average(a,b){
       let aSum = 0;

       for(let i = 0; i < a[1].length;i++){
           aSum += a[1][i]
       }
       let bSum = 0
       for(let i = 0; i < b[1].length;i++){
           bSum += b[1][i]
       }
       let aAverage = aSum / a[1].length
       let bAverage = bSum / b[1].length
       
       return aAverage - bAverage
   }
    
    for(let [name, grades] of sorted){
        console.log(`${name}: ${grades.join(', ')} `)
    }

}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)