function solve(input) {

    let numberOfCooks = Number(+input.shift());
    var stop = "Stop baking!";
    var cookie = 1.50;
    var cake = 7.80;
    var waffles = 2.30;
    var totalSum = 0;
    var numOfSweets = 0;
    for (let index = 0; index < numberOfCooks; index++) {
        var cookName = String(input.shift());
        var sumMoneyCurrentCook = 0;
        var currentCookCookies = 0;
        var currentCookCakes = 0;
        var currentCookWaffels = 0;
        while (true) {
            var typeOfSweet = input.shift();
            if(typeOfSweet == stop){
                break;
            }
            var numberOfSweet = +input.shift();
            if(numberOfSweet == stop){
                break;
            }
            if (typeOfSweet === "cookies") {
                currentCookCookies = numberOfSweet;
                sumMoneyCurrentCook += (currentCookCookies * cookie.toFixed(2));
            }
            if (typeOfSweet === "cakes") {
                currentCookCakes = numberOfSweet;
                sumMoneyCurrentCook += (currentCookCakes * cake.toFixed(2));
            }
            if (typeOfSweet === "waffles") {
                currentCookWaffels = numberOfSweet;
                sumMoneyCurrentCook += (currentCookWaffels * waffles.toFixed(2));
            }
            numOfSweets += numberOfSweet;
        }
        totalSum += sumMoneyCurrentCook;
        console.log(`${cookName} baked ${currentCookCookies} cookies, ${currentCookCakes} cakes and ${currentCookWaffels} waffles.`);
    }
    console.log(`All bakery sold: ${numOfSweets}`);
    console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
}
solve(['3',            'George',
'cookies',      '10',
'Stop baking!', 'Annie',
'waffles',      '8',
'Stop baking!', 'Ivan',
'cookies',      '6',
'waffles',      '3',
'Stop baking!'
])