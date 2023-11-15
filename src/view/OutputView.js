import { NOTICE, TITLE, AMOUNT, UNIT, NUMBER } from '../constants/constants.js';
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
    Console.print(TITLE.START(day));
  },

  printMenu(menu) {
    Console.print(TITLE.MENU);
    menu.forEach((order) => Console.print(`${order.getName()} ${Number(order.getQuantity())}${UNIT.COUNT}`));
  },

  printTotalPrice(totalAmount) {
    Console.print(TITLE.TOTAL_PRICE);
    Console.print(AMOUNT.MONEY(totalAmount));
  },

  printGift(benefit) {
    const giftPrice = benefit[NUMBER.BENEFIT_BOUDARY];
    Console.print(TITLE.GIFT);
    if (giftPrice !== NUMBER.DEFAULT) Console.print(NOTICE.GIFT);
    else Console.print(AMOUNT.NOTHING);
  },

  printBenefit(total) {
    const [dDay, weekDiscount, special, giftEvent, weekend] = total;
    Console.print(TITLE.BENEFIT);
    if (!dDay && !weekDiscount && !special && !giftEvent) Console.print(AMOUNT.NOTHING);

    if (dDay) Console.print(`${TITLE.D_DAY}${AMOUNT.DISCOUNT_MONEY(dDay)}`);

    if (weekend && weekDiscount !== NUMBER.DEFAULT) Console.print(`${TITLE.WEEKEND}${AMOUNT.DISCOUNT_MONEY(weekDiscount)}`);
    if (!weekend && weekDiscount !== NUMBER.DEFAULT) Console.print(`${TITLE.WEEKDAY}${AMOUNT.DISCOUNT_MONEY(weekDiscount)}`);

    if (special) Console.print(`${TITLE.SPECIAL}${AMOUNT.DISCOUNT_MONEY(special)}`);
    if (giftEvent) Console.print(`${TITLE.GIFT_EVENT}${AMOUNT.DISCOUNT_MONEY(giftEvent)}`);
  },

  printTotalBenefit(benefit) {
    Console.print(TITLE.TOTAL_BENEFIT);
    if (benefit) Console.print(AMOUNT.DISCOUNT_MONEY(benefit));
    else Console.print(AMOUNT.MONEY(benefit));
  },

  printFinalPrice(result) {
    Console.print(TITLE.FINAL_PRICE);
    Console.print(AMOUNT.MONEY(result));
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
