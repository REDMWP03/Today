import express from "express";

import userRouter from "./routes/userRoutes.js";

import todosRoutes from './routes/todosRoutes.js'
const app = express();

app.use(express.json())


//Users routes

app.use('/users', userRouter);

//todos routes

app.use('/todos', todosRoutes);

//serve
app.listen(8080, () => {
  console.log('runing')
})
