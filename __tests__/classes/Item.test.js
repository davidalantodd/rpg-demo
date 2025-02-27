const Item = require('../../classes/Item')

describe("Item", () => {

    // write our tests here
    it("should create an instance of an Item", () => {
        const item = new Item("test item", 10);
        expect(item).toBeInstanceOf(Item);
    })

    it("should set the name and weight properties correctly", () => {
        const name = "test item";
        const weight = 10;
        const item = new Item(name, weight);
        expect(item.name).toBe(name);
        expect(item.weight).toBe(weight);
    })
})