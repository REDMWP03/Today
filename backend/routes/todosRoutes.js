import express from "express";
import getAllTodosByStatus from "../controllers/getTodosByStatus.js";
import getAllTodos from "../controllers/getAllTodos.js";
import createTodos from "../controllers/createTodos.js";
import editTodos from "../controllers/editTodos.js";
import clearTodos from "../controllers/clearTodos.js";
const todosRoutes = express.Router();


//get by status
todosRoutes.get('/', getAllTodosByStatus)
//get all todos
todosRoutes.get('/:user_id', getAllTodos)


//create todos
todosRoutes.post('/', createTodos)

//edit a todo

todosRoutes.put('/', editTodos)
//clear todos

todosRoutes.put('/clear', clearTodos)





export default todosRoutes;
