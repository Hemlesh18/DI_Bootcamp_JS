// ex1
// let i = 0;

for (let i=0; i<=15; i++) {
    console.log(i);
    if (i % 2 === 0){
        console.log(i +" is even");
    }
    else{
        console.log(i +" is odd");
    }
}

// ex2
// task1
let names= ["john", "sarah", 23, "Rudolf",34]
for (let i = 0; i < names.length; i++) {
    if (typeof names[i] !== "string") {
      continue;
    }
    if (names[i][0] !== names[i][0].toUpperCase()) {
      names[i] = names[i][0].toUpperCase() + names[i].slice(1);
    }
    console.log(names[i]);
  }

//2
for (let i = 0; i < names.length; i++) {
    if (typeof names[i] !== "string") {
      break;
    }
    console.log(names[i]);
  }
