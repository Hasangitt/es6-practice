// // function declaration
// function add5(shonka1, shonka2){
//     const result3 = shonka1 + shonka2;
//     return result3;
// }
// // ************
// function add5(shonka1, shonka2){
//     return shonka1 + shonka2;
// }

// const jogfol = add5(5, 5);
// console.log(jogfol)

// // function expression

// const newTotal = function(a, b){
//     return a + b;
// }

// // arrow function

// const add6 = (a, b) => a + b;
// const add7 = (number1, number2) => number1 * number2;

// const no = add6(5, 8)
// console.log(no)
// const multiply = add7(7, 7);
// console.log(multiply)

// const multiplyIt = (no1, no2, no3) => no1 * no2 * no3;
// const hereNum = multiplyIt(5, 5, 5);
// console.log(hereNum)


// const myGoal = `i am a web developer.
// i love to code
// i love to eat biriyani
// `
// console.log(myGoal)

// const getEvenLengthNames = (friends) => {
//     let evenLengthNames = [];
    
//     friends.forEach(friend => {
//       if (friend.length % 2 === 0) {
//         evenLengthNames.push(friend);
//       }
//     });
    
//     return evenLengthNames;
//   };
  
//   // Example usage:
//   const friendsArray = ['Alicee', 'Bob', 'Charlie', 'David', 'Eve'];
//   const result = getEvenLengthNames(friendsArray);
//   console.log(result); // Output: ['David', 'Eve']
  
// // write an arrow funciton where it do following: 1) it will take an array where the  array elements wiil be the name of my friends,
//  2) check if  the length of each element is even, push elements with even length to a new array and return the result

//     const getEvenLengthNames = (friends) =>{
//         let evenLengthNames = [];
//         friends.forEach(friend =>{
//             if(friend.length % 2 ===0)
//                 evenLengthNames.push(friend);
//         })
//         return evenLengthNames;
//     }



//   const arryNames =['hasanali', 'mdshafi', 'mdridwan', 'pulakdey'];
//   const result= getEvenLengthNames(arryNames);
//   console.log(result)

const doMath = (number5, number6, number7) => {
    const square1 = number5 * 2;
    const square2 = number6 * 2;
    const square3 = number7 * 2;
    const sum = square1 + square2 + square3;
    const avarage = sum / doMath.length;
    return avarage
   
}

const result = doMath(10, 20, 2);
console.log(result)