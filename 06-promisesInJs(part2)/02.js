//async await

/* aysnc await syntax in js provides a way to write asynchronous code that looks and behave like synchronous code */

const fs = require("fs");
const path = require("path");

function mysetTimeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function solve() {
    await mysetTimeout(1000);
    console.log("Hi");
    await mysetTimeout(3000);
    console.log("Hello");
    await mysetTimeout(5000);
    console.log("Hi there..");
}

// solve();
// console.log("After Call");
//after call hi hello hi there


function readFileAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, "hi.txt"), "utf-8", (err, data) => {
            if (err) {
                reject("File Not found");
            } else {
                resolve(data);
            }

        })
    })
}



readFileAsync()
    .then((res) => {
        console.log(res);
        console.log("Function read");
    })
    .catch((e) => {
        console.log(e);
    }) 