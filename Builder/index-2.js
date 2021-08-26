class Vehicle {
    constructor(type, brand, color) {
      this._type = type;
      this._brand = brand;
      this._color = color;
    }
    description(){
      return `Soy un "${this._type}" de marca ${this._brand} y mi color es ${this._color}`
    } 
}
  
class Car extends Vehicle {
    constructor(typeCar, brand, model, color, seats, rearWing, turbo) {
      super(typeCar, brand, color);
      this._model = model;
      this._seats = seats;
      this._rearWing = rearWing;
      this._turbo = turbo;
    }
  
    description(){
      return `Soy un ${this._type} 
        soy de la marca ${this._brand} 
        mi modelo es ${this._model}
        y mi color es ${this._color} 
        tengo ${this._seats} sillas
        mi aleron ${this._rearWing} 
        mi turbo es ${this._turbo} `
    } 
}
  
const bmw = new Car('luxury car', 'BMW', 'i8', 'black', 4, null, null);
console.log(bmw.description());

const f1 = new Car('race car', 'Ferrari', 'GTC4Lusso', 'red', 1, 'Twin Z','double nitro fast XX');
console.log(f1.description());

const vocho = new Car('car', 'volkswagen', 'Beetle', 'yellow', 4, null, null);
console.log(vocho.description());