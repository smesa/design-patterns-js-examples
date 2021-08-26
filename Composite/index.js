class Article {
    get price() {
        return this._price || 0;
    }
    get name() {
        return this._name;
    }
    set price(price) {
        this._price = price;
    }
    set name(name) {
        this._name = name;
    }
}


class Composite extends Article {
    constructor() {
        super();
        this.articles = [];
    }
    add(article) {
        this.articles.push(article);
    }
    getPrice() {
        return this.articles.map(article => article.price).reduce((a, b) => a + b);
    }
}


class Box extends Composite {
    constructor() {
        super();
        this.name = "Box";
    }
}


class Bread extends Article {
    constructor() {
        super();
        this.name = "Pan";
        this.price = 25;
    }
}

class Tomato extends Article {
    constructor() {
        super();
        this.name = "Tomate";
        this.price = 5;
    }
}

class Ham extends Article {
    constructor() {
        super();
        this.name = "Jamón";
        this.price = 60;
    }
}

class Soda extends Article {
    constructor() {
        super();
        this.name = "Gaseosa";
        this.price = 15;
    }
}

class Chocolate extends Article {
    constructor() {
        super();
        this.name = "Chocolate";
        this.price = 7;
    }
}

class Candy extends Article {
    constructor() {
        super();
        this.name = "Caramelo";
        this.price = 5;
    }
}


//Box
const principalBox = new Box();

const sodaBox = new Box();
const candyBox = new Box();

candyBox.add(new Candy());
candyBox.add(new Candy());
candyBox.add(new Candy());

sodaBox.add(new Soda());
sodaBox.add(new Soda());
sodaBox.add(new Soda());
sodaBox.add(new Soda());

principalBox.add(new Bread());
principalBox.add(new Tomato());
principalBox.add(new Ham());

principalBox.add(sodaBox);
principalBox.add(candyBox);

//Prices
console.log(candyBox.getPrice()); //output 15
console.log(sodaBox.getPrice()); //output 60
console.log(principalBox.getPrice()); //output 90

principalBox.add(new Soda());
console.log(principalBox.getPrice()); //outout 105