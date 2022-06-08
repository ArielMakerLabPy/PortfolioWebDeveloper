const letters = ['a', 'b', 'c'];

// const newArray = [];
// for (let index = 0; index < letters.length; index++){
//     const elemento = letters[index];
//     newArray.push(elemento + '++');
// }
const newArray = letters.map(item => item + '++');
console.log('original', letters);
console.log('nuevo', newArray);
