import express from "express";
import registerUserController from "../controllers/user_signiup.js";
import userLoginController from "../controllers/user_login.js";

import getUserController from "../controllers/getUserController.js";
const userRouter = express.Router();

//Users routes

// Signup Route
userRouter.post('/signup', registerUserController);

// Login Route
userRouter.post('/login', userLoginController)

//get user 

userRouter.get('/:id', getUserController)
export default userRouter; 
