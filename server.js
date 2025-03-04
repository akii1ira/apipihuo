// Importing required libraries
const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Enable CORS
app.use(cors());

// Sample data that includes your model fields
const planets = [
  {
    image: 'https://example.com/mars.jpg',
    name: 'Mars',
    kilo: '6.39 × 10^23 kg',
    definition: 'The fourth planet from the Sun.',
    period: '687 days',
    photographer: 'NASA',
    appearance: 'Red and rocky',
    orbitalPeriod: '687 days',
    diameter: '6,779 km',
    mass: '6.39 × 10^23 kg',
    temperature: '-60°C',
    moons: 2,
    color: 'Red'
  },
  {
    image: 'https://example.com/jupiter.jpg',
    name: 'Jupiter',
    kilo: '1.90 × 10^27 kg',
    definition: 'The fifth and largest planet from the Sun.',
    period: '4333 days',
    photographer: 'NASA',
    appearance: 'Gas giant with bands of clouds',
    orbitalPeriod: '12 years',
    diameter: '139,820 km',
    mass: '1.90 × 10^27 kg',
    temperature: '-145°C',
    moons: 79,
    color: 'Orange, brown, and white'
  }
];

// Define routes
app.get('/api/planets', (req, res) => {
  res.json(planets);
});
app.get('/api/planets/:name', (req, res) => {
  const planet = planets.find(p => p.name.toLowerCase() === req.params.name.toLowerCase());
  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ message: 'Planet not found' });
  }
});

// Set up a simple server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
