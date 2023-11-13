import menu from './menu.js';
import calculator from './calculator.js';

const validate = {
  date(input) {
    const reg = /[^0-9]/;
    if (Number(input) < 1 || Number(input) > 31) throw new Error('\n[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n');
    if (reg.test(input)) throw new Error('\n[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n');
  },

  checkMenuName(menuName) {
    const result = {
      check: false,
      category: null,
    };

    Object.keys(menu).forEach((key) => {
      if (menu[key][menuName] !== undefined) {
        result.check = true;
        result.category = key;
      }
    });

    return result;
  },

  // checkCategory(menuName) {
  //   const result = [];

  //   Object.keys(menu).forEach((key) => {
  //     if (meny[key][menuName] !== undefined) result.push(key);
  //   })

  //   return result;
  // }

  check(menuArray) {
    const menuNames = [];
    const categoryArray = [];
    let menuQuantity = 0;

    menuArray.forEach((oneMenu) => {
      const [name, quantity] = oneMenu;
      const { check, category } = validate.checkMenuName(name);
      if (!check) throw new Error('\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
      if (/[^0-9]/.test(quantity)) throw new Error('\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
      if (quantity < 1) throw new Error('\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
      if (!quantity) throw new Error('\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
      menuNames.push(name);
      categoryArray.push(category);
      menuQuantity += Number(quantity);
    });

    if (menuQuantity > 20) throw new Error('\n[이벤트 안내] 메뉴는 최대 20개까지만 주문할 수 있습니다.\n');
    if (menuNames.length !== new Set(menuNames).size) throw new Error('\n[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
    if (categoryArray.every((category) => category === 'beverage')) throw new Error('\n[이벤트 안내] 음료만 주문 시, 주문할 수 없습니다.\n');
  },

  menu(input) {
    const deleteSpace = /\s/g;
    const menuArray = input.replace(deleteSpace, '').split(',').map((order) => order.split('-'));
    validate.check(menuArray);

    return menuArray;
  },
};

export default validate;
