const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const title = form.title.value;
	const author = form.dataset.doc;
	const content = form.content.value;

	try {
		fetch('/dashboard/blogs/create', {
			method: 'POST',
			body: JSON.stringify({ title, author, content }),
			headers: { 'Content-Type': 'application/json' },
		});
		location.assign('/dashboard/blogs');
	} catch (err) {
		console.log(err);
	}
});
