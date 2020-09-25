const form = document.querySelector("form");

//query the DOM for invisible error divs
const usernameErrors = document.querySelector(".usernameErrors");
const emailErrors = document.querySelector(".emailErrors");
const passwordErrors = document.querySelector(".passwordErrors");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  usernameErrors.textContent = "";
  emailErrors.textContent = "";
  passwordErrors.textContent = "";

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
      emailErrors.textContent = data.errors.email;
      passwordErrors.textContent = data.errors.password;
    }
    if (data.user) {
      location.assign("/");
    }
  }
  catch (err) {
    console.log(err);
  }
});