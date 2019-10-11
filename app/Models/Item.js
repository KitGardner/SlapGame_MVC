export default class Item {
  constructor(name, modifier, lifeSpan, imgUrl) {
    this.name = name;
    this.modifier = modifier;
    this.lifeSpan = lifeSpan;
    this.imgUrl = imgUrl;
    console.log(`Hello from the ${name} item!`);
  }
}