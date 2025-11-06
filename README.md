# Ping-single-column-coming-soon-page
HTML-CSS-JavaScript
# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
    - The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
    - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./Screenshot%202025-11-06%20212107.png)
![](./Screenshot%202025-11-06%20212124.png)
![](./Screenshot%202025-11-06%20212149.png)
![](./Screenshot%202025-11-06%20212526.png)

### Links
- Solution URL:(https://github.com/911Sunag/Ping-single-column-coming-soon-page)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

```html
<div class="heading">
      <h1>We are launching <span>soon!</span></h1>
      <small>Subscribe and get notified</small>
</div>
```
```css
#error {
  position: absolute;
  color: hsl(354, 100%, 66%);
  font-size: 0.7rem;
  font-style: italic;
  top: 110%;
  left: 1rem;
}
.input-error {
  border: 2px solid hsl(354, 100%, 66%);

}
.input-success {
  border: 2px solid hsl(223, 87%, 63%);
}
```
```js
button.addEventListener("click", (r) => {
  r.preventDefault();
  const email = emailInput.value.trim();
  emailInput.classList.remove("input-error", "input-success");
  errorMsg.textContent ="";

  if (email === "") {
    errorMsg.textContent = "Email cannot be empty.";
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
```
## Author
- Frontend Mentor - [@911Sunag](https://www.frontendmentor.io/profile/911Sunag)
