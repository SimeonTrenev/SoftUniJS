function greetingByName(input) {
    let name = input.shift();
    let age = input.shift();
    let grade = input.shift();
    console.log(`Hello, ${name}!`);
    console.log(`Your age is ${age}!`);
    console.log(`Your grade is ${grade}!`);
}
greetingByName(["Pesho",20,5.99]);
