import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printTitle(day) {
    Console.print(`12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },

  printMenu(menu) {
    Console.print('\n<주문 메뉴>');
    menu.forEach((order) => Console.print(`${order.getName()} ${order.getQuantity()
    }개`));
  },

  printTotalPrice(totalAmount) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${totalAmount}원`);
  },

  printGift(price) {
    Console.print('\n<증정 메뉴>');
    if (price !== 0) Console.print('샴페인 1개');
    else Console.print('없음');
  },
};

export default OutputView;
