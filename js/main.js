console.log("Site loaded.");

// Daily specials using an array
const specials = [
  "Half-off Margherita Pizza!",
  "Free drink with any pasta dish!",
  "Buy one House Salad, get one half off!",
  "Chef’s surprise dessert for $3.99!",
  "20% off all entrées today!"
];

// Function to pick a random special
function getSpecial() {
  const randomIndex = Math.floor(Math.random() * specials.length);
  document.getElementById("specialText").textContent = specials[randomIndex];
  alert("Today's special has been revealed!");
}
