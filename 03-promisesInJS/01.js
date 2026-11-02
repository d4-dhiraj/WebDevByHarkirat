let user = {
    name: "dhiraj",
    age: 19,
    username: "d4-dhiraj"
}



//In js classes are used to define a blueprint for creating an object(these obj are diff from the obj data type)

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area() {
        const area = this.width * this.height;
        return area;
    }
    paint() {
        console.log("Painting with color " + this.color);
    }
}
let rect = new Rectangle(2, 4, "Red");
console.log(rect.area());


//some more classes

//date
const now = new Date();
console.log(now.toDateString());


//maps
const map = new Map();
map.set('name', 'Alice');
map.set('age', 19);

console.log(map.get('name'));