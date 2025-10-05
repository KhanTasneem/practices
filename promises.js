// let p=new Promise(resolve=>resolve("Hello"));
// p.then(msg=>console.log(msg))

// let p = new Promise((_, reject) => reject("Error!"));
// p.catch(err => console.log(err));

// Promise.resolve(1)
//   .then(n => n + 1)
//   .then(n => n * 2)
//   .then(console.log);

// Promise.resolve("A")
//   .then(val => {
//     console.log(val);
//     return "B";
//   })
//   .then(console.log);

// Promise.reject("Oops")
//   .then(() => console.log("Success"))
//   .catch(err => console.log("Caught:", err))
//   .finally(() => console.log("Finally block"));

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// Promise.resolve()
//   .then(() => { throw "Fail"; })
//   .then(() => console.log("This won't run"))
//   .catch(err => console.log("Caught:", err));

//   Promise.resolve()
//   .then(()=>{throw "Fail"})
//   .then(()=>console.log("This won't run"))
//   .catch(err=>console.log("Caught:", err));


// Promise.all([
//   Promise.resolve("One"),
//   Promise.resolve("Two")
// ]).then(values => console.log(values));

// Promise.race([
//   new Promise(res => setTimeout(() => res("Slow"), 1000)),
//   Promise.resolve("Fast")
// ]).then(console.log);

// console.log("1");
// Promise.resolve().then(() => console.log("2"));
// setTimeout(() => console.log("3"), 0);
// Promise.resolve().then(() => console.log("4"));
// console.log("5");

// const fetchData=()=>{
//     return new Promise((resolve, reject)=>{
//         // setTimeout(()=>{
//             reject("Data fetched error")
//         // }, 1000)
//     })
// }
// fetchData().then(data=>console.log(data)).catch(err=>console.log(err))

// const getUser=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Fetched user");
//             resolve({id:101, name: "John"})
//         })
//     })
// }
// const getOrder=(userId)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Order for user", userId);
//             resolve(["order1", "order2"])
//         },1000)
//     })
// }
// const getOrderDetails=(orderId)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("order details for order", orderId);
//             resolve({orderId, name:"iPhone", price: 200000})
//         }, 1000)
//     })
// }

// const sendEmail=(orderName)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//         console.log("Order sent for ", orderName);
//             resolve("Email sent")
//         }, 1000)
//     })
// }
// getUser()
// .then(user=>getOrder(user.id))
// .then(order=>getOrderDetails(order[0]))
// .then(orderDetails=>sendEmail(orderDetails.name))
// .then(console.log)
// Q: Difference between Promise.then and async/await?

// Q: How to handle multiple Promises?

// Promise.all([p1, p2])     // waits all
// Promise.race([p1, p2])    // returns first


// 👉 Practice: Create a fake API using setTimeout and fetch multiple promises together.

// Q. Async await example that fetches mock data
const mockUsers=[
    {id:1, name:"John"},
    {id:2, name:"Jane"},
    {id:3, name:"Doe"}
]
const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(mockUsers)
        },2000)
    })
}
const getUsers=async()=>{
    console.log("Fetching users...");
    console.time("getUsers");
    try{
    const resp=await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(resp);

    const result=await resp.json();
    console.log(result);
    return result
    }catch(err){
        console.error(err)
    }finally{
        console.log("Fetch users completed")
        console.timeEnd("getUsers")
    }
}
getUsers()