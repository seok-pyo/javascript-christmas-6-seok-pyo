class Menu {
  constructor() {};

  make(input) {
    return input.split(',').map((order) => order.split('-'));
  }
}

export default Menu;
