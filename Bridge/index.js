class Printer {
    constructor(ink) {
        this.ink = ink;
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
    constructor(ink) {
        super(ink);
    }
    print() {
        return "Impresora: Epson, Tinta: " + this.ink.type;
    }
}


class EnderPrinter extends Printer {
    constructor(ink) {
        super(ink);
    }
    print() {
        return "Impresora: Ender, Tinta: " + this.ink.type;
    }
}


//Ink
const liquidInk = new LiquidInk();
const tonerInk = new TonerInk();
const powderInk = new PowderInk();

//Printer
const liquidPrinter = new EpsonPrinter(liquidInk);
const tonerPrinter = new EpsonPrinter(tonerInk);
const enderPrinter = new EnderPrinter(powderInk);

console.log(liquidPrinter.print());
console.log(tonerPrinter.print());
console.log(enderPrinter.print());

