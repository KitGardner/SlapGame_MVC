export default class Item {
  constructor(name, modifier, lifeSpan) {
    this.name = name;
    this.modifier = modifier;
    this.lifeSpan = lifeSpan;
    console.log(`Hello from the ${name} item!`);
  }
}