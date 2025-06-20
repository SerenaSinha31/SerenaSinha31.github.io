// regular functions
// function greet(){
//     console.log("Hello World");

// }
// greet();

//IFEE method
//Immeditailey Invoked Function Expression
// This function runs immediately after it is defined
// (function greet(){
//     console.log("Hello World")
// })()

//function passing argument
// function add(a,b){
//     console.log(a+b);
// }
// add(10, 20);


//using return
// function add(a,b){
//     return a+b;
// }
// const result= add(10, 20);
// console.log(result);

// function add(){
//     console.log(arguments);
// }
// add(5,4);

function add(){
    console.log(arguments[0]);
}
add(5,4);