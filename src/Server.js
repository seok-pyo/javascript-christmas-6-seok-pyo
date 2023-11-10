import Order from './Order.js';
import discount from './discountApplier.js';
import badge from './constants.js';
import InputView from './InputView.js';

class Server {
  #order;

  #countDish;

  #totalAmount;

  #benefit;

  #date;

  constructor() {
    this.#order = [];
    this.#countDish = {};
    this.#totalAmount = 0;
    this.#benefit = {};
    this.#date = 0;
  }

  async getDate() {
    this.#date = await InputView.readDate();
  }

  async getOrder() {
    this.#order = await InputView.readMenu();
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

  getTotalBenefit() {
    return this.#benefit.reduce((acc, cur) => acc + cur, 0);
  }

  getFinalPrice() {
    return this.#totalAmount - this.#benefit.splice(0, 3).reduce((acc, cur) => acc + cur);
  }

  getBadge() {
    if (this.getTotalBenefit() >= 20000) return badge.santa;
    if (this.getTotalBenefit() >= 10000) return badge.tree;
    if (this.getTotalBenefit() >= 5000) return badge.star;
  }
}

export default Server;
