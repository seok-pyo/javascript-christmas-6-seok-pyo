class Server {
  #order;

  #date;

  #calculator;

  #inputView;

  #Order;

  constructor(InputView, calculator, Order) {
    this.#order = [];
    this.#date = null;
    this.#inputView = InputView;
    this.#calculator = calculator;
    this.#Order = Order;
  }

  async getDate() {
    this.#date = await this.#inputView.readDate();
    return this.#date;
  }

  async getOrder() {
    const inputOrder = await this.#inputView.readMenu();
    return inputOrder;
  }

  makeOrder(input) {
    input.forEach((orders) => {
      const [name, quantity] = orders;
      const order = new this.#Order(name, quantity);
      this.#order.push(order);
    });
    return this.#order;
  }

  getTotalPrice() {
    return this.#calculator.totalPrice(this.#order);
  }

  countDishes() {
    return this.#calculator.countDishes(this.#order);
  }

  getBenefit(date, totalPrice, dishes) {
    return this.#calculator.benefit(date, totalPrice, dishes);
  }

  getTotalBenefit(benefit) {
    return this.#calculator.totalBenefit(benefit);
  }

  getFinalPrice(totalPrice, benefit) {
    return this.#calculator.finalPrice(totalPrice, benefit);
  }

  getBadge(totalBenefit) {
    return this.#calculator.badge(totalBenefit);
  }
}

export default Server;
