//arrays
// const score=[2,3,4,5,6,2];
// console.log(score);
// console.log(score[0]);
// score.push(9);
// console.log(score);
// console.log(score.length);
// const newScore= [...score,9]
// console.log(newScore)

// const cart ={
//     1:5,
//     5:3,
// };
// const newCart=({...cart,2:1, 4:2})
// console.log(newCart)

// let cart={};
// const products=[
//     {id:1, name:"Product1", price:91},
//     {id:2, name:"Product2",price:92},
//     {id:3, name:"Product3",price:93},
// ];
// // console.log(products[0]);
// //const newproduct=[...products, {id:4, name:"Product4",price:94}];
// //cart is object 
// function addToCart(id){
//     cart = {...cart,[id]:1}
// }
// addToCart(1)
// console.log(cart);
// addToCart(2);
// console.log(cart);   
//

//shopping cart
const score=[2,1,7,5,3,2];
// score.forEach((CSSMathValue, indexedDB, arr)=>{})
//     score.forEach((a,b,c)=>{
//     // console.log(value);
//     console.log(c[b]);
// });

//use map only
//  const newScore =  score.map((value)=>{
//     console.log(value);
   
// });
 

//use map only
//  const newScore1 =  score.map((value)=>{
//     // return value+5 ;
//     return value >2; 
   
// });
// console.log(newScore1);

//  const newScore1 =  score.fiter((value)=>{
//     // return value+5 ;
//     // return value >2;//stores in new place 
//     return value === 2;
   
// });
// console.log(newScore1);
//  const newScore1 =  score.find((value)=>{
//     return value === 2;
   
// });
// console.log(newScore1);



 const newScore =  score.reduce((sum, value)=>{
   return sum + value;
   
   
},0);
console.log(newScore);






