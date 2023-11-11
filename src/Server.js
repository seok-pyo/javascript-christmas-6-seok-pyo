import Order from './Order.js';
import InputView from './InputView.js';
import calculator from './calculator.js';

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
    this.weekend = false;
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
    return calculator.totalPrice(this.#order);
  }

  countDishes() {
    this.#countDish = calculator.countDishes(this.#order);
  }

  getBenefit() {
    return calculator.benefit(this.#date, this.#totalAmount, this.#countDish);
  }

  getTotalBenefit() {
    return calculator.totalBenefit(this.#benefit);
  }

  getFinalPrice() {
    return calculator.finalPrice(this.#totalAmount, this.#benefit);
  }

  getBadge() {
    return calculator.badge();
  }
}

export default Server;
