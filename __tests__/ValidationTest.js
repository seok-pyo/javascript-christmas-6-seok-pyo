import validate from '../src/validation.js';

describe('입력값 유효성 검증 테스트', () => {
  test('날짜 입력이 1에서 31이 사이가 아닌 경우 예외가 발생한다.', () => {
    const inputDate = '32';

    expect(() => validate.date(inputDate)).toThrowError('1에서 31사이에 숫자를 입력해주세요.');
  });
});
