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

    let log = `${enemy.name} is now at ${enemy.health} hp`
    battleInterface(enemy, log);

    setTimeout(() => {
        if (enemy.health < 1) {
            console.log(`The ${enemy.name} has been defeated!`)
            return;
        }
        enemyTurn()
    }, 2000);

}

function enemyTurn() {
    character.health -= enemy.damage;

    let log = `${character.name} is now at ${character.health} hp`
    battleInterface(enemy, log);

    setTimeout(() => {
        if (enemy.health < 1) {
            return;
        }
        playerTurn(enemy, playerDamage)
    }, 2000);
}