import mysql from "mysql2";

const db_details = {
  host: 'localhost',
  user: 'root',
  password: 'red2003',
  database: 'today'
}

const pool = mysql.createPool(db_details).promise();

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

export async function deleteTodoByStatus(status, user_id) {
  let [result] = await pool.query(`
delete from Todos
where ststus = ? AND user_id = ?
`, [status, user_id]);


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

