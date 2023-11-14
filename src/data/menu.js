const doFreeze = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key) => doFreeze(obj[key]));
};

const menu = {
  appetizer: {
    양송이스프: 6_000,
    타파스: 5_500,
    시저샐러드: 8_000,
  },
  main: {
    티본스테이크: 55_000,
    바비큐립: 54_000,
    해산물파스타: 35_000,
    크리스마스파스타: 25_000,
  },
  dessert: {
    초코케이크: 15_000,
    아이스크림: 5_000,
  },
  beverage: {
    제로콜라: 3_000,
    레드와인: 60_000,
    샴페인: 25_000,
  },
};

doFreeze(menu);

export default menu;
