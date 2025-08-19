class BaseEnemy {
    constructor(health, damage, name, loot) {
        this.health = health;
        this.maxHealth = health;
        this.damage = damage;
        this.name = name;
        this.loot = loot;
    }
}

const rat = new BaseEnemy(20, 5, "Rat", new RatLoot);

const bigRat = new BaseEnemy(30, 8, "Big Rat", new BigRatLoot);