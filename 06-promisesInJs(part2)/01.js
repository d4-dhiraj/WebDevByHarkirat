function mysetTimeout(ms) {
    return new Promise((res) => {
        setTimeout(res, ms);
    })
}
// function callback() {
//     console.log("Hiiiiiiiii......");
// }

// mysetTimeour(4000).then(callback);

//callback hell

/*Q- write code that logs hi after 1 sec logs hello 3 sec after 1 logs hello there 5 sec after 2 */

//normal approach
// setTimeout(() => {
//     console.log("Hi");
//     setTimeout(() => {
//         console.log("Hello");
//         setTimeout(() => {
//             console.log("Hello there");
//         }, 5000)
//     }, 3000)
// }, 1000)


//promisified chaining
// mysetTimeout(1000).then(() => {
//     console.log("Hi");
//     return mysetTimeout(3000).then(() => {
//         console.log("Hello");
//         return mysetTimeout(5000).then(() => {
//             console.log("Hello There");
//         })
//     })
// })

mysetTimeout(1000).then(() => {
    console.log("Hi");
    return mysetTimeout(3000);
}).then(() => {
    console.log("Hello");
    return mysetTimeout(5000);
}).then(() => {
    console.log("Hi, There");
})


//async await syntax
