import menu from '../data/menu.js';
import { INVALID, NOTICE, NUMBER, MENU, PATTERN, seperator } from '../constants/constants.js';

const validate = {
  date(input) {
    if (Number(input) < NUMBER.START_DATE || Number(input) > NUMBER.END_DATE) {
      throw new Error(INVALID.DATE);
    }
    if (PATTERN.NUMBER.test(input)) throw new Error(INVALID.DATE);
  },

  oneOrtwo(input) {
    if (PATTERN.NUMBER.test(input)) throw new Error(INVALID.NUMBER);
  },

  categoryInclude(menuName) {
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

  menuNameCheck(menuArray, menuNames) {
    menuArray.forEach((oneMenu) => {
      const [name, quantity] = oneMenu;
      const includeResult = validate.categoryInclude(name);

      if (!includeResult.check || PATTERN.NUMBER.test(quantity) || quantity < NUMBER.TRUE) {
        throw new Error(INVALID.ORDER);
      }

      menuNames.push(name);
    });

    if (menuNames.length !== new Set(menuNames).size) throw new Error(INVALID.ORDER);
  },

  menuPropertyCheck(menuArray, menuCategory) {
    let menuQuantity = NUMBER.DEFAULT;

    menuArray.forEach((oneMenu) => {
      const [name, quantity] = oneMenu;
      const includeResult = validate.categoryInclude(name);

      menuCategory.push(includeResult.category);
      menuQuantity += Number(quantity);
    });

    if (menuQuantity > NUMBER.LIMIT_MENU) throw new Error(NOTICE.QUANTITY);
    if (menuCategory.every((category) => category === MENU.BEVERAGE)) throw new Error(NOTICE.MENU);
  },

  menu(input) {
    if (!input) throw new Error(INVALID.ORDER);
    const menuArray = input.replace(PATTERN.SPACE, seperator.space).split(seperator.comma)
      .map((order) => order.split(seperator.dash));

    validate.menuNameCheck(menuArray, []);
    validate.menuPropertyCheck(menuArray, []);

    return menuArray;
  },
};

export default validate;
