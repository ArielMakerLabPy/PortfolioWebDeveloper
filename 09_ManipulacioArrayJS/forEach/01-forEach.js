const letters = ['a', 'b', 'c'];
//Crear un for para recorrer el array
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log('for', element);
}

//Crear un forEach para recorrer el array
letters.forEach(item => console.log('foreach', item));