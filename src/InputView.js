import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readDate() {
    let input;

    try {
      input = await Console.readLineAsync('12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n');
      if (input === '3') throw new Error('test');
    } catch (error) {
      Console.print(error.message);
      await InputView.readDate();
    }

    return input;
  },

  async readMenu() {
    let input;

    try {
      input = await Console.readLineAsync('주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n');
    } catch (error) {
      Console.print(error.message);
    }

    return input.split(',').map((order) => order.split('-'));
  },
};

export default InputView;
