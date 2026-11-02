//promise class

//promise in js is an object that represent the eventual completion (or failure) of an asynchronous operation and its resulting value

//more effeciently then traditional



function callback() {
    console.log("Hi, There!");
}

//callback version 
setTimeout(callback, 3000)

//promised version

function waitForJs(resolve) {
    setTimeout(resolve, 3000);
}


function setTimeoutPromisified(ms) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    return new Promise(waitForJs);
}

let p = setTimeoutPromisified(3000).then(callback); //syntactially cleaner

//obj of promise class
console.log(p);

//create a promisified verison of fs.readfilem fs.writefile, cleanFile


// const fs = require("fs");

// fs.readFile("a.txt", "utf-8").then(() => {
//     console.log("Read Sucssefully");
// })