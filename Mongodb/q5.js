db.employess.updateOne({email:"cathy@gmail.com"},
    {$set:{salary:3000}}
)

db.employess.updateMany(
    {},
    {$set:{points:1}}
)
db.employess.updateMany(
    {deparment:"IT"},
    {$inc:{points:1}}
)
db.employess.updateMany(
    {deparment:"IT"},
    {$inc:{points:3}}
)
db.employess.updateMany(
    {deparment:"IT"},
    {$inc:{points:-1}}//decrement
)

db.employess.updateOne(
    {email:"krish@gmail.com"},
    {$set:{name:"Krish", department:"HR",salary:2700}},
    {upsert:true}//addition of update and insert
)
db.employess.deleteOne(
    {email:"krish@gmail.com"}
)

db.employess.deleteMany({deparment:"Admin"})


db.employess.find().sort({name:1})

db.employess.find().sort({name:-1})

db.employess.find().sort({salary:-1}).limit(3)
db.employess.find({},{_id:0,Empname:"$name"})//only for display purpose

db.employess.updateMany(
    {},
    {$rename:{points:"score"}}
);

db.employess.updateMany(
    {},
    {$unset:{score:""}}//to remove the operator
);

db.employess.find({},{_id:0,name:1,location:1})

db.employess.updateMany(
    {},
    {$push:{points:5}}
)

db.employess.updateMany(
    {deparment:"IT"},
    {$push:{points:7}}
)

db.employess.updateMany(
    {},
    {$pull:{points:{$gt:3}}}

)

db.employess.updateMany(
    {},
    {$addToSet:{location:'LA'}}//if present it will not add again
)

db.employess.updateMany(
    {},
    {$pop:{location: -1}}
)



