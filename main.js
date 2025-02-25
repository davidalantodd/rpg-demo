const Person = require('./classes/Person')
const Player = require('./classes/Player')
const NPC = require('./classes/NPC')

function main(){
    console.log("This is the main function")


    console.log("******* Person *******")

    const person1 = new Person("Bertha", "Thief")
    console.log(person1.name)
    console.log(person1.type)
    console.log(person1.location)
    
    console.log(person1.introduce())

    const person2 = new Person("Miles", "Mayor")
    console.log(person2.introduce())

    person1.updateX(2)
    console.log(person1)

    person1.updateY(5)
    console.log(person1)

    console.log("******* Player *******")
    const player = new Player("Scissors", "Xena", "Barbarian", [10, 2])
    console.log(player.weapon)
    console.log(player)
    console.log(player.introduce())

    console.log("******* NPC *******")
    const npc = new NPC("Bubbles", "Monster"); // don't need location
    console.log(npc)
    console.log(NPC)
    console.log(NPC.npcTotal)   //accessing static property
    NPC.compareType(npc, player) // calling a static method

    // console.log("*** will throw error ***")
    // const npcError = new NPC("Shelly", "Fairy", [-1,-1])
    // console.log(npcError)
}

main()