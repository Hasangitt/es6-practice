// get max  various types

const math = Math.max(50,56,47,44,59,56,220);
// console.log(math);


const numbers = [10, 15 , 14, 58, 59, 90, 58, 56 ];
// console.log(...numbers)
const arrayMax = Math.max(...numbers);
// console.log(arrayMax)


const numbers2 = [50, 58, 54, 47, 90, 85, 120];
const arrayMax2=  Math.max(...numbers2);
// console.log(arrayMax2)


// use spread operators for copy

const friends = ['shafi', 'pulak', 'ridwan', 'morshed'];
const dosto = friends;
const bondhu = [...friends] //copy
console.log(dosto)
dosto.push('hasan')
console.log(bondhu)
console.log(friends)

const addExtra = [...friends, 'habu']
console.log(addExtra)
