// Object Destructuring
//
// const person = {
//     name: 'Kolawole',
//     age: 24,
//     location: {
//         city: 'Abuja',
//         temp: 100
//     }
// }

// const {name = 'Anonymous', age} = person // Use of default values
// console.log(`${name} is ${age}`) 

// const { city, temp: temperature } = person.location  // Renaming the destructured variable
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`)
// }

const book = {
    title : 'Pay attention to daniel\'s prophecy',
    author: 'Jehovahs Witnesse\'s',
    publisher: {
        // name: 'Watchtower Bible And Tract Society'
    }
}

const { name : publisherName  = 'Self Published'} = book.publisher

console.log(publisherName)

//
//Array Destructuring
//


// const address = ['1299 S juniper street', 'Philadelphia', 'Pennsylvania', '19147']
// const [, city, state = 'New York' ] = address
// console.log(`You are in ${city} ${state}`)

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [ coffee, ,mediumCost ] = items
console.log(`A medium ${coffee} cost's ${mediumCost}`)