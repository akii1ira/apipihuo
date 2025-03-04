const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Allow CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define the planets data
const planets = [
  {
    image: { thumbnail: "images/venus.png" },
    name: "Venus",
    kilo: "108.2 million km",
    definition: "Venus is often referred to as Earth’s twin due to its similar size and composition. It has a thick atmosphere that traps heat, making it the hottest planet in the Solar System.",
    period: "225 days",
    photographer: "The Pale Blue Dot",
    appearance: "Yellowish with thick clouds of sulfuric acid and rocky volcanic surface.",
    orbitalPeriod: "225 days",
    diameter: "12,104 km",
    mass: "4.87 × 10^24 kg",
    temperature: "462°C",
    moons: 0,
    color: "red"
  },
  {
    image: { thumbnail: "images/Earth-2.png" },
    name: "Earth",
    kilo: "149.5 million km",
    definition: "Earth is the only known planet to support life. It has one moon, commonly referred to as the Moon. Earth’s orbit is nearly circular, contributing to its relatively stable climate compared to other planets.",
    period: "365 days",
    photographer: "The Pale Blue Dot",
    appearance: "Blue oceans, green landmasses, and white clouds with breathable atmosphere.",
    orbitalPeriod: "365.25 days",
    diameter: "12,742 km",
    mass: "5.97 × 10^24 kg",
    temperature: "-88°C to 58°C",
    moons: 1,
    color: "blue"
  },
  {
    image: { thumbnail: "images/mars.png" },
    name: "Mars",
    kilo: "227.9 million km",
    definition: "Mars is known as the 'Red Planet' because of its iron oxide-rich surface, which gives it a reddish appearance. It has two moons, Phobos and Deimos.",
    period: "687 days",
    photographer: "The Pale Blue Dot",
    appearance: "Red, rocky surface with iron oxide and large volcanic features.",
    orbitalPeriod: "687 days",
    diameter: "6,779 km",
    mass: "6.42 × 10^23 kg",
    temperature: "-125°C to 20°C",
    moons: 2,
    color: "red"
  },
  {
    image: { thumbnail: "images/jupiter.png" },
    name: "Jupiter",
    kilo: "778.5 million km",
    definition: "Jupiter is the largest planet in the Solar System, with a mass more than twice that of all the other planets combined. It has 79 known moons, with the four largest moons known as the Galilean moons.",
    period: "11.86 years",
    photographer: "The Pale Blue Dot",
    appearance: "Striped with ammonia clouds, Great Red Spot storm, mostly hydrogen and helium.",
    orbitalPeriod: "11.86 years",
    diameter: "139,820 km",
    mass: "1.90 × 10^27 kg",
    temperature: "-108°C",
    moons: 79,
    color: "blue"
  },
  {
    image: { thumbnail: "images/saturn.png" },
    name: "Saturn",
    kilo: "1.43 billion km",
    definition: "Saturn is the second-largest planet in the Solar System and is famous for its stunning ring system. It has at least 82 moons, with Titan being the largest.",
    period: "29.5 years",
    photographer: "The Pale Blue Dot",
    appearance: "Yellowish gas giant with prominent ice and rock ring system.",
    orbitalPeriod: "29.5 years",
    diameter: "116,460 km",
    mass: "5.68 × 10^26 kg",
    temperature: "-178°C",
    moons: 82,
    color: "blue"
  },
  {
    image: { thumbnail: "images/uranus.png" },
    name: "Uranus",
    kilo: "2.87 billion km",
    definition: "Uranus is a gas giant that rotates on its side, making it unique among the planets. It has a faint ring system and at least 27 moons.",
    period: "84 years",
    photographer: "The Pale Blue Dot",
    appearance: "Pale blue-green color due to methane, faint rings, and smooth features.",
    orbitalPeriod: "84 years",
    diameter: "50,724 km",
    mass: "8.68 × 10^25 kg",
    temperature: "-224°C",
    moons: 27,
    color: "blue"
  },
  {
    image: { thumbnail: "images/neptune.png" },
    name: "Neptune",
    kilo: "4.5 billion km",
    definition: "Neptune is a cold, blue planet with strong winds and storms. It has 14 known moons, with Triton being the largest.",
    period: "164.8 years",
    photographer: "The Pale Blue Dot",
    appearance: "Deep blue color with clouds, strong winds, and dark storm spots.",
    orbitalPeriod: "164.8 years",
    diameter: "49,244 km",
    mass: "1.02 × 10^26 kg",
    temperature: "-214°C",
    moons: 14,
    color: "blue"
  },
  {
    image: { thumbnail: "images/pluto.png" },
    name: "Pluto",
    kilo: "5.9 billion km",
    definition: "Pluto is a dwarf planet located in the Kuiper Belt. Once considered the ninth planet, it was reclassified as a dwarf planet in 2006.",
    period: "248 years",
    photographer: "The Pale Blue Dot",
    appearance: "Brownish surface with icy patches, rocky with plains and mountain ranges.",
    orbitalPeriod: "248 years",
    diameter: "2,377 km",
    mass: "1.31 × 10^22 kg",
    temperature: "-229°C",
    moons: 5,
    color: "blue"
  },
  {
    image: { thumbnail: "images/sun.png" },
    name: "Sun",
    kilo: "149.6 million km",
    definition: "The Sun is a star at the center of the Solar System. It provides light and energy to the planets and is primarily composed of hydrogen and helium.",
    period: "N/A",
    photographer: "NASA",
    appearance: "Bright yellow with a fiery surface, emitting solar flares and energy.",
    orbitalPeriod: "N/A",
    diameter: "1,391,000 km",
    mass: "1.99 × 10^30 kg",
    temperature: "5,500°C (surface)",
    moons: 0,
    color: "red"
  }
];

// API Route to get all planets
app.get('/api/planets', (req, res) => {
  res.json(planets);  // Respond with all planets data  as JSON
});

// API Route to get a specific planet by name
app.get('/api/planets/:name', (req, res) => {
  const planetName = req.params.name.toLowerCase();
  const planet = planets.find(p => p.name.toLowerCase() === planetName);
  
  if (planet) {
    res.json(planet);  // Respond with the specific planet data as JSON
  } else {
    res.status(404).json({ message: 'Planet not found' });  // 404 if planet is not found
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
