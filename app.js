// Get references
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");
const button = document.getElementById("btn");


function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(email);
} 

button.addEventListener("click", (r) => {
  r.preventDefault();
  const email = emailInput.value.trim();
  emailInput.classList.remove("input-error", "input-success");
  errorMsg.textContent ="";

  if (email === "") {
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email.";
    emailInput.classList.add("input-error");

  } else if (!validateEmail(email)) {
    errorMsg.textContent = "Please provide a valid email address.";
    emailInput.classList.add("input-error");

  } else {
    errorMsg.textContent = "";
    emailInput.classList.add("input-success");
    alert("Thanks for subscribing!");
    emailInput.value = "";
  }
});

emailInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

