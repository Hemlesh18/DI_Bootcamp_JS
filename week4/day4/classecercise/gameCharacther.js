class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
blackRabbit.speak("this is the end of the world")
// 2
class soccerPlayer{
    constructor(name,age,position){
        this.name = name;
        this.age = age;
        this.position = position;
    }
    tackle(name){
        console.log(`${this.name} is tackling the opponent name ${name}`);
    }
    pass(name){
        console.log(`${this.name} which age is ${this.age} is passing the ball to${name} `);
    }
}
let player1 = new soccerPlayer("Ronaldo", 35, "Forward");
let player2 = new soccerPlayer("Messi", 33, "Forward");
player1.tackle("Messi");
player1.tackle("sam")
player2.pass("Ronaldo");


// 3
class car{
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
        this.engineStarted= false
        this.maxSpeed=250

    }
    startEngine(){
        this.engineStarted = true
        console.log(`the engine of the ${this.brand} ${this.model} is started`)
    }
    stopEngine(){
        this.engineStarted = false
        console.log(`the engine of the ${this.brand} ${this.model} is stopped`)
    }
    accelerate(){
        if(this.engineStarted){
            console.log(`the ${this.brand} ${this.model} is accelerating`)
        }
        else{
            console.log(`please start the engine first`)
        }
}
}
let car1 = new car("BMW", "X5")
car.startEngine()
car.accelerate()
car.stopEngine()
car.accelerate()
