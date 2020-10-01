const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = form.title.value;
  const subtitle = form.subtitle.value;
  const author = form.author.value;
  const content = form.content.value;

  try {
    fetch("/dashboard/blogs/create", {
      method: "POST",
      body: JSON.stringify({ title, subtitle, author, content }),
      headers: { "Content-Type": "application/json" }
    });
    location.assign("/dashboard/blogs");
  }
  catch (err) {
    console.log(err);
  }
});