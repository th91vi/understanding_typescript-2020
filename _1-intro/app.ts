let userInput: unknown;
let userName: string;

userInput: 5;
userInput = 'Max';
// userName = userInput; // error TS2322: Type 'unknown' is not assignable to type 'string'.
if (typeof userInput === 'string') {
    userName = userInput;
}

console.log(userName);