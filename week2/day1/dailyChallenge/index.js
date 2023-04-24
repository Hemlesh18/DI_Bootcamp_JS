// ex1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits)
console.log(fruits.sort())
console.log(fruits.splice(0,1))
console.log(fruits)
console.log(fruits.reverse())
console.log(fruits.push("kiwi"))
console.log(fruits)

// ex2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])
