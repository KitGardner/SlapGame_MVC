import Enemy from "../Models/Enemy.js";
import Item from "../Models/Item.js";

let _enemy = new Enemy();
let _items = {
  Fire: new Item("Fire", 2, 3, "/assets/flame.png"),
  Armor: new Item("Armor", -3, 2, "/assets/armor.png"),
  Bomb: new Item("Bomb", 20, 1, "/assets/bomb.png")
}

export default class GameService {
  DamageEnemy(damage) {
    let totalDamage = damage + this.AddMods();

    if (totalDamage < 0) {
      totalDamage = 0
    }
    _enemy.health -= totalDamage;
    _enemy.hitCount++;
    if (_enemy.health <= 0) {
      _enemy.health = 0;
      _enemy.isDead = true;
    }
    console.log(_enemy.health);

  }

  FormatModifiers() {
    let modifierTemplate = "";
    for (let i = 0; i < _enemy.mods.length; i++) {
      const mod = _enemy.mods[i];
      modifierTemplate += `
        <div class="modifierToken">
          <img src=${mod.imgUrl} class="modifierImg">
          <span>${mod.modifier}</span>
        </div>
      `
    }

    return modifierTemplate;
  }

  AddMods() {
    let totalModification = 0;
    let modsToDelete = [];
    let modsLength = _enemy.mods.length;

    for (let i = modsLength - 1; i >= 0; i--) {
      const mod = _enemy.mods[i];
      totalModification += mod.modifier;
      mod.lifeSpan--;
      console.log(`${mod.name} - ${mod.lifeSpan}`);


      if (mod.lifeSpan <= 0) {
        _enemy.mods.splice(i, 1);
      }
    }

    this.RemoveModifiers(modsToDelete);
    return totalModification;
  }

  RemoveModifiers(modsToDelete) {
    modsToDelete.reverse().forEach(mod => {
      _enemy.mods.splice(mod.modIndex, 1);
    })

  }

  AttachItemToEnemy(itemName) {
    _enemy.mods.push(_items[itemName].Copy());
  }

  get enemy() {
    let enemyStats = {
      name: _enemy.name,
      health: _enemy.health,
      maxHealth: _enemy.maxHealth,
      hitCount: _enemy.hitCount,
      modifiers: this.FormatModifiers(),
      isDead: _enemy.isDead
    };

    return enemyStats;
  }

  ResetEnemy() {
    _enemy.health = 100;
    _enemy.hitCount = 0;
    _enemy.mods = [];
    _enemy.isDead = false;
  }

  constructor() {
    console.log("Hello from the game service");

  }
}