const Person = require('./classes/Person')

function main(){
    console.log("This is the main function")

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

}

main()