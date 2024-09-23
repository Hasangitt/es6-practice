// function declaration
function add5(shonka1, shonka2){
    const result3 = shonka1 + shonka2;
    return result3;
}
// ************
function add5(shonka1, shonka2){
    return shonka1 + shonka2;
}

const jogfol = add5(5, 5);
console.log(jogfol)

// function expression

const newTotal = function(a, b){
    return a + b;
}

// arrow funtion

const add6 = (a, b) => a + b;
const add7 = (number1, number2) => number1 * number2;

const no = add6(5, 8)
console.log(no)
const multiply = add7(7, 7);
console.log(multiply)