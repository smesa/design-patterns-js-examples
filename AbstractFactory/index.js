// Clase de vehiculos
class Vehicle {

    constructor(type, model) {
        this._model = model;
        this._type = type;
    }

    get model() {
        return this._model;
    }

    get type() {
        return this._type;
    }

    description() {
        return `Soy del tipo "${this.type}" y mi modelo es "${this.model}!"`
    }
}

// Sub clases de motos
class MotorcycleType1 extends Vehicle {
    constructor() {
        super("motorcycle", "deportiva");
    }
}

class MotorcycleType2 extends Vehicle {
    constructor() {
        super("motorcycle", "motoneta");
    }
}

class MotorcycleType3 extends Vehicle {
    constructor() {
        super("motorcycle", "moto");
    }
}

class MotorcycleType4 extends Vehicle {
    constructor() {
        super("motorcycle", "cuatrimoto");
    }
}


// Sub clases de carros
class CarType1 extends Vehicle {
    constructor() {
        super("car", "super");
    }
}

class CarType2 extends Vehicle {
    constructor() {
        super("car", "deportivo");
    }
}

class CarType3 extends Vehicle {
    constructor() {
        super("car", "combi");
    }
}

class CarType4 extends Vehicle {
    constructor() {
        super("car", "clasico");
    }
}


// Factory de motos
class MotorcycleFactory {
    create(model) {
        switch (model) {
            case "deportiva":
                return new MotorcycleType1();
            case "motoneta":
                return new MotorcycleType2();
            case "moto":
                return new MotorcycleType3();
            case "cuatrimoto":
                return new MotorcycleType4();
            default:
                console.log("Model not found ", model);
                break;
        }
    }
}

// Factory de carros
class CarFactory {
    create(model) {
        switch (model) {
            case "super":
                return new CarType1();
            case "deportivo":
                return new CarType2();
            case "combi":
                return new CarType3();
            case "clasico":
                return new CarType4();
            default:
                console.log("Model not found ", model);
                break;
        }
    }
}


// El FactoryProvider
class FactoryProvider {
    createType(type) {
        if (type === "car") {
            return new CarFactory();
        } else if (type === "motorcycle") {
            return new MotorcycleFactory();
        } else {
            console.log("Error type");
        }
    }
}


// Instanciamos provider
const superFactory = new FactoryProvider();

// Instanciamos factories
const cars = superFactory.createType('car');
const motorcycle = superFactory.createType('motorcycle');


//Cars
const superCar = cars.create('super');
console.log(superCar.description());
//output I am of type "car" and my model is super!

const combiCar = cars.create('combi');
console.log(combiCar.description());
//output I am of type "car" and my model is combi!

//Motorcycle
const sportMoto = motorcycle.create('deportiva');
console.log(sportMoto.description());
//output I am of type "car" and my model is deportiva!

const quadbike = motorcycle.create('cuatrimoto');
console.log(quadbike.description());
//output I am of type "motorcycle" and my model is cuatrimoto!