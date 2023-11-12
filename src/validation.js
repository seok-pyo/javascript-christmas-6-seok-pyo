import menu from './menu.js';

const validate = {
  date(input) {
    const reg = /[^0-9]/;
    if (Number(input) < 1 || Number(input) > 31) throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    if (reg.test(input)) throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  },

  checkMenuName(menuName) {
    let result = false;

    Object.keys(menu).forEach((key) => {
      if (menu[key][menuName] !== undefined) result = true;
    });

    return result;
  },

  check(menuArray) {
    const reg = /[^0-9]/;
    const menuName = [];

    menuArray.forEach((oneMenu) => {
      const [name, quantity] = oneMenu;
      if (!validate.checkMenuName(name)) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
      if (reg.test(quantity)) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
      menuName.push(name);
    });
    if (menuName.length !== new Set(menuName).size) throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  },

  menu(input) {
    const deleteSpace = /\s/g;
    const menuArray = input.replace(deleteSpace, '').split(',').map((order) => order.split('-'));
    validate.check(menuArray);

    return menuArray;
  },
};

export default validate;
