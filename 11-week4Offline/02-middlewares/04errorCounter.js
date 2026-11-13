/*
You have been given an express server which has a few endpoints.

Your task is to
1. Ensure that if there is ever an exception, the end user sees a status code of 404
2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
*/

// import express module using require function and store it in express variable
const express = require("express");
const app = express();

let errorCount = 0;

app.get("/", (req, res) => {
    throw new Error("Something went wrong!!");
});

app.use((err, req, res, next) => {
    errorCount++;
    res.status(404).send("Something went wrong!");
});

app.get("/error", (req, res) => {
    res.send(errorCount);
})
app.listen(3000);