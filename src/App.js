import Server from './Server.js';
import OutputView from './OutputView.js';
import InputView from './InputView.js';
import calculator from './calculator.js';
import Order from './Order.js';

class App {
  async run() {
    const server = new Server(InputView, calculator, Order);

    const date = await server.getDate();

    const inputArray = await server.getOrder();

    OutputView.printTitle(date);

    const order = server.makeOrder(inputArray);

    OutputView.printMenu(order);

    const totalPrice = server.getTotalPrice();

    OutputView.printTotalPrice(totalPrice);

    const dishes = server.countDishes();

    const benefit = server.getBenefit(date, totalPrice, dishes);

    OutputView.printGift(benefit[3]);

    OutputView.printBenefit(benefit);

    OutputView.printTotalBenefit(server.getTotalBenefit(benefit));

    OutputView.printFinalPrice(server.getFinalPrice(totalPrice, benefit));

    OutputView.printBadge(server.getBadge(server.getTotalBenefit(benefit)));
  }
}

export default App;
