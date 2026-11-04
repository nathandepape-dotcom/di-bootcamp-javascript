// Daily challenge : Planets
// An array of objects: each planet has a name, a color and a number of moons (bonus).
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "goldenrod", moons: 0 },
  { name: "Earth", color: "royalblue", moons: 1 },
  { name: "Mars", color: "firebrick", moons: 2 },
  { name: "Jupiter", color: "sandybrown", moons: 4 },
  { name: "Saturn", color: "khaki", moons: 3 },
  { name: "Uranus", color: "lightseagreen", moons: 2 },
  { name: "Neptune", color: "navy", moons: 2 },
];

const section = document.querySelector(".listPlanets");

planets.forEach(planet => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  // Bonus: moons placed around the planet
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.top = `${i * 35}px`;
    moon.style.left = "110px";
    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
