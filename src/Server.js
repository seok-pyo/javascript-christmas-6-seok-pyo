import Order from './Order.js';
import discount from './discountApplier.js';

class Server {
  #order;

  #countDish;

  constructor() {
    this.#order = [];
    this.#countDish = {};
  }

  getOrder(input) {
    return input.split(',').map((order) => order.split('-'));
  }

  makeOrder(input) {
    input.forEach((orders) => {
      const [name, quantity] = orders;
      const order = new Order(name, quantity);
      this.#order.push(order);
    });
  }

  getTotalPrice() {
    return this.#order.reduce((acc, order) => acc + order.getPrice(), 0);
  }

  getDiscount(day) {
    return discount.applier(day);
  }

  countDishes() {
    const dish = {
      main: 0,
      dessert: 0,
    };

    this.#order.forEach((orderItem) => {
      if (orderItem.getCategory() === 'main') dish.main += Number(orderItem.getQuantity());
      else if (orderItem.getCategory() === 'dessert') dish.dessert += Number(orderItem.getQuantity());
    });

    this.#countDish = dish;
  }
}

export default Server;
