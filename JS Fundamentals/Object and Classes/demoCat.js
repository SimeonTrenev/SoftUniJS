function stupidCat(arr){

    class Cat{
        constructor(name, age){
            this.name = name
            this.age = age
        }
    

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}

    for(let i = 0; i < arr.length;i++){
        let currentElement = arr[i].split(' ')
        let name,age;
        [name,age] = [currentElement[0],currentElement[1]]
        let cat = new Cat(name,age)
        cat.meow()
    }

}
stupidCat(['Mellow 2', 'Tom 5'])