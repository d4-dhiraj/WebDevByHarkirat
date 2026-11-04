const fs = require("fs");

fs.writeFile("a.txt", "I am Dhiraj", (err, data) => {
    if (err) {
        console.log(err);
        return;
    } console.log("File written Successfully");
})