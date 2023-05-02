

// An array of planet names
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// An array of planet colors
const planetColors = ["#8e8d8a", "#f4a460", "#6495ed", "#cd5c5c", "#ffcc99", "#f0e68c", "#add8e6", "#00bfff"];

// An array of number of moons per planet
const moons = [0, 0, 1, 2, 3, 1, 7, 4];

// Get the section element to append the planets
const planetSection = document.querySelector('.listPlanets');

// Loop through each planet
for (let i = 0; i < planets.length; i++) {
  // Create a new div element for each planet
  const planetDiv = document.createElement('div');

  // Add the "planet" class to the div element
  planetDiv.classList.add('planet');

  // Add a unique class to the planet div for the specific color
  planetDiv.classList.add(`planet`,i);

  // Set the background color for each planet div
  planetDiv.style.backgroundColor = planetColors[i];

  // Add the planet name as text content to the div
  planetDiv.textContent = planets[i];

  // Append the planet div to the section element
  planetSection.appendChild(planetDiv);

  // If the planet has moons, create them
  if (moons[i] > 0) {
    // Loop through each moon for the planet
    for (let j = 0; j < moons[i]; j++) {
      // Create a new div element for each moon
      const moonDiv = document.createElement('div');

      // Add the "moon" class to the div element
      moonDiv.classList.add('moon');

      // Add a unique class to the moon div for the specific planet
      moonDiv.classList.add(`moon`,i);

      moonDiv.style.top = Math.floor(Math.random() * 80) + 10;
      moonDiv.style.left =Math.floor(Math.random() * 80) + 10;


      planetDiv.appendChild(moonDiv);
    }
  }
}
