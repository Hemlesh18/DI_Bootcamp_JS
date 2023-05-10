let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// function fruit(){
//     return groceries.fruits;
// }
// console.log(fruit())

//1
let displayGroceries = ()=>{
    groceries.fruits.forEach(fruit =>{
        console.log(fruit)
    });
}
displayGroceries()
// 2
let cloneGroceries=()=>{
    let user = client;
    client = "Betty";
    console.log(client)
// user is a primitive value (a string) and is copied by value, soo modifying client to betty will not change the value of user.
    console.log(user)
    let shopping= groceries;
    groceries["totalPrice"]="35$"
    console.log(shopping);
    console.log(groceries);
// shopping is an object and is copied by reference, so modifying the value of shopping will change the value of groceries.
}
cloneGroceries()


