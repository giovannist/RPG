class Character {
    constructor(name) {
        this.name = name;
        this.inventory = new Inventory
    }
    equippedWeapon = null;
    equippedChestplate = null;
    health = 100;
    maxHealth = 100;
    level = 1;

    experience = 0;
    maxExperience = 10;

    gold = 0;

    // Level Related
    checkIfLevelUp() {
        if (character.experience >= character.maxExperience) {
            character.experience -= this.maxExperience;
            this.levelUp();
            this.checkIfLevelUp();
        };
    }
    levelUp() {
        character.level += 1;
        character.maxHealth *= 1.2
    }
    //

    // Equipment Related
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
    //
}

const character = new Character("Adventurer");