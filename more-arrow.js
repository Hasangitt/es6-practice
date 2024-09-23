const getAge = (person) => person.age;
// single parameter
const student = {name: "hasan", age: 20}
const age = getAge(student);
// console.log(age);


const getFourth = (number) => number[4];
const numbers = getFourth([50,55,54,58,50,45])
// console.log(numbers)

// no parameter
const getPI = () => Math.PI;
// console.log(getPI())

// large arrow function
const largeArrow = (x, y, z) => {
    const doSum = x + y + z;
    const doMultiply = x * y * z;
    const doTotal = doSum + doMultiply;
    return doTotal;
}

const theNumbers = largeArrow(5, 2, 3);
console.log(theNumbers)