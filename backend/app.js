import express from "express";

import registerUserController from "./controllers/user_signiup.js";
import userLoginController from "./controllers/user_login.js";

const app = express();

app.use(express.json())


//Users routes

// Signup Route
app.post('/users/signup', registerUserController);

// Login Route
app.post('/users/login', userLoginController)


app.listen(8080, () => {
  console.log('runing')
})
