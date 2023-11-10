import menu from './menu.js';
import Food from './Food.js';

class Order extends Food {
  constructor(name, quantity) {
    const [price, category] = menu[name] || [null, null];
    super(name, category);
    this.price = price;
    this.quantity = quantity;
  }

  getPrice() {
    return (this.price * this.quantity);
  }
}

export default Order;
