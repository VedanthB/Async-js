// const getTodos= (resource) => {
   
//    return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState)
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             resolve(data)
//         } else if (request.readyState === 4) {
//             reject('could not fetch data from server')
//         }
//     })
    
//     request.open('GET' , resource)
//     request.send();

//    })
   
   
// }

// console.log(1)
// console.log(2)

// // getTodos('lugi.json' ,(err, data) => {
// //     console.log(data)
// //     getTodos('mario.json' ,(err, data) => {
// //         console.log(data)
// //     })
// //     getTodos('todos.json' ,(err, data) => {
// //         console.log(data)
// //     })
// // })

// getTodos('todos.json').then(data => {
//      console.log('promise 1 resolved:', data)
//      return getTodos('lugi.json').then(data => {
//         console.log('promise 2 resolved:', data)
//         return getTodos('mario.json').then(data => {
//             console.log('promise 3 resolved:', data)
//         })
//      })    
// }).catch(err => {
//     console.log('promise rejected:', err)
// });


// console.log(3)
// console.log(4)

fetch('lugi.json').then((response) => {
    console.log(response)
    return response.json() // response.json() is a promise
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log('rejected', err)
})
