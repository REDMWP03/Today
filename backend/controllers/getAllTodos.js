import { getTodosByUserId } from '../models/todos.js'

export default async function getAllTodos(req, res) {
  let { user_id } = req.params;

  try {
    let todos = await getTodosByUserId(user_id);
    console.log(todos);
    res.send(todos)
  } catch (err) {
    console.error(err)
  }
}
