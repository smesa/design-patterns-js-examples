class Hamburger {
    constructor() {
        this._drescription = "Hamburguesa desconocida";
        this._price = 0;
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }
    get drescription() {
        return this._drescription;
    }
    getHamburger() {
        return `Tu orden es: ${this.description} y su precio es ${this.price}`;
    }
}

class CheeseBurger extends Hamburger {
    constructor() {
        super();
        this.description = 'Cheese burger';
        this.price = 100;
    }
}

class BaconDoubleBurger extends Hamburger {
    constructor() {
        super();
        this.description = "Bacon Double Burger";
        this.price = 110;
    }
}


class WesternBurger extends Hamburger {
    constructor() {
        super();
        this.description = 'Western Burger';
        this.price = 105;
    }
}


class HamburgerDecorator extends Hamburger {
    constructor(burger) {
        super();
        this.burger = burger;
    }
}



class BaconDecorator extends HamburgerDecorator {
    constructor(burger) {
        super(burger);
    }
    get description() {
        return this.burger.description + " con tocino";
    }
    get price() {
        return this.burger.price + 9;
    }
}

class HamDecorator extends HamburgerDecorator {
    get description() {
        return this.burger.description + " con jamón";
    }
    get price() {
        return this.burger.price + 15;
    }
}

class MeatDecorator extends HamburgerDecorator {
    constructor(burger) {
        super(burger);
    }
    get description() {
        return this.burger.description + "con carne";
    }
    get price() {
        return this.burger.price + 20;
    }
}

class EggDecorator extends HamburgerDecorator {
    constructor(burger) {
        super(burger);
    }
    get description() {
        return this.burger.description + " con huevo";
    }
    get price() {
        return this.burger.price + 12;
    }
}

class PickleDecorator extends HamburgerDecorator {
    constructor(burger) {
        super(burger);
    }
    get description() {
        return this.burger.description + " con pepinos";
    }
    get price() {
        return this.burger.price + 5;
    }
}

class CheeseDecorator extends HamburgerDecorator {
    constructor(burger) {
        super(burger);
    }
    get description() {
        return this.burger.description + " con queso";
    }
    get price() {
        return this.burger.price + 9;
    }
}


const createHamburger = (superClass) => {

    superClass = new superClass();

    return {
      getHamburger() {
        return superClass.getHamburger();
      },
      with(...mixins) {
        return mixins.reduce((c, mixin) => {
          return new mixin(c);
        }, superClass);
      }
    };
  };


const hamburger = createHamburger(CheeseBurger);
console.log(hamburger.getHamburger());

const hamburgerWithHamAndBacon = createHamburger(CheeseBurger).with(
  HamDecorator,
  BaconDecorator
);

console.log(hamburgerWithHamAndBacon.getHamburger());
