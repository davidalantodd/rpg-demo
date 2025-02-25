const Person = require("./Person");

class Player extends Person {
    constructor(weapon, name, type, location){
        // initialize parent class properties
        super(name, type, location)
        // set subclass property
        this.weapon = weapon
    }
}

module.exports = Player;