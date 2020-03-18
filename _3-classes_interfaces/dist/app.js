"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase}! My name is ${this.name}`);
    }
}
let user1;
user1 = new Person('Thiago');
user1.greet('Hello');
console.log(user1);
