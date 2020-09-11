const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/main-layout');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('blog');
})

app.get('/admin', function(req, res) {
    res.render('admin', {layout: './layouts/admin-layout'})
});

app.listen(PORT, function() {
    console.log(`Server is running on http://localhost:${PORT}`)
})
