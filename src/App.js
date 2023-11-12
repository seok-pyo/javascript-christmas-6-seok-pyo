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

    const totalPrice = server.getTotalPrice();

    OutputView.printTotalPrice(totalPrice);

    server.countDishes();

    const benefit = server.getBenefit(date);

    OutputView.printGift(benefit[3]);

    OutputView.printBenefit(benefit);

    OutputView.printTotalBenefit(server.getTotalBenefit());

    OutputView.printFinalPrice(server.getFinalPrice());

    OutputView.printBadge(server.getBadge(server.getTotalBenefit()));
  }
}

export default App;
