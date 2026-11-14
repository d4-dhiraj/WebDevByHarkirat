/*
Create an HTTP Server
It should have 4 routes

1. http://localhost:3000/sum?a=1&b=2
2. http://localhost:3000/subtract?a=1&b=2
3. http://localhost:3000/multiply?a=1&b=2
4. http://localhost:3000/divide?a=1&b=2

Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)
*/



const express = require("express");
const app = express();

// app.get("/multiply", (req, res) => {
//     let a = req.query.a;
//     let b = req.query.b;
//     let c = a * b;
//     res.send(`${a} * ${b} = ${c}`);
// })

// app.get("/add", (req, res) => {
//     let a = Number(req.query.a);
//     let b = Number(req.query.b);
//     let c = a + b;
//     res.send(`${a} + ${b} = ${c}`);
// })

// app.get("/divide", (req, res) => {
//     let a = req.query.a;
//     let b = req.query.b;
//     let c = a / b;
//     res.send(`${a} / ${b} = ${c}`);
// })

// app.get("/subtract", (req, res) => {
//     let a = req.query.a;
//     let b = req.query.b;
//     let c = a - b;
//     res.send(`${a} - ${b} = ${c}`);
// })


// we can also use parseInt instead of Number like this


app.get("/add", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});


app.listen(3000);