db.employess.insertMany([
    {
     name:"Amy Smith",
 email:"john@gmail.com",
 deparment:"HR",
 salary:2000,
 location:["FL","OH"],
 date:Date(),
    },
    {
        name:"Rafeal",
        email:"cathy@gmail.com",
        department:"It",
        salary: 1500,
        location:["OH","TX"],
        date:Date(),
    }
]);

db.employess.find({deparment:{$nin:["Admin","HR"]}})