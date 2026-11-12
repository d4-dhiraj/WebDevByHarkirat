/*
Your logic is like a doctor
Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)

GET - User can check how many kidneys they have and their health
POST - User can add a new kidney
PUT - User can replace a kidney, make it healthy
DELETE - User can remove a kidney

1. What should happen if they try to delete when there are no kidneys?
2. What should happen if they try to make a kidney healthy when all are already healthy?
*/


const express = require("express");
const app = express();

app.use(express.json());

let user = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false,
            },
        ],
    },
];

/**
 * Create a route handler for GET request
 * URL: http://localhost:3000/
 *
 *
 */

app.get("/", (req, res) => {
    //get the kidneys of first user in the array
    const userKidneys = user[0].kidneys;
    const noOfKidneys = userKidneys.length;

    let noOfHealthyKidney = userKidneys.filter((kidneys) => kidneys.healthy).length;
    let noOfUnhealthyKidney = noOfKidneys - noOfHealthyKidney;

    res.json({
        noOfKidneys,
        noOfHealthyKidney,
        noOfUnhealthyKidney,
    })

})

/**
 * Create a route handler for POST request
 * URL: http://localhost:3000/
 * 
 *  Request Body - Send JSON data in the request body to add a new kidney to the user 
    {
       "isHealthy": true
    }

 * Add a new kidney for the user with the health status provided in the request body
 */
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    //add a kidney to first user in the array

    user[0].kidneys.push({
        healthy: isHealthy,
    });

    res.json({
        message: "Kidney Added Successfully!",
    });
});

/**
 * Create a route handler for PUT request
 * URL: http://localhost:3000/
 *
 * Update all the unhealthy kidney to healthy kidney, if there are no unhealthy kidney then return a 411 status code
 */

function isThereUnhealthyKidney() {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (user[0].kidneys[i].healthy === false) return true;
    }
    return false;
}

app.put("/", (req, res) => {
    if (isThereUnhealthyKidney()) {
        for (let i = 0; i < user[0].kidneys.length; i++) {
            users[0].kidneys.healthy = true;
        }

        res.json({
            message: "Kidney Replaced Successfully!",
        });
    } else {
        res.status(400).json({
            message: "You have no unhealthy kidney to replace",
        });
    }
})

/**
 * Create a route handler for DELETE request
 * URL: http://localhost:3000/
 *
 * Remove all the unhealthy kidney, if there are no unhealthy kidney then return a 411 status code
 */


app.delete("/", (req, res) => {
    if (isThereUnhealthyKidney()) {
        const newKidney = [];
        for (let i = 0; i < user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidney.push({
                    healthy: true,
                })
            }
        }

        user[0].kidneys = newKidney;

        res.json({
            message: "Unhealthy Kidney Removed Successfully",
        })
    } else {
        res.status(400).json({
            message: "You have no unhealthy kidney to replace",
        });
    }
})

app.listen(3000);