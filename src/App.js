import Server from './domain/Server.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import calculator from './domain/discountCalculator.js';
import Order from './domain/Order.js';
import { NUMBER } from './constants/constants.js';

class App {
  async run() {
    const server = new Server(calculator, Order);
    const date = await InputView.readDate();
    const inputArray = await InputView.readMenu();
    server.makeOrder(inputArray);
    server.countDishes();
    server.getTotalPrice();
    await this.repeat(server);
    server.getBenefit(date);
    server.getTotalBenefit();
    server.getFinalPrice();
    server.getBadge();

    OutputView.printAll([date, ...server.returnResult()]);
  }

  async repeat(server) {
    if (server.returnTotalPrice() < NUMBER.LIMIT_PRICE) {
      OutputView.printNotice();
      const input = await InputView.askJoin();

      if (Number(input) === NUMBER.TRUE) {
        server.deleteOrder();
        const inputArray = await InputView.readMenu();
        server.makeOrder(inputArray);
        server.countDishes();
        server.getTotalPrice();
        await this.repeat(server);
      }
    }
  }
}

export default App;
