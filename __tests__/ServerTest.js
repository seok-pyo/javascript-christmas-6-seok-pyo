import Server from '../src/Server';

describe('Restaurant 클래스 테스트', () => {
  test('지정된 문자열을 받으면 배열로 반환한다', () => {
    const answer = [['해산물파스타', '2'], ['레드와인', '1'], ['초코케이크', '1']];

    const server = new Server();
    const result = server.getOrder('해산물파스타-2,레드와인-1,초코케이크-1');

    expect(result).toStrictEqual(answer);
  });

  test('주문 배열을 받으면 음식의 가격과 분류를 반환한다.', () => {
    const answer = [[6000, 'appetizer']];

    const server = new Server();
    const result = server.makeOrder([['양송이스프', '1']]);

    expect(result).toStrictEqual(answer);
  });

  test('주문 배열을 받으면 할인전 총 금액을 반환한다.', () => {
    const input = [['티본스테이크', '1'], ['바비큐립', '1'], ['초코케이크', '2'], ['제로콜라', '1']];
    const answer = 142000;

    const server = new Server();
    server.makeOrder(input);
    const result = server.getTotalPrice();

    expect(result).toStrictEqual(answer);
  });
});
