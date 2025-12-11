import { getTodosByStatus } from '../models/todos.js'

export default async function getAllTodosByStatus(req, res) {
  let { status, user_id } = req.query;
  try {
    let todo = await getTodosByStatus(status, user_id);
    console.log(todo);
    res.send(todo)

  } catch (err) {
    res.send({ err })
  }
}
