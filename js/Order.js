export default class Order {
  constructor(id, customer, products) {
    this.id = id;
    this.customer = customer;
    this.products = products;
  }

  getTotal() {
    return this.products.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }

  showOrder() {
    return `Замовлення №${this.id}`;
  }
}
