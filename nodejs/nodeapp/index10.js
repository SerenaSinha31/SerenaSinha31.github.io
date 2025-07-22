// const stName = "John"
// console.log(stName);

// const stName1 = process.argv[2] || "John"
// const stName2 = process.argv[2] || "Cathy"
// console.log(`Hello ${stName1} and ${stName2}`)


import express from "express";
const app = express();
const port = process.argv[2] || 8080
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});