import GameService from "../Services/GameService.js";

let _gameService = new GameService();


export default class GameController {
  constructor() {
    console.log("Hello from the controller");

  }

  Slap() {
    _gameService.DamageEnemy(1);
    this.Update();
  }
  Update() {
    console.log("Update the UI");

  }
}