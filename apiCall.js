// const getApi=async(url)=>{

// console.time("getApi"+url)
//     try{
//        const res=await fetch(url)
//        .then(res=>res.json())
//        .then(data=>data)

// console.timeEnd("getApi"+url)  
//         return res 
//     }catch(e){

// console.timeEnd("getApi"+url)  
//         return new Error(e)
//     }
// }

// const apiCall=async()=>{
// console.time("apiCall")

//     const [res1, res2, res3]=await Promise.all([
//     getApi("https://jsonplaceholder.typicode.com/todos/1"),
//     getApi("https://jsonplaceholder.typicode.com/todos/2"),
//     getApi("https://jsonplaceholder.typicode.com/todos/3"),
//     ])
// console.timeEnd("apiCall")  
// console.log("res1=>", res1)
// console.time(res1)
// console.log("res2=>", res2)
// console.log("res3=>", res3)

// }
// apiCall()

const myFunc=(num)=>{
    for(let i=0; i<=num; i++){

    }
    
}
const funcCall=async()=>{
await myFunc(1000)
await myFunc(10000)
await myFunc(100000)
}
funcCall()
