//arrow function

// greet(); //hoisting
// function greet() {
//     console.log("Hello World");
// }


// x= 10;
// console.log(x);
// var x;

// const greet = 10;
// console.log(greet);

// const greet =()=>{
//     console.log("Hello World")
// }
// greet(); //hoisting does not work with arrow functions // call function after u have greated it

// const add=(a,b)=>{
//     console.log(a+b);
// }
// add(4,5);

//reference type will not have a copy of it //occupy space only once
// const add2=(a,b)=>{
//     return a +b
// }
// const result = add2(4,5)
// console.log(result)


//arguments
const add=(...args)=>{
    console.log(args[0]);
}
add(4,5,6,7,8)