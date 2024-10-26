class Animal{
    constructor(name,age,food){
        this.name = name
        this.age= age
        this.food= food
    }
    eat(){
        console.log(`${this.name} eats ${this.food}`);
    }
    isCute(){
        if(this.age<2){
            console.log(`${this.name} is cute`)
        }
    }
}
let cat = new Animal("cat", 2, "fish")
cat.eat()
cat.isCute()
console.log(cat);

class Fish extends Animal{
    constructor(name,age,food,isAquatic){
        super(name,age,food)
        this.isAquatic = isAquatic
    }
    swim(){
        if(this.isAquatic){
            console.log(`${this.name} can swim`)
        }
    }
}
const shark = new Fish("Shark", 2, "fish", true)
shark.eat()
shark.isCute()
shark.swim()
console.log(shark);