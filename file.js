// import add from './utils.js'; // for default export
// import { multiply, divide } from './utils.js'; // for named exports

// const output = add(2, 3);
// console.log("Output:", output);

// const product = multiply(4, 5);
// console.log("Product:", product);

// const quotient = divide(10, 2);
// console.log("Quotient:", quotient);


import fs from'fs';
import path from'path';

const cpPath = path.join(  
    "functions",
    "SampleFolder",
    "..",
    "function.js"
);

console.log("crossPlatform path name:", cpPath);

fs.readFile(cpPath, 'utf8', (err, data) => {
    console.log("err:" ,err);
    console.log("data:", data);
});   
    
