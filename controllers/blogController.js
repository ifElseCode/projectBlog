const { db } = require('../models/blog');
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

const blog_like = ('/liked', (req, res) => {
  const click = {clickTime: newDate()};
  console.log(click)

  db.collection('clicks').insertOne (click(err, result) , {
    if(err){
      return console.log(err);
    }
  })
})


module.exports = {
	blogs_get,
  blog_get,
  blog_like
};
