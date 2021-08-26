class Vehicle {
    constructor(type, model, color) {
      this._model = model;
      this._type = type;
      this._color = color;
    }
     get model(){
      return this._model;
    }
    get type(){
      return this._type;
    }
    get color(){
      return this._color;
    }
    description(){
      return `Soy un tipo "${this.type}", mi modelo es ${this.model}! y mi color es ${this.color}`
    } 
}
  
const car = new Vehicle('car', 'BMW', 'black');
console.log(car.description()); 