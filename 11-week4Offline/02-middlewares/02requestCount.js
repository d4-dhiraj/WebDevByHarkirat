const express = require("express");
const app = express();



let count = 0;
function counter(req, res, next) {
    count++;
    console.log(count);
    next();
}
app.use(counter);

app.get("/user", (req, res) => {
    res.status(200).json({
        name: "Dhiraj",
    })
})

app.post("/user", (req, res) => {
    // return a json response with message "created dummy user
    res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", (req, res) => {
    // return a json response with requestCount
    res.status(200).json({ count });
});

app.listen(3000);