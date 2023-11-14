import Server from './domain/Server.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import calculator from './domain/discountCalculator.js';
import Order from './domain/Order.js';

class App {
  async run() {
    const server = new Server(InputView, calculator, Order);
    const date = await server.getDate();
    const inputArray = await server.getOrder();
    const order = server.makeOrder(inputArray);
    const dishes = server.countDishes();
    let totalPrice = server.getTotalPrice();
    totalPrice = await this.repeat(server, inputArray, order, dishes, totalPrice);
    OutputView.printTitle(date);
    OutputView.printMenu(order);
    OutputView.printTotalPrice(totalPrice);
    const benefit = server.getBenefit(date, totalPrice, dishes);
    OutputView.printGift(benefit[3]);
    OutputView.printBenefit(benefit);
    OutputView.printTotalBenefit(server.getTotalBenefit(benefit));
    OutputView.printFinalPrice(server.getFinalPrice(totalPrice, benefit));
    OutputView.printBadge(server.getBadge(server.getTotalBenefit(benefit)));
  }

  async repeat(server, inputArray, order, dishes, totalPrice) {
    if (totalPrice < 10_000) {
      OutputView.printNotice();
      const input = await InputView.askJoin();

      if (input === '1') {
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
