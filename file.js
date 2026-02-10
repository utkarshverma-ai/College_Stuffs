// import add from './utils.js'; // for default export
// import { multiply, divide } from './utils.js'; // for named exports

// const output = add(2, 3);
// console.log("Output:", output);

// const product = multiply(4, 5);
// console.log("Product:", product);

// const quotient = divide(10, 2);
// console.log("Quotient:", quotient);


// import os from 'os';

// const arch = os.arch();
// console.log("arch:",arch);
// const platform = os.platform();
// console.log("platform:",platform);

// const freeMemory = os.freemem()/1024/1024/1024;
// console.log("Free Memory (GB):", freeMemory);

// import { multi } from './utils.js';
// const {add, multi} = require('./utils.js');
// const multi = require('./utils.js'); 

// import { add, multi } from './utils.js';

// const addition = add(5, 7);
// console.log("addition", addition);

// const multiplication = multi(5, 7);
// console.log("multiplication", multiplication);

// let obj = {
//     key: "add",
// };

const a = () => {
    b();
    console.log("🚀 ~ a ~ a:");
};

const b = () => {
    console.log("🚀 ~ b ~ b:");
    setTimeout(() => {
        console.log("🚀 ~ b ~ timer1:");
    }, 10000);
    setTimeout(() => {
        console.log("🚀 ~ b ~ timer2:");
    }, 0);

    Promise.resolve().then(() => {
        console.log("🚀 ~ Promise Portion:");
    });
};

a();
console.log("🚀 ~ final:");


// Empty

// a is pushed to the call stack
// b is pushed to the call stack
// b is popped from the call stack and executed
// a is popped from the call stack and executed


const sample = (callback)=>{
    callback("Sample Content","Demo");
};
const add = (a,b)=> {
    console.log("🚀 ~data:",a+b);
};
sample(add);
const login = async () =>{
    await checkHeader();
    await checkPassword();
};

