db.employess.find({name:{$regex:"a"}})

db.employess.find({name:{$regex:"cathy"}})

db.employess.find({name:{$regex:"cathy",$options:"i"}})//to ignore the sensitivity

//all the name began with letter c
db.employess.find({name:{$regex:"^c",$options:"i"}})

db.employess.find({name:{$regex:"G$",$options:"i"}})