import discount from './discountApplier.js';
import { BADGE, PRICE, NUMBER, AMOUNT } from '../constants/constants.js';

const calculator = {
  totalPrice(orderList) {
    return orderList.reduce((price, order) => price + order.getPrice(), NUMBER.DEFAULT);
  },

  countDishes(orderList) {
    const dish = {
      main: NUMBER.DEFAULT,
      dessert: NUMBER.DEFAULT,
      beverage: NUMBER.DEFAULT,
      appetizer: NUMBER.DEFAULT,
    };

    orderList.forEach((order) => {
      if (order.getCategory() === 'main') dish.main += Number(order.getQuantity());
      if (order.getCategory() === 'dessert') dish.dessert += Number(order.getQuantity());
      if (order.getCategory() === 'beverage') dish.beverage += Number(order.getQuantity());
      if (order.getCategory() === 'appetizer') dish.appetizer += Number(order.getQuantity());
    });

    return dish;
  },

  benefit(day, totalPrice, dish) {
    const {
      dDay,
      weekend,
      special,
      giftEvent,
    } = discount.applier(day, totalPrice);

    let weekDiscount = NUMBER.DEFAULT;

    if (weekend) weekDiscount += dish.main * NUMBER.THIS_YEAR;
    else weekDiscount += dish.dessert * NUMBER.THIS_YEAR;

    return [dDay, weekDiscount, special, giftEvent, weekend];
  },

  totalBenefit(benefitList) {
    return benefitList.slice(NUMBER.DEFAULT, NUMBER.BENEFIT_BOUDARY + NUMBER.TRUE)
      .reduce((totalBenefit, benefit) => totalBenefit + benefit, NUMBER.DEFAULT);
  },

  finalPrice(totalPrice, benefitList) {
    const discountAmount = benefitList.slice(NUMBER.DEFAULT, NUMBER.BENEFIT_BOUDARY)
      .reduce((amount, benefit) => amount + benefit, NUMBER.DEFAULT);
    return totalPrice - discountAmount;
  },

  badge(totalBenefit) {
    if (totalBenefit < PRICE.STAR) return AMOUNT.NOTHING;
    if (totalBenefit >= PRICE.SANTA) return BADGE.SANTA;
    if (totalBenefit >= PRICE.TREE) return BADGE.TREE;
    if (totalBenefit >= PRICE.STAR) return BADGE.STAR;
  },
};

export default calculator;
