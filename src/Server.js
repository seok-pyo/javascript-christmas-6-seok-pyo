import menu from './menu.js';

class Server {
  #order;

  constructor() {
    this.#order = [];
  }

  getOrder(input) {
    return input.split(',').map((order) => order.split('-'));
  }

  makeOrder(input) {
    return input.map((order) => {
      const [name] = order;
      const [price, category] = menu[name];
      return [price, category];
    });
  }
}

export default Server;
