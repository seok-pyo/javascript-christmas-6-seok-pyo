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

  applier: (day) => {
    const appliedResult = {
      weekednDiscount: false,
      specialDiscount: 0,
      dDayDiscount: 0,
    };

    if (discount.weekendCheck(day)) appliedResult.weekednDiscount = true;
    if (discount.starCheck(day)) appliedResult.specialDiscount = 1000;
    if (discount.dDayCheck(day)) appliedResult.dDayDiscount = 1000 + ((day - 1) * 100);

    return appliedResult;
  },
};

export default discount;
