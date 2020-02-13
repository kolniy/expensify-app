// function findLongestWordLength(str) {
//   const wordsArray = str.split(' ')
//   let longestWord = ''
//   for(var i = 0; i < wordsArray.length; i++){
//     if(wordsArray[i].length > longestWord.length){
//       longestWord = wordsArray[i]
//     }
//   }
//   return longestWord.length;
// }

// // console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
// console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))

// function repeatStringNumTimes(str, num) {
//     let joinedString = ''
//     if(num < 0){
//       return " "
//     }
//     for(var i = 1; i <= num; i++){
//       joinedString = joinedString.concat(str)
//     }
//     return joinedString
//   }
  
//   console.log(repeatStringNumTimes("*", 3));

// function chunkArrayInGroups(arr, size) {
//     let arrayChunck = []
//     var i = 0
//       for(i; i <= size; ){
//           console.log(arr.splice(i, size))
//         i = i + size
//         console.log(i)
//       }
//     return arr;
//   }
  
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);

// function sumAll(arr) {
//   let minimumNumber = 0
//    let maximumNumber = 0
//    let sum = 0

//    if(arr[0] > arr[1]){
//     minimumNumber = arr[1]
//     maximumNumber = arr[0]
//    } else {
//      minimumNumber = arr[0]
//      maximumNumber = arr[1]
//    }

//   for(minimumNumber; minimumNumber <= maximumNumber; minimumNumber++ ){
//      sum += minimumNumber
//   }

//   return sum
// }

// console.log(sumAll([1, 4]));


//  var positiveNumCount = 0
//     var negativeNumCount = 0
//     var zeroNumberCount = 0
  

//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             positiveNumCount++
//         } else if(arr[i] < 0){
//             negativeNumCoutn++
//     } else if(arr[i] === 0) {
//         zeroNumberCount++
//     }
//   }
//     var ratio = `${positiveNumCount/arr.length.toFixed(6)} \n${negativeNumCount/arr.length.toFixed(6)} \n${zeroNumberCount/arr.length.toFixed(6)}`

//     console.log(ratio)

// function staircase(n) {
//   const char = '#'
//   const space = ' '
//   let stairs = ''

//   for(var i = 1; i <= n; i++){
//       let str = ''
//     for (var j = 1; j <= i; j++){
//         if(j <= i){
//             str += '#'
//         } else {
//             str += ' '
//         }
//     }
//     console.log(str)
//   }
// }

// staircase(6)

// function breakingRecords(scores) {
//     let lowestScore = Number.MAX_SAFE_INTEGER
//     let highestScore = Number.MIN_SAFE_INTEGER
//     let lowestScoreCount = 0
//     let highestScoreCount = 0

//     for(var i = 0; i < scores.length; i++) {
//         if(scores[i] >= highestScore){
//             highestScore = scores[i]
//             highestScoreCount++
//         }

//         if(scores[i] <= lowestScore){
//             lowestScore = scores[i]
//             lowestScoreCount++
//         }
//     }

//     return `${highestScoreCount -1 } ${lowestScoreCount -1}`
// }

// console.log(breakingRecords([3, 4 ,21, 36, 10, 28, 35, 5, 24, 42]))

// Complete the catAndMouse function below.
// function catAndMouse(x, y, z) {
//     let numberForPositionCatA = 0
//     let numberForPostionnCatB = 0

//     if(x > z){
//         numberForPositionCatA = x - z
//     } else {
//         numberForPositionCatA = z - x
//     }

//     if(y > z){
//         numberForPostionnCatB = y - z
//     } else {
//         numberForPostionnCatB = z - y
//     }

//     if(numberForPositionCatA > numberForPostionnCatB){
//         console.log('Cat B')
//     } else if(numberForPostionnCatB > numberForPositionCatA){
//         console.log('Cat A')
//     } else {
//         console.log('Mouse C')
//     }
// }

// catAndMouse(1,2,3)
// catAndMouse(1,3,2)