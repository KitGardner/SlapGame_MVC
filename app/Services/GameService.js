import Enemy from "../Models/Enemy.js";
import Item from "../Models/Item.js";

let _enemy = new Enemy();
let _items = {
  Fire: new Item("Fire", 2, 3),
  Armor: new Item("Armor", -3, 5),
  Bomb: new Item("Bomb", 20)
}

export default class GameService {
  constructor() {
    console.log("Hello from the game service");

  }
}