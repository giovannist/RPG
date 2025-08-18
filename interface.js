// Player Information
const interfacePlayerHealth = document.getElementById('player-health')
const interfacePlayerWeapon = document.getElementById('player-equipped-weapon');
const interfacePlayerChestplate = document.getElementById('player-equipped-chestplate');
const interfacePlayerExperience = document.getElementById('player-experience');
// Location Information
const interfaceLocationCurrent = document.getElementById('current-location');
const interfaceLocationDescription = document.getElementById('location-description')
const interfaceLocationOptions = document.getElementById('location-options')
//Inventory
const interfaceInventory = document.getElementById('open-inventory-button')
//
const mainInterface = document.getElementById('main-interface')

function updatePlayerInterface() {
    interfacePlayerHealth.innerHTML = `${character.health}/${character.maxHealth}`
    interfacePlayerWeapon.innerHTML = `${character.equippedWeapon?.name ?? "None"}`
    interfacePlayerChestplate.innerHTML = `${character.equippedChestplate?.name ?? "None"}`
    interfacePlayerExperience.innerHTML = `${character.experience}/${character.maxExperience}`
}


//LOCATIONS INTERFACE/////////////////////////////////////////////////////////////////////////////

function updateLocationInterface(name, description, options, specifics) {
    interfaceLocationCurrent.innerHTML = name;
    interfaceLocationDescription.innerHTML = description;
    defineLocationOptions(options);
    defineLocationSpecifics(specifics)
}

function defineLocationSpecifics(specifics) {
    mainInterface.innerHTML = "";
    if (specifics) {
        specifics.forEach(element => {
            if (element.type === "NPC") {
                baseInterfaceNPCButton(element.content)
            }
            else if (element.type === "Battle") {
                baseInterfaceBattleButton(element)  //Type, Text, Enemies
            }
        });
    }

}

function baseInterfaceBattleButton(battleInfo) { //type, text, enemies
    let fightButton = document.createElement('button');
    fightButton.innerHTML = battleInfo.text
    fightButton.onclick = () => {
        startBattle(battleInfo.enemies)
    }
    mainInterface.appendChild(fightButton);
}

function baseInterfaceNPCButton(NPC) {
    let name = document.createElement('p');
    let dialogue = document.createElement('p');
    name.innerHTML = NPC.name;
    dialogue.innerHTML = NPC.dialogue;
    mainInterface.appendChild(name)
    mainInterface.appendChild(dialogue)
}


function defineLocationOptions(options) {
    interfaceLocationOptions.innerHTML = '';

    options.forEach(option => {
        let button = document.createElement('button');
        button.innerHTML = `${option.name}`;

        button.onclick = () => {
            option.click();
        }

        interfaceLocationOptions.appendChild(button)
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////


// BATTLE INTERFACE////////////////////////////////////////////////////////////////////////////////
function battleInterface(enemy, log) {

    // Disabling Buttons
    disableEnableLocationButtons("Disable")

    interfaceInventory.disabled = true;
    // End
    mainInterface.innerHTML = "";
    let playerInfo = document.createElement('p');
    let enemyInfo = document.createElement('p');
    let battleLog = document.createElement('p');

    playerInfo.innerHTML = `${character.name} HP: ${character.health}`;
    enemyInfo.innerHTML = `${enemy.name} HP: ${enemy.health}`;
    battleLog.innerHTML = log;

    mainInterface.appendChild(playerInfo);
    mainInterface.appendChild(enemyInfo);
    mainInterface.appendChild(battleLog);
}

function interfaceBattleEnd(experience) {
    let continueButton = document.createElement('button');
    continueButton.innerHTML = "Continue";

    let lootInfo = document.createElement('p');
    lootInfo.innerHTML = `You win! +${experience} experience`;

    mainInterface.appendChild(lootInfo);
    mainInterface.appendChild(continueButton);

    continueButton.onclick = () => {
        disableEnableLocationButtons("Enable");
        interfaceInventory.disabled = false;
        clearMainInterface();
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

// INVENTORY ///////////////////////////////////////////////////////////////////////////////////////
let open = false;

interfaceInventory.onclick = () => {
    if (open) {
        interfaceInventory.innerHTML = "Open Inventory";
        open = false;
        mainInterface.innerHTML = "";
        disableEnableLocationButtons("Enable")
    }
    else {
        interfaceInventory.innerHTML = "Close Inventory";
        open = true;
        createInventoryInterface();
        disableEnableLocationButtons("Disable")
    }
}


function createInventoryInterface() {
    mainInterface.innerHTML = "";
    let itemList = document.createElement('div');

    character.inventory.items.forEach(item => {
        let itemDivision = document.createElement('div');
        let itemInfo = document.createElement('span');
        let equipButton = document.createElement('button')

        itemInfo.innerHTML = `${item.name} x${item.quantity}`
        equipButton.innerHTML = "Equip"

        equipButton.onclick = () => {
            character.equipItem(item);
            createInventoryInterface();
            updatePlayerInterface();
        }
        itemDivision.appendChild(itemInfo);
        itemDivision.appendChild(equipButton);
        mainInterface.appendChild(itemDivision);
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////


// GENERAL UTILITY
function clearMainInterface() {
    mainInterface.innerHTML = "";
}

function disableEnableLocationButtons(option) {
    let locationOptions = interfaceLocationOptions.children

    if (option === "Enable") {
        for (let i = 0; i < locationOptions.length; i++) {
            locationOptions[i].disabled = false;
        }
    }
    else {
        for (let i = 0; i < locationOptions.length; i++) {
            locationOptions[i].disabled = true;
        }
    }
}