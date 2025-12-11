import { clearTodoByStatus } from "../models/todos.js";

export default async function clearTodos(req, res) {
  let { newStatus, status, user_id } = req.body
  let todo = await clearTodoByStatus(newStatus, status, user_id);
  res.send(todo);
}
