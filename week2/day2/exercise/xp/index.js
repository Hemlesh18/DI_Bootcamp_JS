// ex1
let x = 20
let y = 40

if (x > y){
    console.log(x + " is the biggest number")
}else{
console.log(y + " is the biggest number")
}

// ex2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());
if(newDog == newDog){
    console.log("i love Chihuahuas, it's my favorite dog breed");
}else{
    console.log("i dont care, i prefer cats");
}

// 3

// let num = prompt("enter a number");
// let numberInput = parseInt(num)
// if (num % 2==0){
//     console.log(num + " is an even number")
// }else{
//     console.log(num + " is an odd number ")
// }

// 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// const arrOfNum = [];

// users.forEach(str => {
//   arrOfNum.push(parseInt(str));
// });
// console.log(arrOfNum)
// let userslenght = parseInt(users)

// console.log(userslenght)
if (users.length >  2 ){
    console.log(users[0]+", " + users[1]+ " and " + (users.lenght-2)+ "3" +" more are online")
    console.log(users[0]+", " + users[1]+ " and " + "3" +" more are online")
}else if ( users.length == 1){
    console.log(users[0]+ " is online")

}else if ( users.lenght == 2){
    console.log(users[0] +" and " +users[1] + " is online.")
}else{
    console.log("no one is online")
}