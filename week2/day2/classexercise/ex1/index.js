// ex1 keyless car
// let driverAge = 18 ;
debugger
let driverage = prompt("please enter your age ")
driverage= parseInt(driverage)
console.log(
    typeof(driverage)
)

if (driverage == 18)
{
    alert("congratulations on your first year of driving. Enjoy the ride!");
}

else if (driverage < 18){
    alert("Sorry, you are too young to drive this car. Powering off");
}
else if (driverage > 18){
    alert("Powering On. Enjoy the ride!");
}



