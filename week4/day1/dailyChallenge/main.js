const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//    part1
const username= [];
gameInfo.forEach((player) => {
    username.push(player.username + "!");
});
console.log(username);
//    part2
const winners=[];
gameInfo.forEach((player) => {
    if (player.score > 5){
        winners.push(player.username);
    }
});
console.log(winners)
//    part3

const totalscore= gameInfo.reduce((ScoreAccumulated,player) =>{
    return ScoreAccumulated + player.score;
},0);
console.log(totalscore);