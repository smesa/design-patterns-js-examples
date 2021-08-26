class Printer {
    constructor(ink, color) {
        this.ink = ink;
        this.color = color;
    }
}

class Ink {
    constructor(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
}

class Color {
    constructor(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
}

class LiquidInk extends Ink {
    constructor() {
        super("basada en acrilico");
    }
}

class TonerInk extends Ink {
    constructor() {
        super("basada en laser");
    }
}

class PowderInk extends Ink {
    constructor() {
        super("basada en nilon");
    }
}

class EpsonPrinter extends Printer {
    constructor(ink, color) {
        super(ink, color);
    }
    print() {
        return "Impresora: Epson, Tinta: " + this.ink.type + " de color: " + this.color.type;
    }
}


class EnderPrinter extends Printer {
    constructor(ink, color) {
        super(ink, color);
    }
    print() {
        return "Impresora: Ender, Tinta: " + this.ink.type + " de color: " + this.color.type;
    }
}

class BlackAndWhite extends Color {
    constructor() {
        super("Blanco y Negro");
    }
}


class Colors extends Color {
    constructor(color) {
        super(color);
    }
}


//Ink
const liquidInk = new LiquidInk();
const tonerInk = new TonerInk();
const powderInk = new PowderInk();


//Color
const blackAndWhite = new BlackAndWhite();
const red = new Colors("Rojo");
const blue = new Colors("Azul");


//Printer
const liquidPrinter = new EpsonPrinter(liquidInk, red);
const tonerPrinter = new EpsonPrinter(tonerInk, blue);
const enderPrinter = new EnderPrinter(powderInk, blackAndWhite);

console.log(liquidPrinter.print());
console.log(tonerPrinter.print());
console.log(enderPrinter.print());

