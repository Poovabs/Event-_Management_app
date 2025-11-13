/* MODAL (Register Form) */

const registerBtn = document.getElementById("registerBtn");
const registerModal = document.getElementById("registerModal");
const closeModal = document.getElementById("closeModal");
const regForm = document.getElementById("regForm");
const eventSelect = document.getElementById("eventSelect");

// Open modal
registerBtn.addEventListener("click", () => {
  registerModal.style.display = "flex";
});

// Close modal on X button
closeModal.addEventListener("click", () => {
  registerModal.style.display = "none";
});

// Close modal when clicking outside the box
window.addEventListener("click", (event) => {
  if (event.target === registerModal) {
    registerModal.style.display = "none";
  }
});

/* FORM SUBMIT */

regForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page refresh

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const dept = document.getElementById("dept").value.trim();
  const selectedEvent = document.getElementById("eventSelect").value;

  if (!selectedEvent) {
    alert("Please select an event before submitting!");
    return;
  }

  // Success Message
  alert(
    "✅ Registration Successful!\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Department / Year: " + dept + "\n" +
    "Event Registered: " + selectedEvent
  );

  regForm.reset();
  registerModal.style.display = "none";
});


/* RESPONSIVE MENU (Mobile) */

/* If you add a mobile menu button later, this code will control it.
   If not, no problem, site still works fine */

const nav = document.querySelector("nav");
const mobileMenuBtn = document.createElement("div");
mobileMenuBtn.classList.add("mobile-menu-btn");
mobileMenuBtn.innerHTML = "☰";
document.querySelector(".navbar").appendChild(mobileMenuBtn);

mobileMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
