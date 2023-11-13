import calculator from '../src/calculator.js';
import Order from '../src/Order.js';

describe('calculator 테스트', () => {
  let orderList;

  beforeAll(() => {
    const orderMenu = [
      { name: '티본스테이크', quantity: 1 },
      { name: '바비큐립', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    orderList = orderMenu.map((menu) => new Order(menu.name, menu.quantity));
  });

  test('totalPrice 메서드 테스트, 메뉴 수량에 따른 전체 금액을 반환한다.', () => {
    const total = calculator.totalPrice(orderList);

    expect(total).toBe(142_000);
  });

  test('countDishes 메뉴 카테고리 수량을 저장한 객체를 반환한다.', () => {
    const dish = calculator.countDishes(orderList);

    const result = {
      main: 2,
      dessert: 2,
      beverage: 1,
      appetizer: 0,
    };

    expect(dish).toStrictEqual(result);
  });
});
