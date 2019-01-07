animalPopulation = 0;

class Animal {
    // Put your instance variables here

    constructor(name,favoriteFood) {
        // initialize your vars here
        this.name=name;
        this.favoriteFood=favoriteFood;
        animalPopulation++;
    }
    static getPopulation(){
       return animalPopulation
    }

    sleep() {
        // complete your sleep function here
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        // complete your eat function here
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();

    }
}

class Zookeeper {

    constructor(name){
        this.name=name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to "+ animals.length + " of " + Animal.getPopulation() + " total animals")
        for(var i=0; i<animals.length; i++){
            animals[i].eat(food);
        }
    }
}

class Tiger extends Animal {

    constructor(name) {
        // put your constructor content here
        super(name,"meat");
    }

}
class Bear extends Animal{

    constructor(name) {
        // put your constructor content here
       super(name,"fish");
    }

    sleep() {
        // complete your sleep function here
        console.log(this.name + " hibernates for 4 months");
    }

}

class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallow")
    }
    sleep() {
        // complete your sleep function here
        console.log(this.name + " sleeps in a cloud");
    }
    eat(food) {
        // complete your eat function here
        if(food == this.favoriteFood){
           console.log("YUM!!! " + this.name + " wants more " + food);
            this.sleep();
        }  else {
            super.eat(food);
        }

    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name,"leaves")
    }
    eat(food) {
        // complete your eat function here

        food !== this.favoriteFood ? console.log("YUCKY!!! " + this.name + " will not eat " + food) : (super.eat('leaves')); super.sleep();
    }
}
class Bees extends Animal{
    constructor(name){
        super(name,"pollen")
    }
    eat(food) {
        // complete your eat function here

        if(food !== this.favoriteFood) {
            console.log("YUCKY!!! " + this.name + " will not eat " + food);
            this.sleep();


        } else {
            super.eat("pollen");
            this.sleep();
        }
    }
    sleep() {
        // complete your sleep function here
        console.log(this.name + " never sleeps");
    }


}

function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallow");
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bees("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    var zookeeper = new Zookeeper("Zoebot");
    var animals = [tigger, stinger, pooh, rarity, gemma];
    zookeeper.feedAnimals(animals, "Rice");
    console.log("There are " + Animal.getPopulation() + " Animals");


}




//
// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape{
//
//     constructor(height, width) {
//         super('Polygon');
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//
//     //method #1
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
//
// }

// var p1 = new Polygon(20,40);
// var p2 = new Polygon(100,200);
// var s = new Shape("square");
// p2.sayHistory();
// s.sayName();
// s.sayHistory();