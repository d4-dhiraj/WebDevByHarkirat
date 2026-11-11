import express from "express";
import fs, { readFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { json } from "stream/consumers";

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "data.json");

let todos;

app.use(express.json());


//get todos list
function getTodos() {
    let data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
}

function saveTodo(todos) {
    fs.writeFileSync(filepath, JSON.stringify(todos, null, 2));
}
app.get("/", (req, res) => {

    let todos = getTodos();
    res.send(todos);
})


app.post("/", (req, res) => {
    try {
        let todos = getTodos();
        let todo = {
            id: Date.now(),
            title: req.body.title,
            completed: false
        }
        todos.push(todo);
        saveTodo(todos);
        res.send("Success");
    } catch {
        res.send("Error");
    }
})

app.delete("/", (req, res) => {
    try {

        let todos = getTodos();
        todos = todos.filter((todo) => req.body.id != todo.id);
        saveTodo(todos);
        res.send("success");
    } catch {
        res.send("Error");
    }
})

app.put("/", (req, res) => {
    let todos = getTodos();
    let todo = todos.find((todo) => todo.id == req.body.id);
    if (!todo) {
        return res.status(404).send("Todo not found");
    }
    todo.title = req.body.title;
    saveTodo(todos);
    res.send("Todo Updated succeessfully");

})

//mark as complete
app.post("/:id/complete", (req, res) => {
    const id = Number(req.params.id);
    let todos = getTodos();
    let todo = todos.find((todo) => todo.id === id);

    if (!todo) {
        return res.status(404).send("Todo not found");
    }

    todo.completed = true;
    saveTodo(todos);
    res.json({
        message: "Status updated successfully",
        todo: todo
    });

});
app.listen(3000);
