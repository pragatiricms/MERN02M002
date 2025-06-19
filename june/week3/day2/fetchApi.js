console.log("Today fetch API")


// //callback hell
// function getData(userId,next){
//     setTimeout(()=>{
//         console.log("User ID:",userId)
//         next();
//     },3000)
// }

// getData(1);
// getData(2);
// getData(3);

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// });


// //normal promise object
// console.log(getData(1))

// let Promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("success")
//     },3000)

// })

// console.log(Promise)

//Promises

// function getData(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User ID:",userId)
//             resolve("resolve ho gaya")
//         },3000)
//     })
// }


// //how to handle a promise
// //ans.: then or catch block
// getData(1).then((res)=>{
//     return getData(2).then(()=>{
//         return getData(3).then((res)=>{
//              console.log("Result: ",res)
//         })
//     })
// }).catch((err)=>{
//     console.log("Error is:", err)
// })

//async await


async function getData(){
    let response=await fetch('https://jsonplaceholder.typicode.com/posts')
    let data=await response.json()
    console.log(data)
    console.log(data[0].title)

    data.forEach(element => {
        console.log(element.title)
    });
}
getData()

