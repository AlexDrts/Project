export default class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    return this.products.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }
}
