const { db } = require('../models/blog');
const Blog = require('../models/blog');
const { db } = require('../models/blog');

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
	} catch (err) {
		console.log(err);
	}
};

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
		res.render('blog/blog.ejs', { blog, months });
	} catch (err) {
		console.log(err);
	}
};
const blog_like_patch = async (req, res) => {	
	const id = req.params.id;
	const like = req.params.like;
	try{
		like = await like.findByIdAndUpdate(id,{$inc: {quantity : 1, "blog.like" : 1}})
		res.render ('/blog.ejs', {like})
	} catch (err) {
		console.log(err);
	}};




module.exports = {
	blogs_get,
    blog_get,
  	blog_like_patch
};
