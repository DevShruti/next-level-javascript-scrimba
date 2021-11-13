// animal.js

export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    // first example of extends with super
    
    export class Cat extends Animal {
        constructor(type, legs, tail) {
            super(type, legs);
            this.tail = tail;
        }

        // second example with overwriting makeNosie function
    export class Cat extends Animal {
            makeNoise(sound = "meow") {
                console.log(sound);
            }    


}

// index.js

import { Animal } from './animal.js';

let cat = new Animal('Cat', 4);

console.log(cat.legs)

cat.makeNoise('Meow');

// 4

console.log(cat.metaData)

// Type: Cat, Legs: 4

// overwriting makenoise()

import { Animal, Cat } from './animal.js';

let cat = new Cat('Cat', 4);

cat.makeNoise();

// meow

