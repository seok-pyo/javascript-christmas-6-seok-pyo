import { MESSEAGE } from './constants.js';
import validate from './validation.js';
import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readDate() {
    let input;

    try {
      input = await Console.readLineAsync(MESSEAGE.VISIT);
      validate.date(input);
    } catch (error) {
      Console.print(error.message);
      input = await InputView.readDate();
    }

    return input;
  },

  async readMenu() {
    let input;

    try {
      input = await Console.readLineAsync(MESSEAGE.MENU);
      const validateMenu = validate.menu(input);
      return validateMenu;
    } catch (error) {
      Console.print(error.message);
      input = await InputView.readMenu();
      return input;
    }
  },
};

export default InputView;
