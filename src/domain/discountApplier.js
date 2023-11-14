import { NUMBER, PRICE } from '../constants/constants.js';

const discount = {
  weekendCheck: (day) => {
    if (day % NUMBER.WEEK === NUMBER.TRUE || day % NUMBER.WEEK === NUMBER.FALSE) return true;
    return false;
  },

  starCheck: (day) => {
    if (day % NUMBER.WEEK === NUMBER.THREE || Number(day) === NUMBER.X_MAS) return true;
    return false;
  },

  dDayCheck: (day) => {
    if (day <= NUMBER.X_MAS && day >= NUMBER.TRUE) return true;
    return false;
  },

  applier: (day, totalAmount) => {
    const appliedResult = {
      dDay: NUMBER.DEFAULT,
      weekend: false,
      special: NUMBER.DEFAULT,
      giftEvent: NUMBER.DEFAULT,
    };

    if (discount.weekendCheck(day)) appliedResult.weekend = true;
    if (discount.starCheck(day)) appliedResult.special = PRICE.SPECIAL;
    if (discount.dDayCheck(day)) {
      appliedResult.dDay = PRICE.SPECIAL + ((day - NUMBER.ONE) * PRICE.D_DAY_MILEAGE);
    }
    if (totalAmount >= PRICE.GIFT_BOUNDARY) appliedResult.giftEvent = PRICE.GIFT;

    return appliedResult;
  },
};

export default discount;
