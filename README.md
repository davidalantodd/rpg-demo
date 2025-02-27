# RPG Demo

This is a simple RPG (Role-Playing Game) demo application that demonstrates the use of classes and inheritance in JavaScript. The application includes four main classes: `Person`, `Player`, `NPC`, and `Item`, each with their own properties and methods.

## Classes

- **Person**: The base class with properties for `name`, `type`, and `location`. It includes methods to introduce the person and update their location.
- **Player**: Inherits from `Person` and adds a `weapon` property. It includes a method `addItem` to add an item to the player's inventory.
- **NPC**: Inherits from `Person` and includes static properties and methods to keep track of the total number of NPCs and compare types with a player.
- **Item**: A class with properties for `name` and `weight`.

## Files

- `classes/Person.js`: Defines the `Person` class.
- `classes/Player.js`: Defines the `Player` class.
- `classes/NPC.js`: Defines the `NPC` class.
- `classes/Item.js`: Defines the `Item` class.
- `main.js`: The main entry point of the application that demonstrates the usage of the classes.
- `__tests__/classes/Item.test.js`: Contains tests for the `Item` class.
- `__tests__/classes/Player.test.js`: Contains tests for the `Player` class.

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

4. **Run the tests**:
    ```sh
    npm test
    ```

## Example Output

When you run the application, you will see output demonstrating the creation and interaction of [Person](http://_vscodecontentref_/1), [Player](http://_vscodecontentref_/2), [NPC](http://_vscodecontentref_/3), and [Item](http://_vscodecontentref_/4) objects.

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