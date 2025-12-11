import { editTodo } from "../models/todos.js";

export default async function editTodos(req, res) {
  let { todo_id, action, discription } = req.body;


  let todo = await editTodo(todo_id, action, discription)

  res.send(todo);
}
