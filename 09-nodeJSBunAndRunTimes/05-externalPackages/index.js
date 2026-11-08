/**
 * packages that we have to install using npm is known as external packages
 * using command
 * npm install packageName
 * 
 */

import chalk from "chalk";

console.log(chalk);
console.log(chalk.blue('Hello world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message'));


//import express module

import express from 'express';
console.log(express);