import Enemy from "../Models/Enemy.js";
import Item from "../Models/Item.js";

let _enemy = new Enemy();
let _items = {
  Fire: new Item("Fire", 2, 3, "/assets/flame.png"),
  Armor: new Item("Armor", -3, 5, "/assets/armor.png"),
  Bomb: new Item("Bomb", 20, "/assets/bomb.png")
}

export default class GameService {
  DamageEnemy(damage) {
    _enemy.health -= damage + this.AddMods();
    _enemy.hitCount++;
    console.log(_enemy.health);

  }

  FormatModifiers() {
    let modifierTemplate = "";
    for (let i = 0; i < _enemy.mods.length; i++) {
      const mod = _enemy.mods[i];
      modifierTemplate += `
        <div>
          <img src=${mod.imgUrl} class="modifierImg">
          <span>${mod.modifier}</span>
        </div>
      `
    }

    debugger

    return modifierTemplate;
  }

  AddMods() {
    let totalModification = 0;
    let modsToDelete = [];

    for (let i = 0; i < _enemy.mods.length; i++) {
      const mod = _enemy.mods[i];
      totalModification += mod.modifier;
      mod.lifeSpan--;

      if (mod.lifeSpan == 0) {
        modsToDelete.push({
          modName: mod.name,
          modIndex: i
        })
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
    _enemy.mods.push(_items[itemName]);
  }

  get enemy() {
    let enemyStats = {
      name: _enemy.name,
      health: _enemy.health,
      maxHealth: _enemy.maxHealth,
      hitCount: _enemy.hitCount,
      modifiers: this.FormatModifiers()
    };

    return enemyStats;
  }

  constructor() {
    console.log("Hello from the game service");

  }
}