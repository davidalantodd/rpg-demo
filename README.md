# RPG Demo

This is a simple RPG (Role-Playing Game) demo application that demonstrates the use of classes and inheritance in JavaScript. The application includes three main classes: `Person`, `Player`, and `NPC`, each with their own properties and methods.

## Classes

- **Person**: The base class with properties for `name`, `type`, and `location`. It includes methods to introduce the person and update their location.
- **Player**: Inherits from `Person` and adds a `weapon` property.
- **NPC**: Inherits from `Person` and includes static properties and methods to keep track of the total number of NPCs and compare types with a player.

## Files

- `classes/Person.js`: Defines the `Person` class.
- `classes/Player.js`: Defines the `Player` class.
- `classes/NPC.js`: Defines the `NPC` class.
- `main.js`: The main entry point of the application that demonstrates the usage of the classes.

## How to Clone and Run

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd rpg-demo
    ```

2. **Install dependencies** (if any):
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    node main.js
    ```

## Example Output

When you run the application, you will see output demonstrating the creation and interaction of [Person](http://_vscodecontentref_/0), [Player](http://_vscodecontentref_/1), and [NPC](http://_vscodecontentref_/2) objects.

```sh
This is the main function
******* Person *******
Bertha
Thief
[ 0, 0 ]
Hello, my name is Bertha and I am a Thief
Hello, my name is Miles and I am a Mayor
Person { name: 'Bertha', type: 'Thief', location: [ 2, 0 ] }
Person { name: 'Bertha', type: 'Thief', location: [ 2, 5 ] }
******* Player *******
Scissors
Player {
  name: 'Xena',
  type: 'Barbarian',
  location: [ 10, 2 ],
  weapon: 'Scissors'
}
Hello, my name is Xena and I am a Barbarian
******* NPC *******
NPC {
  name: 'Bubbles',
  type: 'Monster',
  location: [ 0, 0 ]
}
[class NPC extends Person]
1
We are different types