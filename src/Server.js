import Order from './Order.js';

class Server {
  #order;

  constructor() {
    this.#order = [];
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
}

export default Server;
