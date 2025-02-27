const Person = require("./Person");

class Player extends Person {
    constructor(weapon, name, type, location){
        // initialize parent class properties
        super(name, type, location)
        // set subclass property
        this.weapon = weapon
        // initialize our empty inventory
        this.inventory = []
    }

    addItem(item){
        // check to be sure that the item doesn't already exist
        if (!this.inventory.includes(item)) {
            // add the item
            this.inventory.push(item);
            return;
        }
        console.log(`${item.name} already in inventory.`)
    }
}

module.exports = Player;