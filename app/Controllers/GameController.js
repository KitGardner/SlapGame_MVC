import GameService from "../Services/GameService.js";

let _gameService = new GameService();

let activeModifierIcons = [];

let itemModal = document.getElementById("ruleBreaker");

let modifierList = document.getElementById("modifiers");

export default class GameController {
  constructor() {
    console.log("Hello from the controller");
    this.Update();
  }

  Slap() {
    _gameService.DamageEnemy(1);
    this.Update();
  }

  SwordSlash() {
    _gameService.DamageEnemy(5);
    this.Update();
  }

  FireBall() {
    _gameService.DamageEnemy(10);
    _gameService.AttachItemToEnemy("Fire");
    this.Update();
  }

  GiveFire() {
    _gameService.AttachItemToEnemy("Fire");
    this.Update();
  }

  GiveArmor() {
    _gameService.AttachItemToEnemy("Armor");
    this.Update();
  }

  GiveBomb() {
    _gameService.AttachItemToEnemy("Bomb");
    this.Update();
  }

  Update() {
    let currentEnemyStats = _gameService.enemy;
    document.getElementById("enemyName").innerText = currentEnemyStats.name;
    document.getElementById("healthBar").style.width = `${this.CalcHealthBarPercent(currentEnemyStats.maxHealth, currentEnemyStats.health)}%`;
    document.getElementById("enemyHealth").textContent = currentEnemyStats.health.toString();
    document.getElementById("attackCount").innerText = currentEnemyStats.hitCount.toString();
    document.getElementById("modifiers").innerHTML = this.FormatModifiers(currentEnemyStats.modifiers);

    if (currentEnemyStats.isDead) {
      if (confirm("You have slain Grog. Would you like to fight him again?")) {
        this.Reset();
      }
    }
  }

  CalcHealthBarPercent(maxValue, currentValue) {
    const healthBarScale = 0.8;
    return ((currentValue / maxValue) * healthBarScale) * 100;
  }

  FormatModifiers(mods) {
    let modifierTemplate = "";
    for (let i = 0; i < mods.length; i++) {
      const mod = mods[i];
      modifierTemplate += `
        <div class="modifierToken">
          <img src=${mod.imgUrl} class="modifierImg">
          <span>${mod.modifier}</span>
        </div>
      `
    }

    return modifierTemplate;
  }

  Reset() {
    _gameService.ResetEnemy();
    this.Update();
  }

  UseItem() {
    itemModal.classList.contains("d-flex") ? itemModal.classList.remove("d-flex") : itemModal.classList.add("d-flex");
  }
}