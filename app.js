// Get references
const emailinput = document.querySelector("#email");
const btn = document.querySelector("#btn");
const errorMsg = document.querySelector("#error");

//message here:
//Whoops! It looks like you forgot to add your email.
//Please provide a valid email address.

function validateEmail(ins) {
  const validate = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return validate.test(ins);
}

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const asEmail = emailinput.value.trim();
  if (asEmail === "") {
    errorMsg.textContent =
      "Whoops! It looks like you forgot to add your email.";
  } else if (!validateEmail(asEmail)) {
    errorMsg.textContent = "Please provide a valid email address.";
  } else {
    errorMsg.textContent = "";
    emailinput.value = "";
    // alert("Thanks Mate");
  }
});

emailinput.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    evt.preventDefault();
    btn.click();
  }
});
