function sum(a, b) {
    return a + b;
}

let ans = sum(2, 3);
// console.log(ans);


function sumFromOne(n) {
    ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}
ans = sumFromOne(5);
// console.log(ans);

// I/O heavy operation
// reading or writing file from or to operating system
//eg- reading a file, starting a clock, http req


//generally require or imports used in upperside of code
const fs = require("fs");
const contents = fs.readFileSync("hi.txt", "utf-8"); //synchronously
console.log(contents);


//produces error
// const content2 = fs.readFile("user.txt", "utf-8"); //asynchronously
// console.log(content2);