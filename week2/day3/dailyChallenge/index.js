// 1
for(let star= 0; star<=6; ++star){
    let star1 = "* " .repeat(star+1)
    console.log(star1);
}
// 2
let n = 6;
let star1 = "";
for (let i = 1; i <= n; i++) {
    // console.log(i)
    for (let j = 0; j < i; j++) {
        // star1 += "* ";
        star1= star1 + "* "
    }
    star1 += "\n";
}
console.log(star1);