function randomNum(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

// TASK LIST

// GOLD VARIABLE
// SHOP
// LEVEL UP SYSTEM


updateLocationInterface(tavern.name, tavern.description, tavern.options);

character.inventory.addItem(lance);
character.inventory.addItem(lance);
character.inventory.addItem(lance);
character.inventory.addItem(sword);
character.inventory.addItem(sword);
character.inventory.addItem(ironChestplate);

character.equipItem(sword);

console.log(character.equippedWeapon.name)
updatePlayerInterface();