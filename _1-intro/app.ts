function add(n1:number, n2:number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12)); // Result: 17
console.log(printResult(add(5, 12))); // undefined

// let combineValues: Function; // declara interface Function
let combineValues: (a: number, b:number) => number; // declara interface Function

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8,8));

// let someValue: undefined;