class Vehicle {
    constructor(type, brand, color) {
        this._type = type;
        this._brand = brand;
        this._color = color;
    }
    description() {
        return `Soy un "${this._type}" de marca ${this._brand} y mi color es ${this._color}`
    }
}


class Car extends Vehicle {
    _description = '';
    constructor(typeCar, brand, color) {
        super(typeCar, brand, color);
    }
    builderModel(model) {
        this.concatDescription(` mi modelo es ${model}`);
        this._model = model;
        return this;
    }
    builderSeats(seats) {
        this.concatDescription(` tengo ${seats} sillas`);
        this._seats = seats;
        return this;
    }
    builderRearWing(rearWing) {
        this.concatDescription(` mi aleron es ${rearWing}`);
        this._rearWing = rearWing;
        return this;
    }

    builderTurbo(turbo) {
        this.concatDescription(` y mi turbo es ${turbo}`);
        this._turbo = turbo;
        return this;
    }

    concatDescription(description) {
        this._description = this._description.concat(description);
    }

    description() {
        return super.description() + this._description;
    }
}


const bmw = new Car('luxury car', 'BMW', 'black')
  .builderModel('i8')
  .builderSeats(4); 

console.log(bmw.description());



const f1 = new Car('race car', 'Ferrari', 'red')
  .builderModel('GTC4Lusso')
  .builderSeats(1)
  .builderRearWing('Twin Z')
  .builderTurbo('double nitro fast XX');

console.log(f1.description());

const vocho = new Car('car', 'volkswagen', 'yellow')
  .builderModel('Beetle')
  .builderSeats(4);
console.log(vocho.description());