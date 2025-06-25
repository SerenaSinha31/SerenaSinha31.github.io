//curd operations

db.employess.insertOne({
 name:"John Smith",
 email:"john@gmail.com",
 deparment:"IT",
 salary:1456,
 location:["FL","OH"],
 date:Date()
})
db.employess.insertOne(
    {name:"Vansh",age:21},
    {name:"Rohan",age:22},

);

db.employess.insertMany([
    {
     name:"William Smith",
 email:"john@gmail.com",
 deparment:"IT",
 salary:1456,
 location:["FL","OH"],
 date:Date(),
    },
    {
        name:"Cathy G",
        email:"cathy@gmail.com",
        department:"It",
        salary: 5000,
        location:["FG","OL"],
        date:Date(),
    }
]);


// show collections
db.employess.find()

//mongo queries
db.users.find({},{name:1})//1 is equivalent to true

db.users.find({},{_id:0,name:1})

db.users.find({},{_id:0,age:1})

db.users.find({},{_id:0,name:1,age:1})

//delete the table
db.users.drop()