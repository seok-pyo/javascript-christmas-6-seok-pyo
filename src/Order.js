import Food from './Food.js';

class Order extends Food {
  constructor(name, quantity) {
    super(name);
    this.quantity = quantity;
  }

  getName() {
    return super.getName();
  }

  getPrice() {
    return (super.getPrice() * this.quantity);
  }

  getCategory() {
    return super.getCategory();
  }

  getQuantity() {
    return this.quantity;
  }
}

export default Order;
