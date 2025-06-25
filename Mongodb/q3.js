db.employess.find()
db.employess.find().skip(1)
db.employess,find().skip(1).limit(1)
db.employess.find({deparment:"IT"})
db.employess.find({deparment:"IT"},{_id:0,name:1})
db.employess.find({deparment:"IT"},{_id:0,name:1,salary:1})

db.employess.find(
    {deparment:{$eq:"IT"}},
    {_id:0,name:1,salary:1}

)
db.employess.find(
    {salary:{$gte:3000}},
    {_id:0,name:1,salary:1}

)
db.employess.find(
    
    {salary:{$lte:3000},deparment:"IT"},
    {_id:0,name:1,salary:1}

)
db.employess.find(
    
    {$or:[{salary:{$lte:3000}},{deparment:"IT"}]},
    {_id:0,name:1,salary:1}

)
db.employess.find(
    
    {$or:[{},{}]},



)

db.employess.find({department:{$eq:"IT"}})
db.employess.find({department:{$nq:"IT"}})

