//assignment 1
function sum(a, b) {
    return a + b;
}

sum(5, 10); // 15
sum("5", "10"); // "510" - string concatenation

//assignment 2
function canVote(name, age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

console.log(canVote("Alice", 20)); // true
console.log(canVote("Bob", 17)); // false