import menu from './menu.js';
import Food from './Food.js';

class Order extends Food {
  constructor(name, quantity) {
    const [price, category] = menu[name] || [null, null];
    super(name, category);
    this.price = price;
    this.quantity = quantity;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return (this.price * this.quantity);
  }

  getCategory() {
    return this.category;
  }

  getQuantity() {
    return this.quantity;
  }
}

export default Order;
