var MyAddressNum = 8;
var MyAddressStreet = "villa la preneuse candos quatreborner";
var country = "mauritius"

var globalAdress = MyAddressNum + " " + " " + MyAddressStreet +" " + country ;
console.log(globalAdress)
console.log("i live in "+ MyAddressStreet + " " + MyAddressNum + " in " + country)


// ex3
var pets = ['cat','dog','fish','rabbit','cow'];
console.log(pets[1])
// pets.push('hourse')
// console.log(pets)
// pets[3]= 'hourse'
// console.log(pets)
// pets.length
// console.log(pets.length)
console.log(pets.splice(3,1))
console.log(pets)