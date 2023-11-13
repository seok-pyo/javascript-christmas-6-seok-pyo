import discount from './discountApplier.js';
import { BADGE } from './constants.js';

const calculator = {
  totalPrice(orderList) {
    return orderList.reduce((price, order) => price + order.getPrice(), 0);
  },

  countDishes(orderList) {
    const dish = {
      main: 0,
      dessert: 0,
      beverage: 0,
      appetizer: 0,
    };

    orderList.forEach((order) => {
      if (order.getCategory() === 'main') dish.main += Number(order.getQuantity());
      else if (order.getCategory() === 'dessert') dish.dessert += Number(order.getQuantity());
      else if (order.getCategory() === 'beverage') dish.beverage += Number(order.getQuantity());
      else if (order.getCategory() === 'appetizer') dish.appetizer += Number(order.getQuantity());
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

    let weekDiscount = 0;

    if (weekend) weekDiscount += dish.main * 2023;
    else weekDiscount += dish.dessert * 2023;

    return [dDay, weekDiscount, special, giftEvent, weekend];
  },

  totalBenefit(benefitList) {
    return benefitList.slice(0, 4).reduce((totalBenefit, benefit) => totalBenefit + benefit, 0);
  },

  finalPrice(totalPrice, benefitList) {
    const discountAmount = benefitList.slice(0, 3).reduce((amount, benefit) => amount + benefit, 0);
    return totalPrice - discountAmount;
  },

  badge(totalBenefit) {
    if (totalBenefit < 5000) return '없음';
    if (totalBenefit >= 20000) return BADGE.SANTA;
    if (totalBenefit >= 10000) return BADGE.TREE;
    if (totalBenefit >= 5000) return BADGE.STAR;
  },
};

export default calculator;
