import express from 'express'
const app = express();
app.listen(8080,()=>{
    console.log("Hello World");
});

app.get("/products",(req,res)=>{
    res.send("Product List");
});