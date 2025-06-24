//promises
// function f1(y){
// //return 5;
// // setTimeout(()=>{//to make the delay
// //     return 5;
// // },1000);
// return new Promise((resolve, reject)=>{
// //    resolve(5)
// //reject("Something went wrong")
// if(y<0){
//     reject("Something went wrong");
// }
// else{
//     resolve(y);
// }

// })
// }

// function f2(x){//f2 is dependent
//     console.log(x+7);

// }
// // const n = f1();
// // const result = f2(n);
// // console.log(result);

// // f1().then(n=>f2(n));//.only when fuction is returning promise
// // buy().then(n=>f2(n));

// f1(4)
// .then((n)=>f2(n))
// .catch((err)=>console.log(err))


//.then method

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>{
//     data.map(value=>{
//         console.log(value.name,value.email)
//     })
// })//parse data
// .catch((err)=>console.log(err))


//async and await

const fetchData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
 data.map(value=>{
      console.log(value.name,value.email)
  })
}

fetchData();
