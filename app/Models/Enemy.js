export default class Enemy {
  constructor(name = "Grog", maxHealth = 100, health = 100, mods = []) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.health = health;
    this.hitCount = 0;
    this.mods = mods;
    this.isDead = false;
    console.log("Hello from the enemy");

  }
}