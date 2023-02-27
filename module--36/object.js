//create object and using object literals
const player={};
player.name="mostakem"
player.age=12;
player.bat= function(){
    console.log("swing your bat")
}
// console.log(player);
// player.bat();

const student={
    name:"mostakem",
    age:20,
    ball: function(){
        console.log("Throw the ball");
    }
}
// console.log(student);


//object constractors

const person= new Object();
console.log(person)

//object create method

const mostakem= Object.create(student);
// console.log(mostakem.name); 


// class 
class Person{
    name="mostakem";
    address="Gazipur";

    constructor(age){
        this.age= age;
    }


}
const person1=new Person(12);
console.log(person1)

//function

function Car(model1,price){
    this.model1=model1;
    this.price=price;
}

const tesla= new Car('dfff', 400000);
console.log(tesla);


