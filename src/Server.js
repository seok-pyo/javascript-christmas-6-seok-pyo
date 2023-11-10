class Server {
  constructor() {};

  getOrder(input) {
    return input.split(',').map((order) => order.split('-'));
  }
}

export default Server;
