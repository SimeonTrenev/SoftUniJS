function printAndSum(n, m){

    let sum = 0;
    let nums = '';
    for(let i = n; i <= m; i++){
        nums += i + ' '
        sum += i
    }
    console.log(nums)
    console.log(`Sum: ${sum}`)
}
printAndSum(0, 26)