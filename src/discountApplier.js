const discount = {
  weekendCheck: (day) => {
    if (day % 7 === 1 || day % 7 === 2) return true;
    return false;
  },

  starCheck: (day) => {
    if (day % 7 === 3 || day === 25) return true;
    return false;
  },

  dDayCheck: (day) => {
    if (day <= 25 && day >= 1) return true;
    return false;
  },

  applier: (day, totalAmount) => {
    const appliedResult = {
      dDay: 0,
      weekend: false,
      special: 0,
      giftEvent: 0,
    };

    if (discount.weekendCheck(day)) appliedResult.weekend = true;
    if (discount.starCheck(day)) appliedResult.special = 1000;
    if (discount.dDayCheck(day)) appliedResult.dDay = 1000 + ((day - 1) * 100);
    if (totalAmount >= 120_000) appliedResult.giftEvent = 25_000;

    return appliedResult;
  },
};

export default discount;
