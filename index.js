const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3017;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cart', (req, res) => {
    res.render('cart');
})

app.get('/silver', (req, res) => {
    res.render('silver');
})



app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`)
  });