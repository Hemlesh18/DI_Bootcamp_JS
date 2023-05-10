// // ex1
// let sum = (a,b)=>a+b;
// console.log(sum(4,5))

// // ex2
// let weigth = 1
// function convertToGrams(weigth){
//     return weigth*1000 +"g"
// }
// console.log(convertToGrams(weigth))

// let convertToGrams2 = (weigth)=> weigth*1000 +"g";
// console.log(convertToGrams(45))

// 3

// (function(numberOfChildren, partnerName, location, jobTitle) {
//     let message = `You will be a  ${jobTitle}  in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
//     document.getElementById("output").innerHTML = message;
//   })(2, "John", "New York", "software engineer");


// 4
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// (function(name){
//     let nameofuser=prompt("enter your name")
//     document.querySelector(".navbar-item").innerHTML=nameofuser;

// })();

// 5


function makeJuice(){
    let ingredient=[]

    let size=prompt("what size of juice do you want")
//    ingredient.forEach(displayJuice)
    function addIngredients(){
        let first=prompt("what is the first ingredient")
        let second=prompt("what is the second ingredient")
        let third=prompt("what is the third ingredient")
        ingredient.push(first)
        ingredient.push(second)
        ingredient.push(third)
        console.log(ingredient)
    }
    addIngredients()
    addIngredients()

    let fruit = ''// ingredient.toString();
    ingredient.forEach(function(value) {fruit +=value +", "})


    function displayJuice(){

              let x =  document.querySelector(".juice").innerHTML=`The client wants a ${size} juice, containing  ${fruit}.`

              x.slice(0, -3)


    }
    displayJuice()


}
makeJuice()




