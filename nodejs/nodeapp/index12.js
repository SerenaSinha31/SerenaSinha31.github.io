// get>localhost:8080/api/users/show
// post>localhost:8080/api/users/register
// post>localhost:8080/api/users/login

// get>localhost:8080/api/products/show
// delete>localhost:8080/api/products/1

// import express from 'express'
// import userRouter from './userRoute'
// import productRouter from './productRoute'
// const app = express();
// app.listen(8080,()=>{
//     console.log("Server started");
// });

// const userRouter = express.Router()
// const productRouter = express.Router()

// app.get('/api/users/show', (req, res) =>{
//     res.send("Show User");
// })
   
// app.post('/api/users/register',(req,res)=>{
//     res.send("User Registeration");
// })

// app.get('/api/users/login',(req,res)=>{
//     res.send("User Login");
// })

// app.get('/api/products/show',(req,res)=>{
//     res.send("Show Product");
// })

// app.delete('/api/products/:id',(req,res)=>{
//     res.send("Delete Product");
// })

// app.use("/api/users",userRouter)
// app.use("/api/products", productRouter)

// userRouter.get('/show',(req,res)=>{
//     res.send("Show User");
// })

// userRouter.post('/register',(req,res)=>{
//     res.send("User Registeration");
// })

import express from 'express';
import userRouter from './userRoute.js';
import productRouter from './productRoute.js';

const app = express();
app.listen(8080, () => {
    console.log("Server started");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);