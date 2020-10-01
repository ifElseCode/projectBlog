const deleteButtons = document.querySelectorAll("form");

deleteButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const id = button.dataset.doc;
    const endpoint = `/dashboard/blog-posts/${id}`;
    fetch(endpoint, {
      method: "DELETE"
    })
      .then(response => window.location.reload())
      .catch(err => console.log(err));
  });
});