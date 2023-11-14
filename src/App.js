import Server from './domain/Server.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import calculator from './domain/discountCalculator.js';
import Order from './domain/Order.js';
import { NUMBER } from './constants/constants.js';

class App {
  async run() {
    const server = new Server(InputView, calculator, Order);
    const date = await server.getDate();
    const inputArray = await server.getOrder();
    const order = server.makeOrder(inputArray);
    const dishes = server.countDishes();
    let totalPrice = server.getTotalPrice();
    totalPrice = await this.repeat(server, inputArray, order, dishes, totalPrice);
    const benefit = server.getBenefit(date, totalPrice, dishes);
    const totalBenefit = server.getTotalBenefit(benefit);
    const finalPrice = server.getFinalPrice(totalPrice, benefit);
    const badge = server.getBadge(totalBenefit);
    const result = [date, order, totalPrice, benefit, totalBenefit, finalPrice, badge];
    OutputView.printAll(result);
  }

  async repeat(server, inputArray, order, dishes, totalPrice) {
    if (totalPrice < NUMBER.LIMIT_PRICE) {
      OutputView.printNotice();
      const input = await InputView.askJoin();

      if (input === NUMBER.TRUE) {
        server.deleteOrder();
        inputArray = await server.getOrder();
        order = server.makeOrder(inputArray);
        dishes = server.countDishes();
        totalPrice = server.getTotalPrice();
        await this.repeat(server, inputArray, order, dishes, totalPrice);
      }
    }
    return totalPrice;
  }
}

export default App;
