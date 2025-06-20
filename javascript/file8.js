//objects
// const student={
//     name:"serena",
//     age:21.
// };
// console.log(student);
// console.log(student.name);
// console.log(student["age"]);
// student.city="Amritsar"
// console.log(student);
// student.city="Delhi"
// console.log(student);
// delete student.age;
// console.log(student);
// const keys = Object.keys(student);
// console.log(keys);
// const values = Object.values(student);
// console.log(values);
//how to find the items
const cart ={
    // ProductId:1,
    // quantity:5
    1:5,
    3:1,
    5:2,
};
const items = Object.keys(cart).length
console.log(items);
cart[3]=cart[3]+1; // incrementing the quantity of product with id 3;
console.log(cart);
cart[3]=cart[3]-1
console.log(cart);