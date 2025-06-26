//filter //projection(display field)
db.employess.find(
    {salary:{$gt:3000}},
    {name:1}
),limit(2).skip(1)



db.employess.find(
    {$or:[{salary:{$gt:3000}},{deparment:"IT"}]},
    {name:1}
)

//aggregration pipeline
db.employess.aggregate([
    {$match:{salary:{$gt:1000}}},
    {$project:{name:1,salary:1,location:1}},
    {$sort:{name: 1}},
    {$limit:1}
])




db.employess.aggregate([
     
    {$project:{_id:0,name:1,location:1}},
    {$unwind:"$location"}

  
])

db.employess.aggregate([
    {$project:{_id:0,EmpName:"$name"}}
])


db.employess.aggregate([
    {$project:{_id:0,name:1,salary:1,bonus:{$multiply:["$salary",2]}
}},
])

db.employess.aggregate([
    {$project:{name:0}},
])

db.employess.updateOne([
    {},
    {$addToSet:{salary:2000}}
])
//Group 
db.employess.aggregate([
    {$group:{_id:"$department",total:{$sum:"$salary"}}}
])


// create new collections names orders
db.orders.insertOne(
    {
        empId:ObjectId('685bb905ff2908e12f9f990b'),
        orderValue:1200
    }

)

db.orders.insertOne(
    {
        empId:ObjectId('685a8a72d10d25b7089f990a'),
        orderValue:1500
    }

)


db.orders.insertOne(
    {
        empId:ObjectId('685bb905ff2908e12f9f990a'),
        orderValue:1500
    }

)
db.orders.insertOne(
    {
        empId:ObjectId('685bb905ff2908e12f9f990b'),
        orderValue:1500
    }

)
db.orders.insertOne(
    {
        empId:ObjectId('685bc9c0e3d17c6cbc9f9912'),
        orderValue:1500
    }

)
db.orders.insertOne(
    {
        empId:ObjectId('685bc9c0e3d17c6cbc9f9913'),
        orderValue:1500
    }

)

db.employess.aggregate([
     {$match:{salary:{$gt:2000}}},
    {
        $lookup: {
            from: "orders",
            localField: "_id",     
            foreignField: "empId",
            as: "orders"
        },
    },
    {$unwind:"$orders"},
    {$project:{name:1,salary:1,"orders.orderValue":1}},
   
])

//Create new collections Countries and sho
db.empcountry.insertOne(
    {
        empId:ObjectId('685bb905ff2908e12f9f990a'),
        country:"India"
    }


)
db.empcountry.insertOne(
    {
        empId:ObjectId('685a8a72d10d25b7089f990a'),
        country:"USA"
    }

)


db.empcountry.insertOne(
    {
        empId:ObjectId('685bb905ff2908e12f9f990a'),
        country:"UK"
    }

)
db.empcountry.insertOne(
    {
        empId:ObjectId('685bb905ff2908e12f9f990b'),
        country:"IND"
    }

)
db.empcountry.insertOne(
    {
        empId:ObjectId('685bc9c0e3d17c6cbc9f9912'),
        country:"UAE"
        
    }

)
db.empcountry.insertOne(
    {
        empId:ObjectId('685bc9c0e3d17c6cbc9f9913'),
        country:"ISR"
    }

)

db.employess.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",     
            foreignField: "empId",
            as: "orders"
        },
    },
    {$unwind:"$orders"},
    {$project:{name:1,salary:1,"orders.orderValue":1}},
   
])

//commands to create index
db.employess.createIndex({"email":1})
db.employess.getIndexes()
db.employess.dropIndexes()
//you can see the stats why indexing to improve performance
db.employess.find({email:"john@gmail.com"}).explain("executionStats")



db.employess.aggregate([
    {$group:{_id:{country:"$country",name:"$name"},//grouping together
    total:{$score}}}
])

//Output---> India,Krish,63
// UK,John,68


//country, name, score
// India,Krish,20
// India,Krish,21
// India,Krish,22
// Uk,John,21
// Uk,John,21
// Uk,John,21


