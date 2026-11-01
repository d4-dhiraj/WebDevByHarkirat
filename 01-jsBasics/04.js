//if-else

let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//loops

let users = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < users.length; i++) {
    console.log("User:", users[i]);
}


//objects

//objects are used to store key-value pairs
let user1 = {
    name: "Dhiraj",
    age: 19,
}
console.log("User1:", user1.name, user1.age);
console.log("User1:", user1["name"], user1["age"]);


//array of object

let arr = ["Dhiraj", 19, {
    name: "Dhiraj",
    age: 19,
    languages: ["cpp", "c", "js", "python", {
        name: "MERN",
        teacher: "Apna College"
    }]
}]
console.log(arr[2]);
console.log(arr[2].languages[4].name);