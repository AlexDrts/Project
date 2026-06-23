export default class Product {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }

  getInfo() {
    return `${this.name} - ${this.price} грн`;
  }

  getPrice() {
    return this.price;
  }
}
