for (i = 0; i < 10; i += 1){
    alert("Congratulations!!! You have just won $1 000 000!");

}

let myMoney = prompt("How much money do you want to convert:");

let leva = parseInt(myMoney);
let euro = leva / 1.95583;
console.log(euro);