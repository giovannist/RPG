class Item {
    quantity = 1;
    goldValue;
}

// Base Item Types
class Weapon extends Item {
    type = "Weapon";
    equippable = true;
}

class Chestplate extends Item {
    type = "Chestplate";
    equippable = true;
}
class Consumable extends Item {
    type = "Consumable";
    use(item) {
    }
}
//


//Weapons//
class Sword extends Weapon {
    name = "Sword";
    damage = 5;
    goldValue = 5;
}
class Lance extends Weapon {
    name = "Lance";
    damage = 7;
    goldValue = 7;
}
//
class IronChestplate extends Chestplate {
    name = "Iron Chestplate";
    healthBonus = 10;
    goldValue = 20;
}
//

// Loot Items
class RatMeat {
    name = "Rat Meat";
    description = "its rat meat... i guess?";
    value = 1;
}
const ratMeat = new RatMeat;
//


// Consumables
class healthPotion extends Consumable {
    amount = 20;
    use(amount) {
        character.healHealth(amount);
    }
}
//

// Enemy Loot
class RatLoot {
    minExperience = 1;
    maxExperience = 3;
    minGold = 1;
    maxGold = 1;
    lootItems = [ratMeat];
}
class BigRatLoot {
    minExperience = 2;
    maxExperience = 4;
    minGold = 2;
    maxGold = 3;
    lootItems = [ratMeat];
}
//

// Item Instantiation 
const sword = new Sword;
const ironChestplate = new IronChestplate
const lance = new Lance;
//