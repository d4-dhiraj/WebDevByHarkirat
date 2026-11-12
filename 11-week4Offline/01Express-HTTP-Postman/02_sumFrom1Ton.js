const express = require("express");
const app = express();


function sumFrom1toN(n) {
    let N = Number(n);
    ans = N * (N + 1) / 2;
    // console.log(N, ans);
    return ans;

}
// console.log(sumFrom1toN(5));
/**
 * * Query Parameters: It is a way to send data to the server as key-value pairs. It is appended to the URL after a question mark (?).
 * Example: http://localhost:3000/?n=5
 * If you want to add multiple query parameters, you can separate them with an ampersand (&).
 * Example: http://localhost:3000/?a=5&b=10&c=15
  * Here a, b, and c are query parameters and 5, 10, and 15 are their respective values.

 */

app.get("/", (req, res) => {
    let n = req.query.n;
    let sum = sumFrom1toN(n);
    res.send("<h1>Your sum is: " + sum + "</h1>")
})

app.listen(3000);