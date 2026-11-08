// import { program } from "commander";
// import { error } from "console";
// import fs from "fs";

// program
//     .argument("<string>");

// program.parse();

// let filePath = program.args[0];

// let str = "";
// fs.readFile(filePath, "utf-8", (error, data) => {
//     if (error) {
//         console.log("Error reading file:", error.message);
//         return;
//     }
//     console.log(data.length)
// })



import fs from "fs";
import { program } from "commander";

// const program = new Command();

program
    .name("counter")
    .description("CLI to do file based tasks")
    .version("0.8.0");
program
    .command("count")
    .description("Count the no of lines in a file")
    .argument("<file>", "File to count")
    .action((file) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                const words = data.split(" ").length;
                console.log(`You have ${words} words in the file`);
            }
        });
    });

program.parse();