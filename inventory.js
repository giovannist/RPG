class Inventory {
    constructor() {
        this.items = []
    }


    showItems() {
        console.log(this.items);
    }


    addItem(itemToAdd) {
        let itemIndex = this.items.findIndex(pos => pos === itemToAdd)

        if (itemIndex === -1) {
            this.items.push(itemToAdd);
        }
        else {
            this.items[itemIndex].quantity += 1;
        }
    }


    removeItem(itemToRemove) {
        let itemIndex = this.items.findIndex(pos => pos === itemToRemove)

        if (itemIndex === -1) {
            "Couldn't find item to remove"
            return;
        }

        if (itemToRemove.quantity > 1) {
            itemToRemove.quantity -= 1;
        }
        else {
            this.items.splice(itemIndex, 1);
        }
    }
}