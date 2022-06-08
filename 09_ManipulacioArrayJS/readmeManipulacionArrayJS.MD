# Curso de Manipulación de Arrays en JavaScript

## Introducción

### Tu AS bajo la manga

## Fundamentos del manejo de arrays

### ForEach

### Mutable o Inmutable

### Map

Lo más sencillo:

¿Qué hace el .map()? TRANSFORMAR.

.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.
.
Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.
.
Código de la clase:

```javascript
const products = [
            { title: 'Burger', price: 121 },
            { title: 'Pizza', price: 202 },
        ];
        const app = document.getElementById('app');
        const list = products.map(product => {
            return `<li>${product.title} - ${product.price}</li>`;
        })

        app.innerHTML = list.join(''
```

El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

```javascript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected "Fire,Air,Water"

console.log(elements.join(''));
// expected  "FireAirWater"

console.log(elements.join('-'));
// expected "Fire-Air-Water"
```

### Desafio: Todos los elementos por dos

