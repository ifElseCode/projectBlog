const deleteButton = document.querySelectorAll(".delete");
const adminButtons = document.querySelectorAll(".admin");
const authorButtons = document.querySelectorAll(".author");

deleteButton.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const id = button.dataset.doc;
    const endpoint = `/dashboard/users/${id}`;
    fetch(endpoint, {
      method: "DELETE"
    })
      .then(response => window.location.reload())
      .catch(err => console.log(err));
  });
})

adminButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const id = button.dataset.doc;
    const endpoint = `/dashboard/users/admin/${id}`;
    fetch(endpoint, {
      method: "PATCH"
    })
      .then(response => window.location.reload())
      .catch(err => console.log(err));
  });
});

authorButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const id = button.dataset.doc;
    const endpoint = `/dashboard/users/author/${id}`;
    fetch(endpoint, {
      method: "PATCH"
    })
      .then(response => window.location.reload())
      .catch(err => console.log(err));
  });
});