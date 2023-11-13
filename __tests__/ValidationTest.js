import validate from '../src/validation.js';

describe('입력값 유효성 검증 테스트', () => {
  test('날짜 입력이 1에서 31이 사이가 아닌 경우 예외가 발생한다.', () => {
    const inputDate = '32';

    expect(() => validate.date(inputDate)).toThrowError('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  });

  test('날짜 입력이 숫자가 아닌 경우 예외가 발생한다.', () => {
    const inputDate = 'a';

    expect(() => validate.date(inputDate)).toThrowError('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  });

  test('메뉴입력이 중복인 경우 예외가 발생한다', () => {
    const inputMenu = '제로콜라-1, 제로콜라-1';

    expect(() => validate.menu(inputMenu)).toThrowError('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test('메뉴입력이 음료만 있는 경우 예외가 발생한다', () => {
    const inputMenu = '제로콜라-1, 레드와인-2';

    expect(() => validate.menu(inputMenu)).toThrowError('[이벤트 안내] 음료만 주문 시, 주문할 수 없습니다.');
  });
});
