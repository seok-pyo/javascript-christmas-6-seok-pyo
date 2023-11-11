import Order from './Order.js';
import InputView from './InputView.js';
import calculator from './calculator.js';

class Server {
  #order;

  #countDish;

  #totalPrice;

  #benefit;

  #date;

  constructor() {
    this.#order = [];
    this.#countDish = {};
    this.#totalPrice = 0;
    this.#benefit = {};
    this.#date = 0;
  }

  async getDate() {
    this.#date = await InputView.readDate();
    return this.#date;
  }

  async getOrder() {
    const inputOrder = await InputView.readMenu();
    return inputOrder;
  }

  makeOrder(input) {
    input.forEach((orders) => {
      const [name, quantity] = orders;
      const order = new Order(name, quantity);
      this.#order.push(order);
    });
    return this.#order;
  }

  getTotalPrice() {
    this.#totalPrice = calculator.totalPrice(this.#order);
    return this.#totalPrice;
  }

  countDishes() {
    this.#countDish = calculator.countDishes(this.#order);
  }

  getBenefit(date) {
    this.#benefit = calculator.benefit(date, this.#totalPrice, this.#countDish);
    return this.#benefit;
  }

  getTotalBenefit() {
    return calculator.totalBenefit(this.#benefit);
  }

  getFinalPrice() {
    return calculator.finalPrice(this.#totalPrice, this.#benefit);
  }

  getBadge() {
    return calculator.badge();
  }
}

export default Server;
