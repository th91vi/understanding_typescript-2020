"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase}! My name is ${this.name}`);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new Person();
// user1.name = 'otto';
user1.greet('Hello');
console.log(user1);
