class Item {
    quantity = 1;
}

// Base Item Types
class Weapon extends Item {
    type = "Weapon";
}

class Chestplate extends Item {
    type = "Chestplate"
}
//


//Weapons//
class Sword extends Weapon {
    name = "Sword";
    damage = 5;
}

class Lance extends Weapon {
    name = "Lance";
    damage = 7;
}
//
class IronChestplate extends Chestplate {
    name = "Iron Chestplate";
    healthBonus = 10;
}
//

// Item Instantiation 
const sword = new Sword;
const chestplate = new Chestplate
const lance = new Lance;
//