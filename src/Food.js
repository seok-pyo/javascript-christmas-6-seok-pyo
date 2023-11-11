import menu from './menu.js';

class Food {
  #name;

  #category;

  #price;

  constructor(name) {
    this.#name = name;
    this.#setFood();
  }

  #setFood() {
    Object.keys(menu).forEach((key) => {
      if (menu[key][this.#name] !== undefined) {
        this.#category = key;
        this.#price = menu[key][this.#name];
      }
    });
  }

  getName() {
    return this.#name;
  }

  getCategory() {
    return this.#category;
  }

  getPrice() {
    return this.#price;
  }
}

export default Food;
