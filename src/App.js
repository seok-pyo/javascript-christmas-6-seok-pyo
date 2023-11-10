import Server from './Server.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    const server = new Server();
    const date = await server.getDate();
    const inputArray = await server.getOrder();
    OutputView.printTitle(date);
    const order = server.makeOrder(inputArray);
    OutputView.printMenu(order);
    const totalAmount = server.getTotalPrice();
    OutputView.printTotalPrice(totalAmount);
    server.countDishes();
    console.log(server.getBenefit()[3]);
  }
}

export default App;
