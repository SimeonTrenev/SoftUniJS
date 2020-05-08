function greeting(input) {
    let firstName = input.shift();
    let lastName = input.shift();
    let age = input.shift();
    let city = input.shift();
    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`;

    console.log(result);



}
greeting(["Todor" , "Stoyanov" , "29" , "Shumen"]);
//функциите получават аргумент
//конкатенация - долепване на два текста
//интерпулацио - шаблон