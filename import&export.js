// in example.js

export const data = [1,2,3];


// in index.js

import { data } from './example.js';

console.log(data)

// [1,2,3]

import { data } from './example.js';
let updatedData = data;

updatedData.push(5)
console.log(updatedData);

// [1, 2, 3, 5]