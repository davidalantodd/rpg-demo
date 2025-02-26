class Person {
    // defined private field
    #health;

    // name, type location
    constructor(name, type, location){
    // constuctor(name, type, location = [0,0]) -- could do this
        this.#validateName(name)
        
        this.name = name;
        this.type = type;
        this.location = location || [0,0];

        this.#health = 100;
    }

    // add a private method to validate name
    #validateName(name){
        if (!isNaN(name)){
            throw new Error("Name cannot be a number")
        }
    }

    // add a setter method to change name
    setName(name){
        this.#validateName(name);
        this.name = name;
    }

    //don't need function keyword
    introduce(){
        return `Hello, my name is ${this.name} and I am a ${this.type}`;
    }

    //updateX function to update the location (x position) to be increased by deltaX
    updateX(deltaX){
        this.location[0] += deltaX;
    }

    updateY(deltaY){
        this.location[1] += deltaY;
    }

    // getter methods - health
    getHealth() {
        return this.#health;
    }

    getHealthString() {
        return `${this.#health} hp`;
    }

    // setter methods - health
    increaseHealth(num) { // drinking a potion
        this.#health += num;
        if (this.#health > 100){
            this.#health = 100;
        }
    }

    decreaseHealth(num) { // taking damage
        this.#health -= num;
        if (this.#health < 0){
            this.#health = 0;
        }
    }
    
}

module.exports = Person