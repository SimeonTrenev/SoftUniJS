function townsInfo(arr){

    // let myArr = []
    
    for(let key of arr){
        let current = key.split(' | ')
        let object = {town : current[0], latitude : Number(current[1]).toFixed(2), longitude : Number(current[2]).toFixed(2)};
        console.log(object)
    }
    


}
townsInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)