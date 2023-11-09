import applier from '../src/discountApplier.js';

describe('날짜에 적용되는 할인 케이스를 확인한다', () => {
  test.each([
    { input: 1, result: true },
    { input: 13, result: false },
    { input: 15, result: true },
    { input: 29, result: true },
    { input: 30, result: true },
    { input: 25, result: false },
    { input: 31, result: false },
    { input: 3, result: false },
    { input: 2, result: true },
  ])('날짜가 주말인 경우 true를 반환한다.', ({ input, result }) => {
    expect(applier.weekendCheck(input)).toBe(result);
  });

  test.each([
    { input: 10, result: true },
    { input: 25, result: true },
    { input: 26, result: false },
    { input: 5, result: false },
  ])('날짜에 별이 있으면 true를 반환한다', ({ input, result }) => {
    expect(applier.starCheck(input)).toBe(result);
  });

  test.each([
    { input: 1, result: true },
    { input: 31, return: false },
  ])('크리스마스 디데이 할인 기간인 경우 true를 반환', ({ input, result }) => {
    expect(applier.dDayCheck(input)).toBe(result);
  });
});
