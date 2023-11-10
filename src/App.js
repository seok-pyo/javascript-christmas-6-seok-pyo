import Server from './Server.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    const server = new Server();
    await server.getDate();
    await server.getOrder();
    OutputView.printTitle();
  }
}

export default App;
