const Player = require('../../classes/Player');
const Item = require('../../classes/Item');

// save original console.log function to reassign it later
const consoleLog = console.log;

describe("Player", () => {
    // replace our call to console.log with a mock function to track calls to console.log
    beforeAll( () => {
        console.log = jest.fn();
    })
    
    // test to make sure that an instance of an Item can be pushed into the inventory array
    test("should add an item to the inventory if it isn't already present", () => {
        // Arrange
        const player = new Player("Sword", "John", "Human", "Forest");
        const item = new Item("Potion", 5);
        // Act
        player.addItem(item);
        // Assert
        expect(player.inventory).toContain(item);
    })

    // make sure we can't add the same item twice
    it("should NOT add an item to the inventory if it is already present", () => {
        const player = new Player("Sword", "John", "Human", "Forest");
        const item = new Item("Potion", 5);
        player.inventory.push(item);
        player.addItem(item); // should not add item
        expect(player.inventory).toHaveLength(1);
        expect(console.log).toHaveBeenCalledWith(`${item.name} already in inventory.`) // need to use mocked console.log call
    })

    // restores original console.log so it behaves normally after tests run
    afterAll(() => {
        console.log = consoleLog;
    })
})