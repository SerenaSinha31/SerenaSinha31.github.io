// post collection
// _id-post
// p1-post 1
// p2-post 2



// comments Collectiona
// _id-pid-comment
// c1-p1-Comment1
// c2-p1-Comment2
// c3-p2-Comment1
// c3-p2-Comment2
// c3-p2-Comment3


db.posts.insertOne(
    {
        _id:"p1",
        post:"post1",

    }
);

db.posts.insertOne(
    {
        _id:"p2",
        post:"post2",
    }
)

db.comments.insertOne({
    _id:"c1",
    pid:"p1",
    Comment:"Comment1"
})

db.comments.insertOne({
    _id:"c2",
    pid:"p1",
    Comment:"Comment2"
})

db.comments.insertOne({
    _id:"c3",
    pid:"p2",
    Comment:"Comment1"
})

db.comments.insertOne({
    _id:"c4",
    pid:"p2",
    Comment:"Comment2"
})
db.comments.insertOne({
    _id:"c5",
    pid:"p2",
    Comment:"Comment3"
})

db.comments.insertOne({
    _id:"c6",
    pid:"p1",
    Comment:"Comment3"
})
db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
    }},
    // {$project:{_id:0,post:1,"comments.Comment":1}},
    {$unwind:"$comments"},
{$project:{_id:0,post:1,"comments.Comment":1}}
])


//marks
// name, term, subject,score



// John, t1, maths, 98
// John, t2, maths, 90
// John, t3, maths, 88
// John, t1, science, 92
// John, t2, science, 82
// John, t3, science, 82
// Cathy, t1, maths, 92
// Cathy, t2, maths, 92
// Cathy, t3, maths, 82
// Cathy, t1, science, 92
// Cathy, t2, science,82
// Cathy, t3, science, 80


db.marks.insertMany([
    {
        name:"John",
        term:"t1",
        subject:"maths",
        score:98
    },
    {
        name:"John",
        term:"t2",
        subject:"maths",
        score:90
    },
    {
        name:"John",
        term:"t3",
        subject:"maths",
        score:88
    },
     {
        name:"John",
        term:"t1",
        subject:"science",
        score:92
    },
     {
        name:"John",
        term:"t1",
        subject:"science",
        score:82
    },
     {
        name:"John",
        term:"t3",
        subject:"science",
        score:82
    },
     {
        name:"Cathy",
        term:"t1",
        subject:"maths",
        score:92
    },
     {
        name:"Cathy",
        term:"t2",
        subject:"maths",
        score:92
    },
     {
        name:"Cathy",
        term:"t3",
        subject:"maths",
        score:82
    },
    {
        name:"Cathy",
        term:"t1",
        subject:"science",
        score:92
    },
    {
        name:"Cathy",
        term:"t2",
        subject:"science",
        score:82
    },
    {
        name:"Cathy",
        term:"t3",
        subject:"science",
        score:80
    },

])
// Display avg score of each student

db.marks.aggregate([
    {$group:{_id:"$name",AvgScore:{$avg:"$score"}}}
])

//Term wise Average
db.marks.aggregate([
    {$group:{_id:"$term",AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

db.marks.aggregate([
    {$group:{_id:"$subject",AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

//Two Field Term and name wise

db.marks.aggregate([
    {$group:{
        _id:{term:"$term",subject:"$subject"},
    AvgScore:{$avg:"$score"},
    
}},
{$sort:{_id:1}}
])


//display avg term wise of John
db.marks.aggregate([
    {$match:{"name":"John"}},
    {$group:{
        _id:{term:"$term",name:"$name"},
        AvgScore:{$avg:"$score"},
    }},
    {$sort:{_id:1}}
])

//Create StudentInfo


db.studentInfo.insertMany([
    {
        _id:"s1",
        name:"John"
    },
    {
        _id:"s2",        
        name:"Cathy"
    },
])


//Rename s1--> John,s2---> CAthy
//name--->sid
// name, term, subject,score



// John, t1, maths, 98
// John, t2, maths, 90
// John, t3, maths, 88
// John, t1, science, 92
// John, t2, science, 82
// John, t3, science, 82
// Cathy, t1, maths, 92
// Cathy, t2, maths, 92
// Cathy, t3, maths, 82
// Cathy, t1, science, 92
// Cathy, t2, science,82
// Cathy, t3, science, 80
db.marks.updateMany(
  {},
  { $rename: { name: "sid" } }
)

db.marks.updateMany(
  
  { sid: "John" },{$set:{sid:"s1"}} 
)

db.marks.updateMany(
  
  { sid: "Cathy" },{$set:{sid:"s2"}} 
)

//Join---->look

db.studentInfo.aggregate([
     {$match:{"sid":"John"}},
    {$lookup:{from:"marks",localField:"_id",foreignField:"sid",as:"marks"}},
    {$unwind:"$marks"},
    {$group:{_id:"$marks.term",AvgScore:{$avg:"$marks.score"}}},
])
//conditional statement
db.employess.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:[{$gt:["$salary",3000]},"Grade A", "Grade B"]}}
    }
])

//How to make new collection operator store the result in new collection
db.employess.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        Grade:{$cond:{
            if:{$gt:["$salary",3000]},
            then:"Grade A",
            else:"Grade B"
        }}}
    },
    {$out:"GradeWiseSalary"}
])


//Dynamically update karna hai then we take view
// db.createView("viewname","collectionname",[query])
//view is temporary virtual collection 
db.createView("salaryview","employess",[
    {$project:{
        _id:0,
        name:1,
        department:1,
        salary:1,
        Grade:{$cond:{
            if:{$gt:["$salary",3000]},
            then:"Grade A",
            else:"Grade B", 
        }}}
    },
   
])
db.salaryview.drop()
//backup and restore