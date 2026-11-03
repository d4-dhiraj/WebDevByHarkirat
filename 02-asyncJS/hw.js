/*try to create a promosified version of-
1. setTimeout
2. fetch
3. fs.readFile
*/

// 1 
function callback() {
    console.log("hi");
}
// setTimeout(callback, 2000);

function mysetTimeout(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

mysetTimeout(2000).then(callback);

// 2

