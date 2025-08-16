class BaseEnemy {
    constructor(health, damage) {
        this.health = health;
        this.maxHealth = health;
        this.damage = damage;
    }
}

const rat = new BaseEnemy(20, 5);