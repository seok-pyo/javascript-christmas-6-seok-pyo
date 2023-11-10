import Server from '../src/Server';

describe('Restaurant 클래스 테스트', () => {
  test('지정된 문자열을 받으면 배열로 반환한다', () => {
    const answer = [['해산물파스타', '2'], ['레드와인', '1'], ['초코케이크', '1']];

    const server = new Server();
    const result = server.getOrder('해산물파스타-2,레드와인-1,초코케이크-1');

    expect(result).toStrictEqual(answer);
  });
});
