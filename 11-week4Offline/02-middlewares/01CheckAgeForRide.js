const express = require("express");

const app = express();

// function isOldEnough(age) {
//     if (age < 15) {
//         return false;
//     }
//     return true;
// }

// //without middleware
// app.get("/ride1", (req, res) => {
// if (isOldEnough(req.query.age)) {
//     res.json({
//         msg: "You have successfully riden the ride 1",
//     })
// } else {
//     res.status(411).json({
//         msg: "Sorry You are not of age yet",
//     })
// }


// })

// app.get("/ride2", (req, res) => {
//     if (isOldEnough(req.query.age)) {
//         res.json({
//             msg: "You have successfully riden the ride 2",
//         })
//     } else {
//         res.status(411).json({
//             msg: "Sorry You are not of age yet",
//         })
//     }


// })





//same thing via middleware

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 15) {
        next();
    } else {
        res.status(411).json({
            msg: "Sorry You are not of age yet",
        })
    }
}
//if we want to do add any middleware to every route then we can use app.use at top
//app.use use routes pr trigger hoga jo uske niche ho upr vale pr nhi hoga
// app.use(isOldEnoughMiddleware);

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully riden the ride 1",
    })
})

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully riden the ride 2",
    })
})


app.listen(3000);