function sum(a, b) {
    return a + b;
}
function diff(a, b) {
    return a - b;
}
function prod(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

console.log(sum(1, 2));

//functional argument
//passing a function to another function as an argument

function doOperation(a, b, op) {
    return op(a, b);
}

console.log(doOperation(4, 5, sum))



const fs = require("fs");
function print(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }

}
//ASYNCHRONOUS
fs.readFile("hi.txt", "utf-8", print);

fs.readFile("user.txt", "utf-8", print);


//setTimeout
// used to call function after some time
function timeout() {
    console.log("Hi there!");
}

setTimeout(timeout, 1000);
console.log("Done..");
