const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name:'kola',
            age: 23
        })
        // reject('something went wrong')
    }, 5000)
})

console.log('before')

promise.then((data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise')
        }, 5000)
    })
}).then((str) => {
    console.log('Does this run', str)
}).catch((err) => {
    console.log('Error', err)
})

console.log('after')