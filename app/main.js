import GameController from "./Controllers/GameController.js"


class App {
    constructor() {
        GameController: new GameController();
    }
}

window['app'] = new App()