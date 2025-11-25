const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error");
const button = document.getElementById("btn");

let validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]$/;
    return regex.test(email);
}

button.addEventListener('click',(event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    emailInput.classList.remove("input-error", "input-success");
    errorMsg.textContent = "";

    if(email === ""){
      errorMsg.textContent = "Whoops! It looks like you forgot to add your email.";
      errorMsg.classList.add("input-error");
    } else if(!validateEmail(email)){
      errorMsg.textContent = "Please provide a valid email address.";
      errorMsg.classList.add("input-error"); 
    }else{
        errorMsg.textContent = "";
        alert("Thanks");
    }
})