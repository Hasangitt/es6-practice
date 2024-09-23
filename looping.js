// for of ** use in array or string not in object

const numbers = [10, 15, 5, 8, 10]

// for(const num of numbers){
//     console.log(num);
// }

// const name = 'my name is hasan';

// for(const nam of name){
//     console.log(nam)
// }

// for in ** use in object
const phone ={
    name: 'redmi',
    color: 'balck',
    price: 12000,
}

for(const key in phone){
    const value = phone[key]
    console.log(key, value)
}