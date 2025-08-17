let playerDamage;
let enemy;

function startBattle(enemyInfo) {
    enemy = enemyInfo;
    if (character.equippedWeapon) {
        playerDamage = character.equippedWeapon.damage;
    }
    else {
        playerDamage = 3;
    }
    playerTurn();
}

function playerTurn() {
    enemy.health -= playerDamage;

    let log = `${enemy.name} received ${playerDamage} damage!`
    battleInterface(enemy, log);

    setTimeout(() => {
        if (enemy.health < 1) {
            battleEnd();
            console.log(`The ${enemy.name} has been defeated!`)
            return;
        }
        enemyTurn()
    }, 2000);
}

function enemyTurn() {
    character.health -= enemy.damage;

    let log = `${character.name} received ${enemy.damage} damage!`
    battleInterface(enemy, log);
    updatePlayerInterface();


    setTimeout(() => {
        if (enemy.health < 1) {
            battleEnd();
            return;
        }
        playerTurn(enemy, playerDamage)
    }, 2000);
}

function battleEnd(winner) {
    enemy.health = enemy.maxHealth;
    character.experience += enemy.experience;
    updatePlayerInterface();
    interfaceBattleEnd(enemy.experience);
}   