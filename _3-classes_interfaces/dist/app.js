"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 30,
    greet(phrase) {
        console.log(`${phrase}! My name is ${this.name}`);
    }
};
user1.greet('Hello');
