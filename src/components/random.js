function viralAdvertising(n) {
    let numOfPeopleOnFirstDay = 5
    let sum = 0

    for(var i = 1; i <= n; i++){
        let numOfPeopleOnsubsequentDays =  numOfPeopleOnFirstDay
        let numOfLikeOnEachDay = Math.floor(numOfPeopleOnsubsequentDays/2)
        sum += numOfLikeOnEachDay
        numOfPeopleOnFirstDay = numOfLikeOnEachDay * 3
    }

    return sum
}

console.log(viralAdvertising(20))