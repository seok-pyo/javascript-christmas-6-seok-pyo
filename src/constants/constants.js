const BADGE = {
  STAR: '별',
  TREE: '트리',
  SANTA: '산타',
};

const MENU = {
  APPETIZER: 'appetizer',
  MAIN: 'main',
  BEVERAGE: 'beverage',
  DESSERR: 'dessert',
};

const UNIT = {
  WON: '원',
  COUNT: '개',
};

const NUMBER = {
  DEFAULT: 0,
  TRUE: 1,
  FALSE: 2,
  ONE: 1,
  THREE: 3,
  BENEFIT_BOUDARY: 3,
  X_MAS: 25,
  LIMIT_MENU: 20,
  LIMIT_PRICE: 10_000,
  START_DATE: 1,
  END_DATE: 31,
  MONTH: 12,
  GIFT_COUNT: 1,
  THIS_YEAR: 2023,
  WEEK: 7,
};

const MESSEAGE = {
  VISIT: `${NUMBER.MONTH}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`,
  MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

const INVALID = {
  ORDER: '\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n',
  DATE: '\n[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n',
  NUMBER: '\n[ERROR] 유효하지 않은 입력입니다. 다시 입력해 주세요.\n',
};

const NOTICE = {
  JOIN: '다시 입력하시려면 1을 그대로 진행하시려면 엔터를 눌러주세요.\n',
  PRICE: '\n[이벤트 안내] 10,000원 이상부터 이벤트가 적용됩니다.\n',
  QUANTITY: '\n[이벤트 안내] 메뉴는 최대 20개까지만 주문할 수 있습니다.\n',
  MENU: '\n[이벤트 안내] 음료만 주문 시, 주문할 수 없습니다.\n',
  GIFT: `샴페인 ${NUMBER.GIFT_COUNT}${UNIT.COUNT}`,
};

const PRICE = {
  GIFT: 25_000,
  STAR: 5_000,
  TREE: 10_000,
  SANTA: 20_000,
  D_DAY_MILEAGE: 100,
  SPECIAL: 1_000,
  GIFT_BOUNDARY: 120_000,
};

const PATTERN = {
  NUMBER: /[^0-9]/,
  SPACE: /\s/g,
};

const seperator = {
  space: '',
  comma: ',',
  dash: '-',
};

const TITLE = {
  MENU: '\n<주문 메뉴>',
  TOTAL_PRICE: '\n<할인 전 총주문 금액>',
  GIFT: '\n<증정 메뉴>',
  BENEFIT: '\n<혜택 내역>',
  TOTAL_BENEFIT: '\n<총혜택 금액>',
  FINAL_PRICE: '\n<할인 후 예상 결제 금액>',
  BADGE: `\n<${NUMBER.MONTH}월 이벤트 배지>`,
  START(day) {
    return `${NUMBER.MONTH}월 ${Number(day)}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;
  },
  D_DAY: '크리스마스 디데이 할인: ',
  WEEKEND: '주말 할인: ',
  WEEKDAY: '평일 할인: ',
  SPECIAL: '특별 할인: ',
  GIFT_EVENT: '증정 이벤트: ',
};

const AMOUNT = {
  DISCOUNT_MONEY(result) {
    return `${seperator.dash}${result.toLocaleString()}${UNIT.WON}`;
  },
  MONEY(result) {
    return `${result.toLocaleString()}${UNIT.WON}`;
  },
  NOTHING: '없음',
  TOTAL_PRICE(result) {
    return `${result.toLocaleString()}${UNIT.WON}`;
  },
};

export {
  BADGE,
  MESSEAGE,
  INVALID,
  NOTICE,
  NUMBER,
  MENU,
  PATTERN,
  seperator,
  TITLE,
  AMOUNT,
  UNIT,
  PRICE,
};
