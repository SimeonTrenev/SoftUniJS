function solve(input){

    let n = +input.shift();
    let l = +input.shift();
    let sum = '';
    
    for(let a = 1; a < n; a++){
        for(let b = 1; b < n; b++){
            for(let c = 'a'.charCodeAt(0);c < 'a'.charCodeAt(0) + l;c++){
                let firstChar = String.fromCharCode(c)
                for(let d = 'a'.charCodeAt(0); d < 'a'.charCodeAt(0)+ l;d++){
                    let secondChar = String.fromCharCode(d)
                    for(let e = 1; e <= n ; e++){
                        if(e > a && e > b){
                            sum += a + '' + b + firstChar + secondChar + e + ' '
                        }          
                    }
                }    
            }
        }
    }
    console.log(sum)
    
}
solve(['2', '4']);