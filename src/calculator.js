import discount from './discountApplier.js';

const calculator = {
  totalPrice(orderList) {
    return orderList.reduce((price, order) => price + order.getPrice(), 0);
  },

  countDishes(orderList) {
    const dish = {
      main: 0,
      dessert: 0,
    };

    orderList.forEach((order) => {
      if (order.getCategory() === 'main') dish.main += Number(order.getQuantity());
      else if (order.getCategory() === 'dessert') dish.dessert += Number(order.getQuantity());
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

    let weekendDiscount = 0;

    if (weekend) weekendDiscount += dish.main * 2023;
    else weekendDiscount += dish.dessert * 2023;

    return [dDay, weekendDiscount, special, giftEvent];
  },
};

export default calculator;
