import validate from '../src/domain/validation.js';

describe('입력값 유효성 검증 테스트', () => {
  test('날짜 입력이 1에서 31이 사이가 아닌 경우 예외가 발생한다.', () => {
    const inputDate = '32';

    expect(() => validate.date(inputDate)).toThrowError('\n[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n');
  });

  test('날짜 입력이 숫자가 아닌 경우 예외가 발생한다.', () => {
    const inputDate = 'a';

    expect(() => validate.date(inputDate)).toThrowError('\n[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n');
  });

  test('메뉴입력이 중복인 경우 예외가 발생한다', () => {
    const inputMenu = '제로콜라-1,제로콜라-1';

    expect(() => validate.menu(inputMenu)).toThrowError('\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
  });

  test('메뉴입력이 음료만 있는 경우 예외가 발생한다', () => {
    const inputMenu = '제로콜라-1,레드와인-2';

    expect(() => validate.menu(inputMenu)).toThrowError('\n[이벤트 안내] 음료만 주문 시, 주문할 수 없습니다.\n');
  });

  test('메뉴가 20개를 초과하면 예외가 발생한다.', () => {
    const inputMenu = '티본스테이크-7,레드와인-6,초코케이크-8';

    expect(() => validate.menu(inputMenu)).toThrowError('\n[이벤트 안내] 메뉴는 최대 20개까지만 주문할 수 있습니다.\n');
  });

  test.each([[['크리스맛스파스타', '1']], [['티본슷테이크', '1']], [['래드와인', '2']]])('메뉴 입력이 메뉴판에 없는 경우 예외가 발생한다.', (input) => {
    expect(() => validate.menuNameCheck(input)).toThrowError('\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
  });

  test('메뉴 개수가 1 이상이 아닌 경우 예외가 발생한다.', () => {
    const inputMenu = '초코케이크-0';

    expect(() => validate.menu(inputMenu)).toThrowError('\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
  });
});
