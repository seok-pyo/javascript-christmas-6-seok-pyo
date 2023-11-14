import menu from '../data/menu.js';

class Order {
  #name;

  #category;

  #price;

  #quantity;

  constructor(name, quantity) {
    this.#name = name;
    this.#quantity = quantity;
    this.#setOrder();
  }

  #setOrder() {
    Object.keys(menu).forEach((category) => {
      if (menu[category][this.#name] !== undefined) {
        this.#category = category;
        this.#price = menu[category][this.#name];
      }
    });
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return (this.#price * this.#quantity);
  }

  getCategory() {
    return this.#category;
  }

  getQuantity() {
    return this.#quantity;
  }
}

export default Order;
