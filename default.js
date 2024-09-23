function add(num1, num2, num3){
    const result = num1 + num2 + num3;
    console.log(num1, num2, num3, result)
    return result;
}
const sum = add(5, 2, 3)

// if value is not provide, take default.

function sum2(num4, num5=2){
    const total = num4 + num5;
    console.log(num4, num5,  total);
    return total;
}
const number = sum2(10);

// if value is provide, don't take default

function sum3(num6 = 50, num7 = 10){
    const total2 = num6 + num7;
    console.log(num6, num7, total2)
    return total2;
}
const number2 = sum3(100, 200);
// const number2 = sum3()