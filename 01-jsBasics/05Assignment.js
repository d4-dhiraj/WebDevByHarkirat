function greetUser(user) {
    console.log("Hello " + user.name + " your age is " + user.age);
}

let user = {
    name: "Dhiraj",
    age: 19,
    gender: "male",
}
greetUser(user);