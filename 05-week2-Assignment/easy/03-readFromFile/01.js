const fs = require("fs");


// let content = fs.readFileSync("a.txt", "utf-8");
// console.log(content);


fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("File Not found");
        return;
    }
    console.log(data);
})