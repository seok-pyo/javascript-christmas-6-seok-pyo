import Order from './Order.js';
import discount from './discountApplier.js';

class Server {
  #order;

  #countDish;

  #totalAmount;

  #benefit;

  constructor() {
    this.#order = [];
    this.#countDish = {};
    this.#totalAmount = 0;
    this.#benefit = {};
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
    this.#totalAmount = this.#order.reduce((acc, order) => acc + order.getPrice(), 0);
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

  getBenefit(day) {
    const { dDay, weekend, special, giftEvent } = discount.applier(day, this.#totalAmount);

    let weekendDiscount = 0;

    if (weekend) weekendDiscount += this.#countDish.main * 2023;
    else weekendDiscount += this.#countDish.dessert * 2023;

    this.#benefit = [dDay, weekendDiscount, special, giftEvent];
    return this.#benefit;
  }
}

export default Server;
