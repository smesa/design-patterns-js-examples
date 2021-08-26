class Vehicle {

    constructor(wheeler, type) {
        this._wheeler = wheeler;
        this._type = type;
    }

    get wheeler() {
        return this._wheeler;
    }

    get type() {
        return this._type;
    }

    description() {
        return `Yo tengo ${this.wheeler} ruedas y soy de tipo ${this.type}`
    }

}

class Monocycle extends Vehicle {
    constructor() {
        super(1, 'monocycle');
    }
    fooFunction() {
        //....
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super(2, 'motorcycle');
    }
    fooFunction() {
        //....
    }
}

class Car extends Vehicle {
    constructor() {
        super(4, 'car');
    }
    fooFunction() {
        //....
    }
}

class Trailer extends Vehicle {
    constructor() {
        super(6, 'trailer');
    }
    fooFunction() {
        //....
    }
}

class VehicleFactory {

    createVehicle(wheeler) {

        if (wheeler === 1) {
            return new Monocycle();
        }

        if (wheeler === 2) {
            return new Motorcycle();
        }

        if (wheeler === 4) {
            return new Car();
        }

        if (wheeler === 6) {
            return new Trailer();
        }

        console.log('Error')
    }
}

const factory = new VehicleFactory();

const monocycle = factory.createVehicle(1);
console.log(monocycle.description());

const motorcycle = factory.createVehicle(2);
console.log(motorcycle.description());

const car = factory.createVehicle(4);
console.log(car.description());

const trailer = factory.createVehicle(6);
console.log(trailer.description());

factory.createVehicle(8);
