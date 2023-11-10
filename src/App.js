import Server from './Server.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    const server = new Server();
    const date = await server.getDate();
    await server.getOrder();
    OutputView.printTitle(date);
  }
}

export default App;
