import { pool } from "./database_config.js";
//create a todo

export async function createTodo(user_id, action, discription, action_date) {
  let [result] = await pool.query(`
insert into Todos 
(user_id,action,
discription,
action_date)

values (?,?,?,?)
`, [user_id, action, discription, action_date])

  if (result.affectedRows > 0) {
    return {
      status: 'success',
      affectedRows: result.affectedRows,
      msg: 'created successfuly'
    }
  } else {
    return {
      status: 'failed',

    }
  }
}

// get all todos by the user_id

export async function getTodosByUserId(user_id) {
  let [result] = await pool.query(`
select * from Todos 
where user_id = ? 
`, [user_id])

  return result;
}

// get todos by status/ spelled as ststus

export async function getTodosByStatus(status, user_id) {
  let [result] = await pool.query(`
select * from Todos
where user_id = ? AND ststus = ?
`, [user_id, status]);

  return result
}

//delete a todo by todo_id

export async function deleteTodoById(todo_id) {
  let [result] = await pool.query(`
delete from Todos
where todo_id = ? 
`, [todo_id]);


  if (result.affectedRows > 0) {
    return {
      status: 'success',
      affectedRows: result.affectedRows,
      msg: 'deleted'
    }
  } else {
    return {
      status: 'failed',
      msg: 'either the item does not exist or something went wrong'
    };
  };
}


// delete todo by status 

export async function clearTodoByStatus(newStatus, status, user_id) {
  let [result] = await pool.query(`
update Todos
set ststus = ?
where ststus = ? AND user_id = ?
`, [newStatus, status, user_id]);


  if (result.affectedRows > 0) {
    return {
      status: 'success',
      affectedRows: result.affectedRows,
      msg: 'deleted'
    }
  } else {
    return {
      status: 'failed',
      msg: 'either the item does not exist or something went wrong'
    };
  };
}

// edit a todo
export async function editTodo(todo_id, action, discription) {
  let [result] = await pool.query(`
update Todos
set action = ?, discription = ?
where todo_id = ?
`, [action, discription, todo_id]);

  return {
    status: result.info,
    changed: result.changedRows,
  };
}
