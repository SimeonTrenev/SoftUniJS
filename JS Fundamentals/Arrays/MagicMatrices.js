function Home (rooms,apartment,adres, color, swimmingPool,state,city){
    this.rooms= rooms;
    this.apartment = apartment;
    this.color= color;
    this.swimmingPool= swimmingPool;
    this.state = state;
    this.city = city;
    this.adres= adres;
}
var home1 = new Home(8,true,'cvetma gradina','blue',true,'sf','Sofia')
var home2 = new Home(4,false,'kapitan andreev','red',true,'kn','kustedin')
console.log(home1,home2);