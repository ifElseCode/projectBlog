const form = document.querySelector("form");
//query the DOM for invisible error divs
const usernameErrors = document.querySelector("");
const emailErrors = document.querySelector("");
const passwordErrors = document.querySelector("");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  usernameErrors.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;
  
  try {
    const res = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    console.log(data);
    if (data.errors) {
      usernameErrors.textContent = data.errors.username;
      emailError.textContent = data.errors.email;
      passwordError.textContent = data.errors.password;
    }
  }
  catch (err) {
    console.log(err);
  }
});