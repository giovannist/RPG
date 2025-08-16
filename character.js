class Character {
    constructor(name) {
        this.name = name;
        this.inventory = new Inventory
    }
    equippedWeapon = null;
    equippedChestplate = null;
    health = 100;
    maxHealth = 100;

    experience = 0;
    maxExperience = 10;

    getEquipmentInfo() {
        console.log(this.equippedWeapon, this.equippedChestplate, this.health);
    }

    equipItem(item) {
        let itemIndex = this.inventory.items.findIndex(pos => pos === item);

        if (itemIndex === -1) {
            console.log("Item not found in inventory, sorry!")
            return;
        }
        switch (item.type) {
            case "Weapon":
                if (this.equippedWeapon != null) {
                    this.inventory.addItem(this.equippedWeapon);
                }
                this.equippedWeapon = item;
                this.inventory.removeItem(item);
                break;
            case "Chestplate":
                this.equippedChestplate = item
                this.inventory.removeItem(item);
                break;
            default:
                console.log("Not a valid item type, too bad!")
        }
    }
}

const character = new Character("Adventurer");
