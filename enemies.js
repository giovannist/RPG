class BaseEnemy {
    constructor(health, damage, name, experience) {
        this.health = health;
        this.maxHealth = health;
        this.damage = damage;
        this.name = name;
        this.experience = experience;
    }
}

const rat = new BaseEnemy(20, 5, "Rat", 2);