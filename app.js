const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);

app.get('/', function(req, res) {
    res.render('blog/index');
})

app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`)
})
