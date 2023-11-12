const validate = {
  date(input) {
    if (Number(input) < 1 || Number(input) > 31) throw new Error('1에서 31사이에 숫자를 입력해주세요.');
  },
};

export default validate;
