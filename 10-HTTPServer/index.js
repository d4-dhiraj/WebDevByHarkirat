// import express module using require function and store it in express variable

import express from "express";

//create an express app using express function
const app = express();


// app.use(express.raw({ type: "application/json" }));
app.use(express.json());
// console.log(express);
// console.log(app);

let todos = [];


// add a new todo to the todos array in memory
app.post("/", (req, res) => {
    todos.push({
        title: req.body.title,
        id: req.body.id
    });
    console.log(req.body)
    res.send("Done");
});


// create a route handler for DELETE request on the root URL 
app.delete("/", (req, res) => {
    todos = todos.pop();
    res.send("Success");
})

// create a route handler for GET request on the root URL


app.get("/", function (req, res) {
    // send the todos array as a response to the client
    res.send(todos);
});

/**

//create a route handler for get req on the root url

app.get("/", (req, res) => {
    //send a responnse to the client
    // res.send("Hello World");
    res.send("<h1>Hello world</h1>")
});

// create a route handler for POST request on the root URL
app.post("/", (req, res) => {
    res.send("Hello World from the POSt req");
});



 * 
 */

// start the server on port 3000
app.listen(3000);
