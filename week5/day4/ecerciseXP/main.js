async function getStarWars() {
    let response = await fetch("https://www.swapi.tech/api/starships/9/");
    let objectStarWars = await response.json();
    console.log(objectStarWars.result);
}