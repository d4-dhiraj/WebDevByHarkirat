import { program } from "commander";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";


const __filename = fileURLToPath(import.meta.url);

//import.meta.url current js file ka url deta  hai
//fileurltopath ki help se isko path me convert krte hai


const __dirname = path.dirname(__filename);

//file ka directory pata kiye
const filepath = path.join(__dirname, "todo.json");

//path.join ki help se dir and file ko jode jisse khi pr command de to run ho jaye


function getTodos() {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);

    //data ko json formet se obj me krega
}


function saveTodos(todos) {
    fs.writeFileSync(filepath, JSON.stringify(todos, null, 2));
}

program
    .name("Todo App")
    .description("CLI based todo app where we can add / remove todos")
    .version("0.8.0");

program.command("add")
    .description("Add todos using CLI")
    .argument("<todo>", "Todo to add")
    .action((todo) => {
        let todos = getTodos();

        const newTodo = {
            id: Date.now(),
            title: todo,
            completed: false

        }
        todos.push(newTodo);
        saveTodos(todos);
        console.log("Todo added:", todo);
    })


//show todo
program
    .command("show")
    .description("To show all the todo list")

    .action(() => {
        let todos = getTodos();
        if (todos.length === 0) {
            console.log("No todos found!");
            return;
        }
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
    })

//delete todo
program.command("delete")
    .description("Remove the todo element")
    .argument("<index>", "Index of todoo to delete")
    .action((id) => {
        let todos = getTodos();
        const updatedTodos = todos.filter(
            (todo) => todo.id !== Number(id)
        );

        if (updatedTodos.length === todos.length) {
            console.log("Todo not found!");
            return;
        }

        saveTodos(updatedTodos);
        console.log("deleted successfully");
    });

//complete

program.command("complete")
    .description("Mark a todo as completed")
    .argument("<id>", "Id of todo")
    .action((id) => {
        const todos = getTodos();
        const todo = todos.find((todo) => todo.id === Number(id));
        if (!todo) {
            console.log("Todo not found!");
            return;
        }
        todo.completed = true;

        saveTodos(todos);

        console.log("Todo completed:", todo.title);
    })



program.parse();