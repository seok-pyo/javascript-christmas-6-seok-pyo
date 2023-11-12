const validate = {
  date(input) {
    const reg = /[^0-9]/;
    if (Number(input) < 1 || Number(input) > 31) throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    if (reg.test(input)) throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  },
};

export default validate;
