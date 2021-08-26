const objecto1 = {
    name: 'Sergio',
    imprimirNombre: function () {
        console.log(`Hola ${this.name} como estas?`)
    }
};

const objeto2 = Object.create(objecto1);
objeto2.name = 'Mauricio';
