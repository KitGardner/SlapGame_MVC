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
    _enemy.health -= damage;
    _enemy.hitCount++;
    console.log(_enemy.health);

  }
  constructor() {
    console.log("Hello from the game service");

  }
}