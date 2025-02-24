class Person {
    // name, type location
    constructor(name, type, location){
    // constuctor(name, type, location = [0,0]) -- could do this
        this.name = name;
        this.type = type;
        this.location = location || [0,0];
    }

    //don't need function keyword
    introduce(){
        return `Hello, my name is ${this.name} and I am a ${this.type}`
    }

    //updateX function to update the location (x position) to be increased by deltaX
    updateX(deltaX){
        this.location[0] += deltaX;
    }

    updateY(deltaY){
        this.location[1] += deltaY;
    }


    
}

module.exports = Person