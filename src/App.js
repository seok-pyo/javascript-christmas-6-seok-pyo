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

    const benefit = server.getBenefit(date);

    OutputView.printGift(benefit[3]);

    OutputView.printBenefit(benefit, server.weekend);
  }
}

export default App;
