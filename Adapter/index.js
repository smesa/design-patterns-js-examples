// class Calculator {
//     operation(num1, num2, operation) {
//         switch (operation) {
//             case 'add':
//                 return num1 + num2;
//             case 'sub':
//                 return num1 - num2;
//             default:
//                 return NaN;
//         }
//     }
// }

class Calculator {

    add(num1, num2) {
        return num1 + num2;
    }

    sub(num1, num2) {
        return num1 - num2;
    }

    div(num1, num2) {
        return num1 / num2;
    }
}

class CalculatorAdapter {

    constructor() {
        this.calculator = new Calculator();
    }

    operation(num1, num2, operation) {

        switch (operation) {
            case "add":
                return this.calculator.add(num1, num2);
            case "sub":
                return this.calculator.sub(num1, num2);
            case "div":
                return this.calculator.div(num1, num2);
            default:
                return NaN;
        }
    }
}

// const calculator = new Calculator();

// const sum = calculator.operation(1, 2, 'add');
// console.log(sum); //output 3

// const sub = calculator.operation(10, 2, 'sub');
// console.log(sub); //output 8


const calcAdapter = new CalculatorAdapter();

const sum = calcAdapter.operation(1, 2, 'add');
console.log(sum); //output 3

const sub = calcAdapter.operation(10, 2, 'sub');
console.log(sub); //output 8