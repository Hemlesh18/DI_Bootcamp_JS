const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

const planetColors = ["#8e8d8a", "#f4a460", "#6495ed", "#cd5c5c", "#ffcc99", "#f0e68c", "#add8e6", "#00bfff"];

const moons = [0, 0, 1, 2, 3, 1, 7, 4];

const planetSection = document.querySelector('.listPlanets');

for (let i = 0; i < planets.length; i++) {
  const planetDiv = document.createElement('div');

  planetDiv.classList.add('planet');

  planetDiv.classList.add(`planet`,i);

  planetDiv.style.backgroundColor = planetColors[i];

  planetDiv.textContent = planets[i];

  planetSection.appendChild(planetDiv);

  if (moons[i] > 0) {
    for (let j = 0; j < moons[i]; j++) {

      const moonDiv = document.createElement('div');


      moonDiv.classList.add('moon');


      moonDiv.classList.add(`moon`,i);

      moonDiv.style.top = Math.floor(Math.random() * 80) + 10;
      moonDiv.style.left =Math.floor(Math.random() * 80) + 10;


      planetDiv.appendChild(moonDiv);
    }
  }
}
