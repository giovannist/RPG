class BaseEnemy {
    constructor(health, damage, name) {
        this.health = health;
        this.maxHealth = health;
        this.damage = damage;
        this.name = name;
    }
}

const rat = new BaseEnemy(20, 5, "Rat");