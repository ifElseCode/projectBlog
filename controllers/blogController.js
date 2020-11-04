const Blog = require('../models/blog');

const blogs_get = async (req, res) => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	try {
		const blogs = await Blog.find().sort({ date: -1 });
		res.render('blog/blogs.ejs', { blogs, months });
	}

	catch (err) {
		console.log(err);
	}
	
}

const blog_get = async (req, res) => {
	const id = req.params.id;
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	try {
		const blog = await Blog.findById(id);
		res.render('blog/blog', { blog, months });
	}
	catch (err) {
		console.log(err);
	}
}

const blog_like_patch = (req, res) => {	

	const id = req.params.id;
	const email = req.body.email;

	Blog.findById(id)
	  .then(blog => {
			blog.likes.push(email)
			blog.save()
				.then(result => res.status(200).json({ result }))
				.catch(err => console.log(err));
		});
		
}

module.exports = {
	blogs_get,
	blog_get,
	blog_like_patch
}