class Server {
  #order;

  #calculator;

  #Order;

  #totalPrice;

  #dishes;

  #benefit;

  #totalBenefit;

  #finalPrice;

  #badge;

  constructor(calculator, Order) {
    this.#order = [];
    this.#calculator = calculator;
    this.#Order = Order;
  }

  deleteOrder() {
    this.#order.length = 0;
  }

  makeOrder(input) {
    input.forEach((orders) => {
      const [name, quantity] = orders;
      const order = new this.#Order(name, quantity);
      this.#order.push(order);
    });
    return this.#order;
  }

  countDishes() {
    this.#dishes = this.#calculator.countDishes(this.#order);
  }

  getTotalPrice() {
    this.#totalPrice = this.#calculator.totalPrice(this.#order);
  }

  returnTotalPrice() {
    return this.#totalPrice;
  }

  getBenefit(date) {
    this.#benefit = this.#calculator.benefit(date, this.#totalPrice, this.#dishes);
  }

  getTotalBenefit() {
    this.#totalBenefit = this.#calculator.totalBenefit(this.#benefit);
  }

  getFinalPrice() {
    this.#finalPrice = this.#calculator.finalPrice(this.#totalPrice, this.#benefit);
  }

  getBadge() {
    this.#badge = this.#calculator.badge(this.#totalBenefit);
  }

  returnResult() {
    return [
      this.#order,
      this.#totalPrice,
      this.#benefit,
      this.#totalBenefit,
      this.#finalPrice,
      this.#badge];
  }
}

export default Server;
