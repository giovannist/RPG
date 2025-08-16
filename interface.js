// Player Information
const interfacePlayerHealth = document.getElementById('player-health')
const interfacePlayerWeapon = document.getElementById('player-equipped-weapon');
const interfacePlayerChestplate = document.getElementById('player-equipped-chestplate');
// Location Information
const interfaceLocationCurrent = document.getElementById('current-location');
const interfaceLocationDescription = document.getElementById('location-description')
const interfaceLocationOptions = document.getElementById('location-options')
//Inventory
const interfaceInventory = document.getElementById('inventory')
//
const mainInterface = document.getElementById('main-interface')

function updatePlayerInterface() {
    interfacePlayerHealth.innerHTML = `${character.health}/${character.maxHealth}`
    interfacePlayerWeapon.innerHTML = character.equippedWeapon.name
    interfacePlayerChestplate.innerHTML = `${character.equippedChestplate}`
}

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

function battleInterface(enemy, log) {
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