const glass ={
    name: 'glass',
    color: 'orange',
    price: 20,
    isClean: true
}
console.log(glass);
// get object.keys
const keys = Object.keys(glass)
console.log(keys)
// get object.values
const value = Object.values(glass)
console.log(value)
// get array of array
const pair = Object.entries(glass)
console.log(pair)
// for delete any object
delete glass.isClean;
console.log(glass)
// freeze(for not adding)
Object.freeze(glass);
glass.country = 'bangladesh'
console.log(glass)