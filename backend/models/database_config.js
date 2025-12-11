import mysql from "mysql2";

const db_details = {
  host: 'localhost',
  user: 'root',
  password: 'red2003',
  database: 'today'
}

export const pool = mysql.createPool(db_details).promise();
