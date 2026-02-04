import add from './utils.js'; // for default export
import { multiply, divide } from './utils.js'; // for named exports

const output = add(2, 3);
console.log("Output:", output);

const product = multiply(4, 5);
console.log("Product:", product);

const quotient = divide(10, 2);
console.log("Quotient:", quotient);