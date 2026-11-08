/**
 * pakages that provided by nodejs is known as internal package
 * we have not to install it 
 * we have to just require/import
 */

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "a.txt");
fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }

})