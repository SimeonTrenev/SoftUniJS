function solve(text){

    let str = ''
let splitted = text.split('').forEach(element => {
    let lastElement = str.slice(-1)
    if(lastElement !== element){
        str += element
    }
});
    console.log(str)

}
solve('qqqwerqwecccwd')