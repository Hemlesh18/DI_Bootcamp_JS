// ex1 your favorite food
var favoriteFood = 'pizza';
var FavoriteMeal = 'dinner';
console.log('i eat '+ favoriteFood + ' at every '+ FavoriteMeal)


// ex2
// 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength)
// 2
const myWatchedSeriesSentence = myWatchedSeries.splice(2,1," and the big bang theory");
console.log(myWatchedSeriesSentence)
console.log(myWatchedSeries)
// 3
console.log("i watched 3 series :" + myWatchedSeries)
// part2
const myWatchedSerieS = myWatchedSeries.splice(2,1,"friends");
console.log(myWatchedSeries)
myWatchedSeries.push("Breaking Bad");
console.log(myWatchedSeries)
myWatchedSeries.unshift("samsam");
console.log(myWatchedSeries)
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries)
console.log(myWatchedSeries[1][2])

// ex3
let tempCelsius = 0
let tempFahrenheit = tempCelsius * 9/5 + 32
console.log( tempCelsius+"°C" +" is "+tempFahrenheit+"°F" )

// ex4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23


console.log(3 + 4 + '5');
// outcome will be 75 because 3+4 are number and '5' is a string

// ex5
typeof(15)

// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:number
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:true
// Actual:true

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:NaN
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:13


// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5

// Prediction:NaN
// Actual:NaN

99 * "hello"

// Prediction:NaN
// Actual:NaN
1 != 1

// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false
