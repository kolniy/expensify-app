import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA15thjw1eng-YOh1US0xTU3buxrc-tlO8",
    authDomain: "expensify-72199.firebaseapp.com",
    databaseURL: "https://expensify-72199.firebaseio.com",
    projectId: "expensify-72199",
    storageBucket: "expensify-72199.appspot.com",
    messagingSenderId: "21162381522",
    appId: "1:21162381522:web:17913fb429643922fcdd0b",
    measurementId: "G-8CL0ZRGHNW"
  }

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const database = firebase.database()

// child removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// child change 
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// child added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapShot) => {
//    expenses.push({
//      id: childSnapShot.key,
//      ...childSnapShot.val()
//    })
//  })
//  console.log(expenses)
// })

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//  const expenses = []

//    snapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   })

//   console.log(expenses)
// })

database.ref('expenses').push({
  description: 'Food',
    note: 'And some notes for description for the third one',
    amount: 345,
    createdAt: 748973009
})

// database.ref('notes').push({
//   title: 'course topics',
//   body: 'React Native, Anjular, python'
// })

//  database.ref('notes/-M23oeJqRNL52232GcR3').remove()

// database.ref().set(notes)

  // database.ref().on('value', (snapshot) => {
  //   const { name, job } = snapshot.val()
  //   console.log(`${name} is a ${job.title} at ${job.company}`)
  // }, (e) => {
  //   console.log('something went wrong trying to fetch your data', e)
  // })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('error on fetching data', e)
// })

// setTimeout(() => {
//   database.ref('age').set(23)
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(30)
// }, 10500)

// database.ref('location/city').once('value')
// .then((snapshot) => {
//   console.log(snapshot.val())
// }).catch((err) => {
//   console.log(err, 'There was an error')
// })

// database.ref().set({
//     name:'kolawole olaniyi',
//     age: 24,
//     stressLevel: 7,
//     job: {
//       title: 'software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Abuja',
//       country: 'Nigeria'
//     }
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('something didnt go well', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref().remove().then(() => {
//   console.log('removed succesfully')
// }).catch((err) => {
//   console.log('something went wrong')
// })


