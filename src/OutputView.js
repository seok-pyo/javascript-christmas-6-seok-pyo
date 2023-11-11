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

  printBenefit(total, weekend) {
    Console.print('\n<혜택 내역>');
    if (!weekend) Console.print(`크리스마스 디데이 할인: -${total[0].toLocaleString()}원\n평일 할인: -${total[1]}원\n특별 할인: -${total[2]}원\n증정 이벤트: -${total[3]}원`);
    else Console.print(`크리스마스 디데이 할인: -${total[0]}원\n주말 할인: -${total[1]}원\n특별 할인: -${total[2]}원\n증정 이벤트: -${total[3]}원`);
  },

  printTotalBenefit(benefit) {
    Console.print('\n<총혜택 금액>');
    Console.print(`-${benefit.toLocaleString()}원`);
  },

  printFinalPrice(result) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${result.toLocaleString()}원`);
  },

  printBadge(badge) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(badge);
  },
};

export default OutputView;
