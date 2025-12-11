import { createTodo } from '../models/todos.js'

export default async function(req, res) {
  let { user_id, action, discription, action_date } = req.body;
  let todo = await createTodo(user_id, action, discription, action_date)

  res.send(todo);
}
