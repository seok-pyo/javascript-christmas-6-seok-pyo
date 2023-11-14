import { NOTICE, TITLE } from '../constants/constants.js';
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printAll(result) {
    const [date, order, totalPrice, benefit, totalBenefit, finalPrice, badge] = result;
    OutputView.printTitle(date);
    OutputView.printMenu(order);
    OutputView.printTotalPrice(totalPrice);
    OutputView.printGift(benefit);
    OutputView.printBenefit(benefit);
    OutputView.printTotalBenefit(totalBenefit);
    OutputView.printFinalPrice(finalPrice);
    OutputView.printBadge(badge);
  },

  printTitle(day) {
    Console.print(`12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
  },

  printMenu(menu) {
    Console.print(TITLE.MENU);
    menu.forEach((order) => Console.print(`${order.getName()} ${order.getQuantity()}개`));
  },

  printTotalPrice(totalAmount) {
    Console.print(TITLE.TOTAL_PRICE);
    Console.print(`${totalAmount.toLocaleString()}원`);
  },

  printGift(benefit) {
    const giftPrice = benefit[3];
    Console.print(TITLE.GIFT);
    if (giftPrice !== 0) Console.print('샴페인 1개');
    else Console.print('없음');
  },

  printBenefit(total) {
    const [dDay, weekDiscount, special, giftEvent, weekend] = total;
    Console.print(TITLE.BENEFIT);
    if (!dDay && !weekDiscount && !special && !giftEvent) Console.print('없음');

    if (dDay) Console.print(`크리스마스 디데이 할인: -${dDay.toLocaleString()}원`);

    if (weekend && weekDiscount !== 0) Console.print(`주말 할인: -${weekDiscount.toLocaleString()}원`);
    if (!weekend && weekDiscount !== 0) Console.print(`평일 할인: -${weekDiscount.toLocaleString()}원`);

    if (special) Console.print(`특별 할인: -${special.toLocaleString()}원`);
    if (giftEvent) Console.print(`증정 이벤트: -${giftEvent.toLocaleString()}원`);
  },

  printTotalBenefit(benefit) {
    Console.print(TITLE.TOTAL_BENEFIT);
    if (benefit) Console.print(`-${benefit.toLocaleString()}원`);
    else Console.print('0원');
  },

  printFinalPrice(result) {
    Console.print(TITLE.FINAL_PRICE);
    Console.print(`${result.toLocaleString()}원`);
  },

  printBadge(badge) {
    Console.print(TITLE.BADGE);
    Console.print(badge);
  },

  printNotice() {
    Console.print(NOTICE.PRICE);
  },
};

export default OutputView;
