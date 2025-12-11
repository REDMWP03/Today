import { pool } from "./database_config.js";
import bcrypt from "bcryptjs";

//register User
export async function registerUser(user_name, password, signup_date) {
  let hashedPassword = await bcrypt.hash(password, 13);

  let [user] = await pool.query(`

insert into Users 
(user_name,password,signup_date)
values(?,?,?);

`, [user_name, hashedPassword, signup_date]);

  if (user.insertId > 0) {

    return {
      status: 'success',
      insertedId: user.insertId,

    };
  } else {
    return;
  }
}


// get a user by id

export async function getUserById(user_id) {
  let [user] = await pool.query(`
select u.user_id, 
       user_name,
       signup_date, 
       user_avatar, 
       theme
from Users u
     join Settings s
     using (user_id)
where u.user_id = ?

`, [user_id])

  if (user[0]) {
    return user[0];
  } else {
    return {
      status: false,
      msg: 'user not found'
    }
  }
}

//check user and return user

export async function checkForUser(user_name) {
  let [user] = await pool.query(`
select user_name,
       password
from Users
where user_name = ?
`, [user_name]);
  if (user[0]) {
    return user[0];
  } else {
    return {
      status: false,
      msg: 'user not found'
    };
  }
}

