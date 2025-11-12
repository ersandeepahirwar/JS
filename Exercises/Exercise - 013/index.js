const adjectives = "Bright Blue Golden Urban Silvers";
const nouns = "Path Horizon Leaf Bloom Peak";
const types = "Consulting Media Studios Designs Ventures";

const BusinessNameGenerator = (adjective, noun, type) =>
  `${adjective} ${noun} ${type}`;

console.log(
  BusinessNameGenerator(
    adjectives.split(" ")[Math.floor(Math.random() * 5)],
    nouns.split(" ")[Math.floor(Math.random() * 5)],
    types.split(" ")[Math.floor(Math.random() * 5)]
  )
);
