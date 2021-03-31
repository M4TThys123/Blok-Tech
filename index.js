const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//homepagina
app.get('/', (req, res) => {
  res.render('home',{})
});

//movies
app.get('/movies', (req, res) => {
    res.send('A List of movies')
});

//movies onderverdeelde pagina
app.get('/movies/:movieId', (req, res) => { 
    res.send(`<h1>Detailpagina van film ${req.params.movieId} </h1>`)
});

//404 foutmelding
app.use(function (req, res, next) {
    res.status(404).send("Sorry we kunnen deze pagina niet vinden!")
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
