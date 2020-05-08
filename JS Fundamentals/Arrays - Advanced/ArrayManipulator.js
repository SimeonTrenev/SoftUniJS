function arrayManipulations(arr, input) {
    let nums = [];
    let numb;
    for (let operations of input) {
 
        let splitOperations = operations.split(' ');
        let command = splitOperations[0];
        if (command === "addMany") {
            for (let i = 0; i < splitOperations.length; i++) {
                nums.push(splitOperations[i]);
            }
            nums.shift();
            numb = nums.slice(1)
            nums = []
 
 
            for (let j = numb.length - 1; j >= 0; j--) {
                arr.splice(splitOperations[1], 0, Number(numb[j]));
            }
 
        }
 
        if (command === "add") {
            arr.splice(splitOperations[1], 0, +splitOperations[2]);
        }
        if (command === "contains") {
            for (let i = 0; i < arr.length; i++) {
                if (+arr[i] === +splitOperations[1]) {
                    console.log(arr.indexOf(+splitOperations[1]));
                    break;
                } else {
                    console.log(-1);
                    break;
                }
            }
        }
        if (command === "remove") {
            arr.splice(+splitOperations[1], 1);
        }
        if (command === "shift") {
            for (let i = 0; i < +splitOperations[1]; i++) {
                let pushedElement = arr.shift();
                arr.push(pushedElement);
            }
        }
        if (command === "sumPairs") {
            arr = arr.map((e, i, arr) => i < arr.length - 1 ? (arr[i] += arr[i + 1]) : arr[i] = arr[i]).filter((e, i) => i % 2 === 0);
        }
        if (command === "print") {
            break;
 
        }
 
 
 
 
    }
    console.log(`[ ${arr.join(', ')} ]`);
}
arrayManipulations([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    )