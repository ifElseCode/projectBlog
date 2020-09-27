const form = document.querySelector("form");

const emailErrors = document.querySelector(".emailErrors");
const passwordErrors = document.querySelector(".passwordErrors");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  emailErrors.textContent = "";
  passwordErrors.textContent = "";

  const email = form.email.value;
  const password = form.password.value;
  
  try {
    const res = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    console.log(data);
    if (data.errors) {
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