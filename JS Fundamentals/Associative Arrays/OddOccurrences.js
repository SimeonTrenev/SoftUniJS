function oddOccurancec(array = []){
let tracker = new Map;
array.split(' ')
.map(element => element.toLowerCase())
.forEach(element => {
   if(!tracker.has(element)){
        tracker.set(element,0)
    }
    tracker.set(element,tracker.get(element) + 1)
});

console.log(Array.from(tracker.keys()).filter((key)=>tracker.get(key) % 2 === 1).join(' '))

// console.log(Object.keys(tracker).filter((key)=> tracker[key] % 2 === 1)
// .join(' '))


}
oddOccurancec('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')