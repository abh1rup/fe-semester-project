console.log("Site loaded.");

// ================= DAILY SPECIALS (MENU PAGE) =================

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
  const specialEl = document.getElementById("specialText");
  if (specialEl) {
    specialEl.textContent = specials[randomIndex];
    alert("Today's special has been revealed!");
  }
}


// ================= CONTACT FORM HANDLER (form.html) =================

function handleSubmit(e) {
  // This will be called from the form's onsubmit attribute
  e.preventDefault();

  const ok = confirm("Are you sure you want to submit?");
  if (ok) {
    alert("Thank you for contacting us!");
    window.location.href = "thankyou.html";
  } else {
    alert("Submission canceled.");
  }
}
