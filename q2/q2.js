

let x = 5;

x = (x++, x);

console.log(x);
console.log(`as mentioned in txt file its evaluating all values but returing the last
 (right most) value which is  ${x}`);
x = (3, 4);

console.log(`printing the last value of x = ${x}`);

//we can also print multiple values using comma operand
let a = 3;
let b = 4
let c = 5;
console.log("all values  a, b, c are " + a, b, c);
